<template>
  <section class="section hero">
    <div class="container">
      <div class="hero-body">
        <h1 class="title">{{ blok.headline }}</h1>
        <h2 class="subtitle">{{ blok.subheadline }}</h2>
        <div class="content">
          <b-message v-html="body(blok.body[0].block_content)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from "marked";
export default {
  props: ["blok"],
  computed: {},
  methods: {
    toLog(a) {
      console.debug(a);
    },
    body(a) {
      return marked(a);
    },
  },
};
</script>

<style lang="scss">
.teaser__pag {
  width: 100%;
  text-align: center;
  margin: 30px 0;
}

.teaser__pag-dot {
  text-indent: -9999px;
  border: 0;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  padding: 0;
  margin: 5px 6px;
  background-color: #ccc;
  -webkit-appearance: none;
  cursor: pointer;

  &--current {
    background-color: #000;
  }
}
</style>
