<template>
    <h3 :class="headerDesign">{{ text }}</h3>
</template>

<script setup lang="ts">
defineProps(['headerDesign', 'text'])
</script>

<style scoped></style>
