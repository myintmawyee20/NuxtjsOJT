<template>
    <input :class="inputField" :type="type" :placeholder="placeholder" :id="id" :checked="checked" />
</template>

<script setup lang="ts">
defineProps(['inputField', 'type', 'placeholder', 'id', 'checked'])
</script>

<style scoped>

</style>
