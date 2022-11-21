<template>
  <h1>Products</h1>
  <ul class="grid grid-cols-4 gap-5">
    <ProductCard v-for="p in products" :product="p"/>
  </ul>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})

// fetch products
const {data: products} = await useFetch('https://fakestoreapi.com/products')
useHead({
  title: 'Our products',
  meta: [
    {name: 'description', content: 'Nuxt 3 Merch'},
  ]
})
</script>

<style scoped>

</style>