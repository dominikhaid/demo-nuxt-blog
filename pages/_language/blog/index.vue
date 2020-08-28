<template>
  <div>
    <section class="section hero">
      <div class="container">
        <div class="hero-body">
          <h1 class="title">Blog Component created with Storyblok</h1>
          <h2 class="subtitle">Organize your content for the world.</h2>
          <div class="content">
            <b-message>
              <a href="https://www.storyblok.com/" target="_blank">Stroyblok</a>
              is an API-based CMS wich helps you deliver and organize your
              content acrosss the world.
              <br />They got outstandig features such
              as the live editor.
              <a
                href="https://www.storyblok.com/"
                target="_blank"
              >Stroyblok</a>
              helps you to create and share your content in almmost no time.
            </b-message>
          </div>
        </div>
      </div>
    </section>

    <section id="feature-icons" class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-one-third">
            <b-icon class="has-text-primary" icon="mdi mdi-coffee" size="is-large"></b-icon>
            <p>User friendly Web Ui</p>
          </div>
          <div class="column is-one-third">
            <b-icon class="has-text-primary" icon="mdi mdi-api" size="is-large"></b-icon>
            <p>API based</p>
          </div>
          <div class="column is-one-third">
            <b-icon class="has-text-primary" icon="mdi mdi-cog" size="is-large"></b-icon>
            <p>Dependency free</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section hero">
      <div class="container">
        <div class="hero-body">
          <h1 class="title">Blogpots</h1>
          <h2 class="subtitle">Find some sample blog posts below.</h2>
          <hr />
          <div class="content">
            <div class="columns is-vcentered">
              <div
                :key="blogPost.content._uid"
                v-for="blogPost in data.stories"
                class="column is-half blog-card"
              >
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <nuxt-link class="blog__detail-link" :to="'/' + blogPost.full_slug">
                        <img :src="blogPost.content.thumb.filename" alt="Placeholder image" />
                      </nuxt-link>
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">
                          <nuxt-link
                            class="blog__detail-link"
                            :to="'/' + blogPost.full_slug"
                          >{{ blogPost.content.name }}</nuxt-link>
                        </p>
                      </div>
                    </div>
                    <div class="content">
                      {{ blogPost.content.intro }}
                      <br />
                      <br />
                      <time class="has-text-primary" datetime="2016-1-1">
                        {{
                        toGmt(blogPost.published_at)
                        }}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "blog",
  data() {
    return { total: 0, data: { stories: [] } };
  },
  methods: {
    toGmt(a) {
      let newDate = new Date(a);
      return newDate.toGMTString(newDate);
    },
    toLog(a) {
      console.debug(a);
    },
  },
  asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    return context.app.$storyapi
      .get("cdn/stories", {
        version: version,
        starts_with: `${context.store.state.language}/blog`,
        cv: context.store.state.cacheVersion,
      })
      .then((res) => {
        return res;
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
.blog__overview {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 60px;

  p {
    line-height: 1.6;
  }
}

.blog__detail-link {
  color: #000;
}
</style>
