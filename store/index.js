export const state = () => ({
  cacheVersion: "",
  language: "en",
  settings: {
    main_navi: []
  },
  topslider: {
    top_slides: []
  }
});

export const mutations = {
  setSettings(state, settings) {
    state.settings = settings;
  },
  setTopSlider(state, topslider) {
    state.topslider = topslider;
  },
  setLanguage(state, language) {
    state.language = language;
  },
  setCacheVersion(state, version) {
    state.cacheVersion = version;
  }
};

export const actions = {
  loadTopSlider({ commit }, context) {
    return this.$storyapi
      .get(`cdn/stories/topslider`, {
        version: context.version
      })
      .then(res => {
        console.debug("TopSlider", res.data.story.content);
        commit("setTopSlider", res.data.story.content);
      })
      .catch(err => {
        console.error("ERROR", err);
      });
  },
  loadSettings({ commit }, context) {
    return this.$storyapi
      .get(`cdn/stories/${context.language}/settings`, {
        version: context.version
      })
      .then(res => {
        console.debug("Settings", res.data.story.content);
        commit("setSettings", res.data.story.content);
      });
  }
};
