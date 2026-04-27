<script setup lang="ts">
import { useCartStore } from '@/stores/cart';


const cart = useCartStore()
</script>

<template>
    <div class="cart">
        <h1 class="title is-2">Shopping Cart</h1>
        <p v-if="cart.items.length === 0">Your cart is empty.</p>
        <ul v-else>
            <template v-for="item in cart.items" :key="item.product?.id">
                <li v-if="item.product" class="cart-item">
                    <img :src="item.product.thumbnail" alt="Product Image" class="image is-64x64">
                    <span>
                        {{ item.product.title }}
                    </span>
                    <span>X</span>
                    <select v-model="item.quantity" class="quantity select is-small">
                        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                    </select>
                    <span class="price">
                        = ${{ (item.product.price * item.quantity).toFixed(2) }}
                    </span>
                    <button class="delete is-small remove-btn"
                        @click="cart.removeItem(item.product.id)"
                        aria-label="remove item">
                    </button>
                </li>
            </template>
        </ul>
        <p v-if="cart.items.length > 0" class="total">
            Total: ${{ cart.totalPrice?.toFixed(2) }}
        </p>
    </div>
</template>

<style scoped>
.cart {
    padding: .5rem
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
}

.quantity {
    margin: 0 0.5em;
}

.total {
    font-weight: bold;
    margin-top: 1em;
}

.remove-btn {
    margin-left: 0.5em;
}
</style>
