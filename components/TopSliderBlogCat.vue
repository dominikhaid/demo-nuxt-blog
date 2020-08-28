<template>
  <section id="top-carrusel" class="blog-carrusel">
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
      <b-carousel-item v-for="(slide, index) in items" :key="index">
        <section :class="`hero is-medium is-bold`">
          <span class="image">
            <a :href="slide.link" tagert="_blank">
              <img :src="slide.image" />
            </a>
            <div class="hero-body has-text-centered carrusel-titel">
              <h1 class="title">{{ slide.title }}</h1>
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
      interval: 3000,
      items: [
        {
          title: "Created with Stroyblok",
          image: "images/stroyblok.svg",
          link: "https://www.storyblok.com/",
        },
        {
          title: "Organize your content for the world.",
          image: "images/stroyblok.svg",
          link: "https://www.storyblok.com/",
        },
      ],
    };
  },
  methods: {},
};
</script>
