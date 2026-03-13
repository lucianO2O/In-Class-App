<script setup lang="ts">

const props = defineProps<{
  isActive?: boolean
  width: number
}>()
</script>

<template>
  <div class="side-bar box" :class="{ 'is-active': props.isActive }" :style="{ width: props.width + 'px' }">
    <slot />
  </div>
</template>

<style scoped>
.side-bar {
  width: 250px;
  position: fixed;
  bottom: 0;
  right: 0;
  height: calc(100% - 56px);
  border-left: 1px solid  #ddd;
  transform: translateX(90%);
  transition: transform 0.3s ease-in-out;
}

.side-bar:hover,
.side-bar.is-active {
  transform: translateX(0);
}
</style>
