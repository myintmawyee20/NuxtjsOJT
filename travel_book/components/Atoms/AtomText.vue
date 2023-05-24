<template>
    <p :class="textDesign">{{ text }}
        <slot/>
    </p>
</template>

<script setup lang="ts">
defineProps(['textDesign', 'text'])
</script>

<style scoped></style>
