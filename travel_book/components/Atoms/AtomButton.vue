<template>
     <button :class="button" :type="type">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps(['button', 'type', 'text'])
</script>

<style scoped>

</style>
