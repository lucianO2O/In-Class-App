import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {Product} from '../types'
import { useProductsStore } from './products'

export type CartItem = {
    product: Product
    quantity: number
}

export const useCartStore = defineStore('cart', () => {
    const items = ref<CartItem[]>([])

    const productsStore = useProductsStore()

    function addToCart(productId: number) {
      const item = items.value.find(item => item.product.id === productId)
      if (item) {
        item.quantity++
        return
      }

      const product = productsStore.products.find(p => p.id === productId)
      if (product) {
        items.value.push({ product, quantity: 1 })
      }
    }
    
    function removeFromCart(productId: number) {
        items.value = items.value.filter(item => item.product.id !== productId)
    }

    return {items, addToCart, removeFromCart}
})
