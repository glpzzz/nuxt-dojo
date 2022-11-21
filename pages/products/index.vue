<template>
  <h1>Products</h1>
  <ul class="grid grid-cols-4 gap-5">
    <li v-for="p in products" :key="p.id">
      <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})

// fetch products
const {data: products} = await useFetch('https://fakestoreapi.com/products')


</script>

<style scoped>

</style>