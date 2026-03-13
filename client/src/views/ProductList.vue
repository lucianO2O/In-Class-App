<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import SideBar from '@/components/SideBar.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/stores/cart';

const products = useProductsStore()
const cart = useCartStore()

function addItem(productId: number) {
  cart.addToCart(productId)
}
</script>

<template>
    <h1 class="title is-1"> Product List</h1>
    <div class="grid is-col-min-10 px-6">
      <div v-for="product in products.products" :key="product.id" class="box">
        <img :src="product.thumbnail" alt="Product Image" class="image is-4by3">

        <h4 class="title is-6">{{ product.title }}</h4>
        <h6 class="subtitle is-6">{{ product.category }} / {{ product.brand }}</h6>
        <p>{{ product.description }}</p>
        <button class="button is-primary is-small add-button" @click="addItem(product.id)">
        Add to Cart
      </button>
        <div>
          <span class="price">${{ product.price }}</span>
        </div>
      </div>
    </div>

    <SideBar :width="300">
      <ShoppingCart />
    </SideBar>
</template>

<style scoped>
.add-button {
  float: right;
  margin-top: .5em;
}
.price {
  font-weight: bold;
  color: #318cdb;
}
</style>
