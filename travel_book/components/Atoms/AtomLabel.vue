<template>
    <label :for="label.for" :class="label.class">{{ label.text }}</label>
</template>

<script setup>
    defineProps(['label'])
</script>

<style scoped>

</style>
