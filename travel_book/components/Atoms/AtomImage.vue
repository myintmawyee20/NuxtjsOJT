<template>
    <div>
        <img :src="img.src" :alt="img.alt" :style="thumb" :class="thumb"/>
    </div>
</template>

<script setup>
    defineProps(['img', 'thumb'])
</script>

<style scoped>

</style>
