<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10" v-for="detail in travelDetail" :key="detail.id">
            <div class="p-7">
                <img :src="detail.image" alt="travel img" class="mx-auto my-7" />
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ detail.title }}</h2>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Travel Description:</h3>
                <p class="mb-7">{{ detail.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const id = useRoute().params;
const { data: travelDetail } = await useFetch(`/api/travel/${id.id}`);
</script>

<style scoped></style>
