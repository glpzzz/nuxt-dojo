<template>
  <h1>About</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, autem cupiditate ea excepturi itaque iusto
    natus non optio porro quae quidem similique ut voluptatem. Asperiores labore nesciunt rerum saepe voluptas?</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cum cumque natus nisi odio quis quod tempore,
    voluptas voluptatum?</p>
  <pre>{{ dynamic }}</pre>
  <pre>{{ data }}</pre>
</template>

<script setup>
const {dynamic} = await useFetch('/api/currency/USD')
const {data} = await useFetch('/api/ninja?name=Mario', {
  method: 'post',
  body: {
    age: 30
  }
})

</script>

<style scoped>

</style>