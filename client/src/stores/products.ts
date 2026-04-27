import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { DataEnvelope, DataListEnvelope, Product } from '../../../server/types'
import useSessionStore from './sessions'

export const useProductsStore = defineStore('products', () => {
  const session = useSessionStore()
  const products = ref<Product[]>([])

  async function loadProducts() {
    const data = await session.api<DataListEnvelope<Product>>('products')
    products.value = data.data
  }

  async function getProduct(id: number) {
    return session.api<DataEnvelope<Product>>(`products/${id}`)
  }

  async function createProduct(product: Omit<Product, 'id'>) {
    const data = await session.api<DataEnvelope<Product>>('products', product)
    products.value.push(data.data)
    return data
  }

  async function updateProduct(id: number, product: Omit<Product, 'id'>) {
    const data = await session.api<DataEnvelope<Product>>(`products/${id}`, product, {
      method: 'PATCH',
    })
    const index = products.value.findIndex((p) => p.id === id)
    if (index !== -1) {
      products.value[index] = data.data
    }
    return data
  }

  async function deleteProduct(id: number) {
    const data = await session.api<DataEnvelope<Product>>(`products/${id}`, null, {
      method: 'DELETE',
    })
    const index = products.value.findIndex((p) => p.id === id)
    if (index !== -1) {
      products.value.splice(index, 1)
    }
    return data
  }

  return { products, loadProducts, getProduct, createProduct, updateProduct, deleteProduct }
})
