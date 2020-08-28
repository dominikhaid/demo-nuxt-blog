<template>
  <section class="section dev-box">
    <div class="container">
      <div id="dev-box" class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="blok.image.filename" alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ blok.name }}</strong>
                <small>{{ blok.description }}</small>
                <br />
                {{ blok.body }}
                <br />
                <a href="https://www.dominikhaid.de" target="_blank">www.dominikhaid.de</a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {},
  props: ["blok", "index"],
  methods: {
    toGmt(a) {
      let newDate = new Date(a);
      return newDate.toGMTString(newDate);
    },
    toLog(a) {
      console.debug(a);
    },
  },
};
</script>
