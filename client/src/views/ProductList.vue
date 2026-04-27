<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import SideBar from '@/components/SideBar.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/stores/cart';

const products = useProductsStore()
products.loadProducts()
const cart = useCartStore()

function addToCart(productId: number) {
  cart.addItem(productId)
}
</script>

<template>
  <h1 class="title is-1">Product List</h1>
  <p v-if="products.products.length === 0" class="has-text-grey">Loading products…</p>
  <div class="grid is-col-min-10" style="padding-right: 2rem;">
    <div v-for="product in products.products" :key="product.id" class="box product-card">
      <img :src="product.thumbnail" alt="Product Image" class="image is-4by3">
      <h4 class="title is-6">{{ product.title }}</h4>
      <h6 class="subtitle is-6">{{ product.category }}<span v-if="product.brand"> / {{ product.brand }}</span></h6>
      <p class="description">{{ product.description }}</p>
      <div class="card-footer-row">
        <span class="price">${{ Number(product.price).toFixed(2) }}</span>
        <button class="button is-primary is-small add-button" @click="addToCart(product.id)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <SideBar :width="320" :is-active="cart.isCartSidebarOpen" class="sidebar">
    <ShoppingCart />
  </SideBar>
</template>

<style scoped>
.subtitle {
  margin-bottom: .5em;
  font-style: italic;
}

.product-card {
  display: flex;
  flex-direction: column;
}

.description {
  flex: 1 1 auto;
  margin-bottom: .75em;
}

.card-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.add-button {
  margin-top: 0;
}

.price {
  font-weight: bold;
  color: #3273dc;
}
</style>
