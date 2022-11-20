<template>
  <SiteHeader/>
  <h1>Products details for {{ id }}</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum dolorum, excepturi fuga hic illum impedit
    in iusto magni, modi molestiae nisi, praesentium quam quisquam quod sint tenetur vitae!</p>
</template>

<script setup>
const {id} = useRoute().params
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>