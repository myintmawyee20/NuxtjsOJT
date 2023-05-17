<template>
    <div>
        <OrganismsLoginPage></OrganismsLoginPage>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'is-login'
})
</script>

<style scoped></style>
