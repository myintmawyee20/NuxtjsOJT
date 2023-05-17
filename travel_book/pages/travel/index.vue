<template>
    <div>
        <MoleculesTravelList></MoleculesTravelList>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "common",
    middleware: 'auth'
});
</script>

<style scoped></style>
