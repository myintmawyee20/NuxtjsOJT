<template>
    <div>
        <LoginPage></LoginPage>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'is-login'
})
</script>

<style scoped></style>
