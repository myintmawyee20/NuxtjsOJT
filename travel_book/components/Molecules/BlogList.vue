<template>
    <div>
        <AtomsAtomHeading :text="'This is Blog Page (Dynamic Page)'" :heading="'c_content'"></AtomsAtomHeading>
        <div class="grid grid-cols-3 gap-5">
            <div v-for="(blog) in blogs" :key="blog.id">
                <NuxtLink :to="`/blog/${blog.title}`">
                    <AtomsAtomHeading :heading="'c_blog'" :text="`${blog.title}`"></AtomsAtomHeading>
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
