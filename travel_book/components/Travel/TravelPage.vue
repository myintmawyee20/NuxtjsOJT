<template>
    <div>
        <h2 class="c_content">This is Travel Page (Static Page)</h2>
        <div class="grid grid-cols-3 gap-10 mb-5">
            <div class="card text-center" v-for="travel in travelList" :key="travel.id">
                <h2 class="font-bold text-gray-500 m-4 truncate text-2xl">
                    {{ travel.title }}
                </h2>
                <img :src="travel.image" alt="product thumb" class="thumb" />
                <NuxtLink :to="`/travel/${travel.id}`">
                    <div class="view">
                        <p class="btn my-4">View Detail</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: travelList } = await useFetch("/api/travel");
</script>

<style scoped>
.thumb {
    max-height: 150px;
    max-width: 80%;
    margin: 0 auto;
}

.view {
    max-height: 120px;
    max-width: 30%;
    margin: 0 auto;
}
</style>
