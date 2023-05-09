<template>
    <div>
        <h2 class="c_content">This is Dynamic Page - {{ blogTitle.title }}</h2>
    </div>
</template>

<script setup>
const blogTitle = useRoute().params;
</script>

<style scoped></style>
