<template>
  <h2>Products details for {{ id }}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum dolorum, excepturi fuga hic illum impedit
    in iusto magni, modi molestiae nisi, praesentium quam quisquam quod sint tenetur vitae!</p>
</template>

<script setup>
const {id} = useRoute().params
</script>

<style scoped>

</style>