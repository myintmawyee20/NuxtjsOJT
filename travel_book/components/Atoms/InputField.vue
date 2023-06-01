<template>
    <Field :class="design" :type="type" :name="radio" :id="id" :placeholder="text"/>
</template>

<script setup lang="ts">
defineProps(['design', 'type', 'radio', 'id', 'text']);
</script>

<style scoped></style>
