<template>
    <VField :class="inputField" :name="title" :type="type" :placeholder="placeholder" :id="id" :checked="checked" />
</template>

<script setup lang="ts">
defineProps(['inputField', 'type', 'placeholder', 'id', 'checked', 'title'])
</script>

<style scoped>

</style>
