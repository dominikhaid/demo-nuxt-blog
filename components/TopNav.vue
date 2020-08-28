<template>
  <header>
    <b-navbar class="container is-fluid">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="images/nuxtjs-typo-white.svg"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item
          :key="index"
          :id="navitem.link.cached_url"
          v-for="(navitem, index) in $store.state.settings.main_navi"
          :href="navitem.link.cached_url"
          :class="setActive(navitem.link.cached_url) ? 'active':''"
        >
          <nuxt-link
            :class="setActive(navitem.link.cached_url) ? 'active':''"
            :to="navitem.link.cached_url"
          >{{ navitem.name }}</nuxt-link>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>
<script>
export default {
  data() {
    return {
      active: "/",
    };
  },
  mounted() {
    this.active = window.location.pathname;
  },
  methods: {
    setActive(a) {
      return a === window.location.pathname;
    },
  },
};
</script>
