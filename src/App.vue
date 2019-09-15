<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">User</router-link>|
      <router-link to="/editor">Editor</router-link>|
      <router-link to="/articles">Articles</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  --g-s: 5px;
  --g-m: 10px;
  --g-l: 15px;

  --ff: "Source Sans Pro", "Avenir", Helvetica, Arial, sans-serif;
  --fs-xs: 12px;
  --fs-s: 16px;
  --fs-m: 20px;
  --fs-l: 24px;
  --fs-xl: 28px;

  --c-main: rgb(160, 185, 233);
  --c-minor: rgb(255, 250, 187);

  --c-hover: rgb(225, 232, 243);
  --c-active: gray;
  --c-selected: rgb(248, 253, 180);
  --c-rest: rgba(255, 255, 255, 0.5);
  --c-label: rgb(160, 160, 160);
  --c-highlight: rgb(255, 187, 0);

  --c-error: rgb(187, 74, 22);
  --c-safe: steelblue;
}
</style>
