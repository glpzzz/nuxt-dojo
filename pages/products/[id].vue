<template>
  <article v-if="product">
    <h1>
      {{ product.title }}
      <small>{{ product.category }}</small>
    </h1>
    <p>
      <img :src="product.image" alt="`Image of ${product.title}`"/>
    </p>
    <p>{{ product.description }}</p>
  </article>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})
const {id} = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`
const {data: product} = await useFetch(uri, {key: id});
</script>

<style scoped>

</style>