<template>
  <section class="util__container">
    <div v-editable="story.content" class="blog">
      <img id="post-image" :src="story.content.thumb.filename" />
      <h1 class="title is-1">{{ story.content.name }}</h1>
      <p>
        <strong>{{ story.content.intro }}</strong>
      </p>
      <br />
      <div class="blog__body" v-html="body(this.story.content.body)"></div>
    </div>
  </section>
</template>

<script>
import marked from "marked";

export default {
  layout: "post",
  data() {
    return {
      story: { content: { body: "" } },
    };
  },

  methods: {
    body(a) {
      return marked(a);
    },
  },
  mounted() {
    // use the bridge to listen to events
    this.$storybridge.on(["input", "published", "change"], (event) => {
      if (event.action == "input") {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        });
      }
    });
  },
  asyncData(context) {
    // Load the JSON from the API
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get(
        `cdn/stories/${context.params.language}/blog/${context.params.slug}`,
        {
          version: version,
          cv: context.store.state.cacheVersion,
        }
      )
      .then((res) => {
        console.debug(res);
        return res.data;
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        });
      });
  },
};
</script>

<style lang="scss">
.blog {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 100px;

  img {
    width: 100%;
    height: auto;
  }
}

.blog__body {
  line-height: 1.6;
}
</style>
