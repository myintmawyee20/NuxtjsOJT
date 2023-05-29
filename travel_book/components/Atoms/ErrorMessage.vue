<template>
    <VErrorMessage :name="message.name" :class="message.class" />
</template>

<script setup lang="ts">
defineProps(['message'])
</script>

<style scoped>

</style>
