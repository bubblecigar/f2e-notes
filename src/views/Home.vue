<template>
  <div class="home">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button @click="signUp">signUp</button>
    <button @click="logIn">logIn</button>
    <button @click="signOut">signOut</button>
    <span>loginMsg:{{loginMsg}}</span>
    <span v-if="currentUser">currentUser:{{currentUser.email}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["currentUser", "loginMsg"])
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", {
        email: this.email,
        password: this.password
      });
    },
    logIn() {
      this.$store.dispatch("logIn", {
        email: this.email,
        password: this.password
      });
    },
    signOut() {
      this.$store.dispatch("signOut");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column;
  align-items: center;
  input {
    width: 200px;
  }
}
</style>