import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// firebase
import firebase from '@/firebaseConfig.js'

firebase.auth().onAuthStateChanged(user => {
  store.commit('SET_CURRENT_USER', user);
  store.getters.rootCollection.onSnapshot(snapshot => {
    store.dispatch('readDocs');
  })
})

const store = new Vuex.Store({
  state: {
    // login
    currentUser: null,
    loginMsg: null,
    // preview
    currentCollections: [],
    currentContents: [],
    previewMode: 'card' || 'line',
    // editor
    pickedDoc: null,
    readOnly: true
  },
  getters: {
    rootCollection: state => {
      if (!state.currentUser) {
        return null
      }
      return firebase.firestore().collection("users").doc('uid').collection(
        state.currentUser.uid);
    },
    currentCollection: (state, getters) => {
      if (!state.currentUser) {
        return null
      }
      if (!state.currentCollections.length) {
        return getters.rootCollection;
      }
      const relativePath = state.currentCollections.join('/sub/');
      return getters.rootCollection.doc(`/sub/${relativePath}`);
    }
  },
  mutations: {
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    SET_LOGIN_MSG(state, loginMsg) {
      state.loginMsg = loginMsg;
    },
    CLEAR_CURRENT_CONTENTS(state) {
      state.currentContents.splice(0);
    },
    PICK_DOC(state, doc) {
      state.pickedDoc = doc;
    },
    DROP_DOC(state) {
      state.pickedDoc = null;
    },
    TOGGLE_MODE(state) {
      state.readOnly = !state.readOnly;
    },
    TOGGLE_PREVIEW_MODE(state) {
      if (state.previewMode === "card") {
        state.previewMode = "line";
      } else if (state.previewMode === "line") {
        state.previewMode = "card";
      }
    }
  },
  actions: {
    deleteDoc(context, doc) {
      context.commit('DROP_DOC');
      firebase.firestore().doc(doc.fullPath).delete().then(() => {
        console.log('Document deleted');
      }).catch(err => {
        console.log(err);
      })
    },
    readDocs(context) {
      context.commit('CLEAR_CURRENT_CONTENTS');

      context.getters.currentCollection.get().then(snapShot => {
        snapShot.docs.forEach(doc => {
          context.state.currentContents.push(doc.data());
        })
      })
    },
    writeDoc(context, {
      delta,
      docID
    }) {
      if (!docID) {
        docID = `${Date.now()}`
      }
      const jsonString = JSON.stringify(delta);
      const collection = context.getters.currentCollection;
      collection.doc(docID).get().then(doc => {
          if (!doc.exist) {
            // initialize doc
            const newDoc = {
              id: docID,
              creator: context.state.currentUser.email,
              timeStamps: [docID],
              deltaString: jsonString,
              fullPath: doc.ref.path
            };
            collection.doc(docID).set(newDoc);
            context.commit('PICK_DOC', newDoc);
          } else {
            // update doc
            collection.doc(docID).update({
              timeStamps: firebase.firestore.FieldValue.arrayUnion(`${Date.now()}`),
              deltaString: jsonString,
            })
          }
        })
        .catch(err => {
          console.log(err);
        })
    },
    signUp(context, {
      email,
      password
    }) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then((res) => {
          context.commit('SET_LOGIN_MSG', {
            msg: 'Account  has been successfully created!',
            type: 'success'
          })
        })
        .catch(err => {
          context.commit('SET_LOGIN_MSG', {
            msg: err.message,
            type: 'error'
          });
        })
    },
    logIn(context, {
      email,
      password
    }) {
      firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
          context.commit('SET_LOGIN_MSG', {
            msg: 'Successfully sign in!',
            type: 'success'
          });
        })
        .catch(err => {
          context.commit('SET_LOGIN_MSG', {
            msg: err.message,
            type: 'error'
          });
        })
    },
    signOut(context) {
      firebase.auth().signOut().then(res => {
        context.commit('SET_LOGIN_MSG', {
          msg: 'Successfully sign out.',
          type: 'success'
        });
      }).catch(err => {
        context.commit('SET_LOGIN_MSG', {
          msg: err.message,
          type: 'error'
        });
      })
    },
  },
});


export default store
