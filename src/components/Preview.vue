<template>
  <div class="preview-wrapper" :class="wrapperClass">
    <div :id="`doc-${doc.id}`"></div>
    <div class="cover"></div>
    <div class="op-panel">
      <div class="btns">
        <button @click="toggleFavorite">
          <i class="far fa-star"></i>
        </button>
        <button @click="viewDoc">
          <i class="fas fa-eye"></i>
        </button>
        <button @click="editDoc">
          <i class="fas fa-edit"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import quill from "quill";
import { mapState } from "vuex";
export default {
  props: {
    doc: {
      required: true,
      type: Object
    },
    mode: {
      required: false,
      type: String,
      default: "line" || "card"
    }
  },
  computed: {
    ...mapState(["pickedDoc"]),
    wrapperClass() {
      let isPicked;
      if (!this.pickedDoc) {
        isPicked = false;
      } else {
        isPicked = this.pickedDoc.id === this.doc.id;
      }
      return {
        picked: isPicked,
        "preview-card": this.mode === "card",
        "preview-line": this.mode === "line"
      };
    },
    createdTime() {
      const date = new Date(parseInt(this.doc.timeStamps[0]));
      let d;
      d = `Created: ${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`;
      return d;
    },
    lastModify() {
      const date = new Date(
        parseInt(this.doc.timeStamps[this.doc.timeStamps.length - 1])
      );
      let d;
      d = `Modified: ${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`;
      return d;
    }
  },
  mounted() {
    // instantiate Quill for preview Delta
    const option = {
      readOnly: true
    };
    const container = document.querySelector(`#doc-${this.doc.id}`);
    const editor = new quill(container, option);

    this.delta = JSON.parse(this.doc.deltaString);

    editor.setContents(this.delta);
  },
  data() {
    return {
      delta: undefined,
      textString: undefined
    };
  },
  methods: {
    toggleFavorite() {},
    viewDoc() {
      this.pickDoc();
      this.$router.push("/editor");
    },
    pickDoc() {
      this.$store.commit("PICK_DOC", this.doc);
    },
    editDoc() {},
    deleteDoc(e) {
      this.$store.dispatch("deleteDoc", this.doc);
      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss">
.picked {
  //   background-color: bisque;
}
.preview-wrapper {
  position: relative;
  overflow: hidden;
}
.cover {
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0 -1em 1em 0.2em white inset;
  width: 100%;
  height: 100%;
}
.preview-line {
  height: calc(24px + 2em);
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 3px black;
  border-radius: var(--g-m);
  margin: var(--g-m);
  overflow: hidden;

  * {
    font-size: var(--fs-s);
    font-weight: initial;
    text-decoration: none;
    font-style: initial;
  }

  .ql-editor {
    overflow: hidden;
  }
  &:hover {
    .op-panel {
      transform: translateX(-100%);
    }
  }
  .op-panel {
    position: absolute;
    top: 0%;
    left: 100%;
    height: 100%;
    transition: transform 0.5s;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: var(--g-l) var(--g-m);
    background: rgba(0, 0, 0, 0.8);
    .btns {
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      i {
        font-size: var(--fs-m);
      }
    }
    button {
      color: white;
      background: transparent;
      outline: none;
      border: none;
      &:hover {
        cursor: pointer;
      }
      &:active {
      }
    }
  }
}
.preview-card {
  width: 150px;
  height: 200px;
  box-shadow: 0 0 3px black;
  border-radius: var(--g-m);
  margin: var(--g-m);
  overflow: hidden;

  .ql-editor {
    overflow: hidden;
  }
  &:hover {
    .op-panel {
      transform: translateY(-100%);
    }
  }
  .op-panel {
    font-size: var(--fs-xs);
    position: absolute;
    top: 100%;
    right: 0%;
    width: 100%;
    transition: transform 0.5s;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: var(--g-l) var(--g-m);
    background: rgba(0, 0, 0, 0.8);
    .btns {
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
    }
    button {
      font-size: var(--fs-m);
      color: white;
      background: transparent;
      outline: none;
      border: none;
      &:hover {
        cursor: pointer;
      }
      &:active {
      }
    }
  }
}
</style>