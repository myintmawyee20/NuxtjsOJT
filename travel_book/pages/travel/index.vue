<template>
    <div>
        <TravelList></TravelList>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "common",
    middleware: 'auth'
});
</script>

<style scoped></style>
