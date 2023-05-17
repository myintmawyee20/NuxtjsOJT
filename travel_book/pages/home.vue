<template>
    <div>
        <AtomsAtomHeading :text="'This is Home Page (Static Page)'" :heading="'c_content'"></AtomsAtomHeading>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'common',
    middleware: 'auth'
})
</script>

<style scoped></style>
