<template>
    <div>
        <BookCreate></BookCreate>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'common',
    middleware: 'auth'
})
</script>

<style scoped>

</style>