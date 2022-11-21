<template>
  <article v-if="product" class="card">
    <div class="grid grid-cols-2 gap-10">
      <p class="p-7">
        <img :src="product.image" alt="`Image of ${product.title}`" class="mx-auto my-7"/>
      </p>
      <div class="p-7">
        <h1 class="text-4x1 my-7">
          {{ product.title }}
        </h1>
        <p class="text-xl my-7">
          Price - ${{ product.price }} |
          {{ product.category }}</p>
        <h2 class="font-bold border-b-2 mb-4 pb-2">Description</h2>
        <p>{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
const {product} = defineProps(['product']);
</script>

