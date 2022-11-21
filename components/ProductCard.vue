<template>
  <li :key="product.id" class="card card-product text-center">
    <img :src="product.image" :alt="`Image of ${product.title}`"/>
    <p class="font-bold text-gray-500 m-4 truncate">
      {{ product.title }}
    </p>
    <p class="my-4">
      <NuxtLink :to="`/products/${product.id}`" class="btn">View Details</NuxtLink>
    </p>
  </li>
</template>

<script setup>
const {product} = defineProps(['product']);
</script>

