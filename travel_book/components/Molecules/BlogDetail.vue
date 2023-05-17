<template>
    <div>
        <AtomsAtomHeading :heading="'c_content'" :text="`This is Dynamic Page - ${ blogTitle.title }`"></AtomsAtomHeading>
    </div>
</template>

<script setup>
const blogTitle = useRoute().params;
</script>

<style scoped></style>
