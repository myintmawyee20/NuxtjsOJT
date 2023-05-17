<template>
    <svg :class="svg.class" :fill="svg.fill" :viewBox="svg.viewBox" :xmlns="svg.xmlns" :stroke="svg.stroke">
        <slot/>
    </svg>
</template>

<script setup>
defineProps(['svg']);
</script>

<style scoped>

</style>
