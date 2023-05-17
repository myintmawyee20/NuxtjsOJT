<template>
    <button :class="button" :type="type" @click="$emit('handleBtn')">{{ text }}
        <slot />
    </button>
</template>

<script setup>
defineProps(['text', 'button', 'type', 'title'])
</script>

<style scoped></style>
