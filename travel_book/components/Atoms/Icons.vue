<template>
    <i :class="iconDesign">{{text}}</i>
</template>

<script setup lang="ts">
defineProps(['iconDesign', 'text'])
</script>

<style scoped>

</style>
