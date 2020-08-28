<template>
  <div>
    <top-nav />
    <main id="main" role="main">
      <nuxt />
    </main>
    <bottom-footer />
  </div>
</template>

<script>
import TopNav from "~/components/TopNav.vue";
import BottomFooter from "~/components/BottomFooter.vue";

export default {
  components: {
    TopNav,
    BottomFooter,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
</style>
