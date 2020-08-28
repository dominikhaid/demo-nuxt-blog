<template>
  <div v-bind:class="{'tile is-vertical is-4': index < 2 ,  'tile is-vertical is-3': index ===2}">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article
          v-bind:class="{'tile is-child notification is-primary': index < 2 ,  'tile is-child notification is-info': index ===2}"
        >
          <div v-editable="blok" class="content">
            <div class="content feature__icon">
              <img :src="this.blok.icon" class="feature__icon" />
            </div>
            <p class="title">{{ blok.name}}</p>
            <p class="subtitle">{{ blok.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  props: ["blok", "index"],
};
</script>

