<template>
    <div class="flex justify-center">
        <div class="w-1/3 ">
            <h2 class="text-4xl text-center my-7">{{ travelDetail.title }}</h2>
            <img :src="`/_nuxt/assets/images/${travelDetail.image}`" alt="travel img" class="mx-auto my-7" />
            <p class="text-justify mb-7">{{ travelDetail.description }}</p>
        </div>
    </div>
</template>

<script setup>
const id = useRoute().params;
const { data: travelDetail } = await useFetch(`/api/travel/${id.id}`);
</script>

<style scoped></style>
