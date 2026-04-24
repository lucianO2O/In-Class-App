import { defineStore } from 'pinia'
import type { Product } from '../../../server/types'
import { ref } from 'vue'
import { api } from '../services/myFetch'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  const loadProducts = async () => {
    try {
      isLoading.value = true
      const response = await api<any>('products')
      console.log('API Response:', response)
      products.value = response.data
      console.log('Products set:', products.value)
      error.value = null
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load products'
      console.error('Error loading products:', err)
    } finally {
      isLoading.value = false
    }
  }

  loadProducts()

  return { products, isLoading, error, loadProducts }
})
