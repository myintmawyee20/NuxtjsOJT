<template>
    <VField as="textarea" :name="description" :class="areaDesign" :placeholder="placeholder" :style="style"></VField>
</template>

<script setup lang="ts">
defineProps({
    areaDesign: String ,
    placeholder: String ,
    style : String ,
    description: String ,
});
</script>

<style scoped>

</style>
