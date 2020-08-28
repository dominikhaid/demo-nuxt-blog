<template>
  <div>
    <component
      :key="blok._uid"
      v-for="(blok,index) in blok.devbox"
      :index="index"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>

<script>
export default {
  computed: {},
  props: ["blok"],
  // mounted() {
  //   console.debug(this);
  // },
};
</script>
