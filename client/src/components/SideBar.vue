<script setup lang="ts">

const props = defineProps<{
    width?: number,
    isActive?: boolean
}>()
</script>

<template>
    <div class="side-bar" :class="{ 'is-active': props.isActive }" :style="{ width: props.width + 'px' }">
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
    background-color: var(--bulma-body-background-color, #121212);
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
    transform: translateX(90%);
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    padding: 1rem;
}

.side-bar:hover,
.side-bar.is-active {
    transform: translateX(0);
}
</style>
