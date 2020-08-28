<template>
  <div v-editable="blok" class="tile is-ancestor">
    <component
      :key="blok._uid"
      v-for="(blok,index) in blok.columns"
      :index="index"
      :blok="blok"
      :is="blok.component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"],
};
</script>
