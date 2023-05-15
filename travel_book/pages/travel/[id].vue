<template>
    <div>
        <TravelDetail></TravelDetail>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "common",
    middleware: 'auth'
});
</script>

<style scoped></style>
