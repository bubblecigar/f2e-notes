<template>
  <div>
    <button @click="toggleMode">
      <i class="fas fa-list"></i>
    </button>
    <div class="articles">
      <Preview v-for="doc in currentContents" :doc="doc" :mode="previewMode"></Preview>
    </div>
  </div>
</template>

<script>
import store from "store";
import Preview from "@/components/Preview.vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  components: { Preview },
  computed: {
    ...mapState(["currentContents", "pickedDoc", "previewMode"]),
    ...mapGetters(["rootCollection", "currentCollection"])
  },
  data() {
    return {
      editor: undefined,
      delta: undefined
    };
  },
  methods: {
    toggleMode() {
      this.$store.commit("TOGGLE_PREVIEW_MODE");
    }
  }
};
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-flow: row wrap;
}
</style>