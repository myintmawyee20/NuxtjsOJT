<template>
    <label :class="checkDesign" :for="checkLabel">{{ text }}</label>
</template>

<script setup lang="ts">
    defineProps(['checkDesign', 'checkLabel', 'text'])
</script>

<style scoped>

</style>
