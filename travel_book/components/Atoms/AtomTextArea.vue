<template>
    <VField as="textarea" :name="description" :class="areaDesign" :placeholder="placeholder" :style="style"></VField>
</template>

<script setup lang="ts">
defineProps(['areaDesign', 'placeholder', 'style', 'description'])
</script>

<style scoped>

</style>