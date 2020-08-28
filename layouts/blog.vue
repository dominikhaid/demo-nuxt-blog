<template>
  <div>
    <top-slider-blog-cat />
    <top-nav />
    <main id="main" role="main">
      <nuxt />
    </main>
    <bottom-footer />
  </div>
</template>

<script>
import TopNav from "~/components/TopNav.vue";
import TopSliderBlogCat from "~/components/TopSliderBlogCat.vue";
import BottomFooter from "~/components/BottomFooter.vue";

export default {
  components: {
    TopNav,
    TopSliderBlogCat,
    BottomFooter,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
</style>
