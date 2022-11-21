<template>
  <ProductDetails v-if="product" :product="product"/>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})
const {id} = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`
const {data: product} = await useFetch(uri, {key: id});
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}
</script>

<style scoped>

</style>