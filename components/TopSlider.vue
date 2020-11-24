<template>
  <section id="top-carrusel">
    <b-carousel
      v-model="carousel"
      :animated="animated"
      :has-drag="drag"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :pause-info-type="pauseType"
      :interval="interval"
      :repeat="repeat"
    >
      <b-carousel-item v-for="(slide, index) in $store.state.topslider.top_slides" :key="index">
        <section :class="`hero is-medium is-bold`">
          <span class="image">
            <img :src="slide.image" />
            <div class="hero-body has-text-centered carrusel-titel">
              <h1 class="title">
                {{ slide.title }}
                <small
                  class="subtitle has-text-info is-left-align"
                >{{ slide.author }}</small>
              </h1>
            </div>
          </span>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      carousel: 0,
      animated: "fade",
      drag: false,
      autoPlay: true,
      pauseHover: false,
      pauseInfo: false,
      repeat: true,
      pauseType: "is-primary",
      interval: 4000,
    };
  },
  methods: {},
};
</script>
