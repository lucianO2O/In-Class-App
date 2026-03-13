<script setup lang="ts">
import { useCartStore } from '@/stores/cart'


const cart = useCartStore()
</script>

<template>
  <div>
    <h1 class="title is-4">Shopping Cart</h1>
    <p v-if="cart.items.length === 0" class="subtitle is-6">Your cart is empty.</p>
    <ul v-else>
      <li v-for="item in cart.items" :key="item.product.id">
        <div class="box">
          <h4 class="title is-6">{{ item.product.title }}</h4>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: ${{ item.product.price }}</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
