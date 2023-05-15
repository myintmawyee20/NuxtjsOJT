<template>
    <div>
        <h2 class="c_content">This is Blog Page (Dynamic Page)</h2>
        <div class="grid grid-cols-3 gap-5">
            <div v-for="(blog) in blogs" :key="blog.id">
                <NuxtLink :to="`/blog/${blog.title}`">
                    <p class="c_blog">{{ blog.title }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const blogs = ref([
    {
        id: 1,
        title: "Blog1",
    },
    {
        id: 2,
        title: "Blog2",
    },
    {
        id: 3,
        title: "Blog3",
    },
    {
        id: 4,
        title: "Blog4",
    },
    {
        id: 5,
        title: "Blog5",
    },
    {
        id: 6,
        title: "Blog6",
    },
]);
</script>

<style scoped></style>
