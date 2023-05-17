<template>
    <div>
        <h2 :class="heading">{{ text }}</h2>
    </div>
</template>

<script setup>
    defineProps(['text', 'heading'])
</script>

<style scoped>

</style>
