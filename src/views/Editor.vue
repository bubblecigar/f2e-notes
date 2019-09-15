<template>
  <div :class="{'readOnly':readOnly}" class="editor-wrapper">
    <button @click="toggleEditMode">edit</button>
    <div class="operations" v-show="!readOnly">
      <button @click="createDoc">save as new</button>
      <button v-if="pickedDoc" @click="saveDoc">save</button>
    </div>
    <div id="text-editor"></div>
  </div>
</template>

<script>
import quill from "quill";
import store from "store";
import Preview from "@/components/Preview.vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  components: { Preview },
  mounted() {
    const toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"] // remove formatting button
    ];
    const option = {
      // debug: "info",
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: "Compose an epic...",
      readOnly: this.readOnly,
      theme: "snow"
    };
    const container = document.querySelector("#text-editor");
    const editor = new quill(container, option);
    this.editor = editor;

    editor.on("text-change", () => {
      this.delta = this.editor.getContents();
    });

    if (this.pickedDoc) {
      const delta = JSON.parse(this.pickedDoc.deltaString);
      this.editor.setContents(delta);
    }
  },
  computed: {
    ...mapState(["currentContents", "pickedDoc", "readOnly"]),
    ...mapGetters(["rootCollection", "currentCollection"])
  },
  data() {
    return {
      editor: undefined,
      delta: undefined,
      previewMode: "card"
    };
  },
  watch: {
    readOnly() {
      if (this.readOnly === true) {
        this.editor.disable();
      } else {
        this.editor.enable();
      }
    },
    pickedDoc: {
      deep: true,
      handler() {
        if (!this.pickedDoc) {
          this.clearEditor();
          return;
        }
        const delta = JSON.parse(this.pickedDoc.deltaString);
        this.editor.setContents(delta);
      }
    }
  },
  methods: {
    toggleMode() {
      if (this.previewMode === "card") {
        this.previewMode = "line";
      } else if (this.previewMode === "line") {
        this.previewMode = "card";
      }
    },
    toggleEditMode() {
      this.$store.commit("TOGGLE_MODE", this.doc);
    },
    clearEditor() {
      this.editor.setContents([]);
      this.editor.setText("");
    },
    readDocs() {
      this.$store.dispatch("readDocs");
    },
    createDoc() {
      this.$store.dispatch("writeDoc", { delta: this.delta });
    },
    saveDoc() {
      this.$store.dispatch("writeDoc", {
        delta: this.delta,
        docID: this.pickedDoc.id
      });
    }
  }
};
</script>

<style lang="scss" >
* {
  // outline: 1px solid black;
}
#text-editor,
.ql-toolbar {
  max-width: 1065px;
  margin: 0 auto;
  border: 1px solid lightgray;
}
.editor-wrapper .ql-toolbar {
  border: 1px solid lightgray;
  border-bottom: 0px solid lightgray;
}
.readOnly .ql-toolbar {
  display: none;
}
</style>
