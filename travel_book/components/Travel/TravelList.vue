<template>
    <div>
        <h2 class="c_content">This is Travel Page (Static Page)</h2>
        <div class="grid grid-cols-3 gap-10 mb-5">
            <div class="text-center card" v-for="travel in travelList" :key="travel.id">
                <h2 class="m-4 text-2xl font-bold text-gray-500 truncate">
                    {{ travel.title }}
                </h2>
                <img :src="`/_nuxt/assets/images/${travel.image}`" alt="product thumb" class="thumb" />
                <NuxtLink :to="`/travel/${travel.id}`">
                    <div class="view">
                        <p class="my-4 btn">View Detail</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: travelList } = await useFetch("/api/travel/list");
</script>

<style scoped>
.thumb {
    max-height: 150px;
    max-width: 100%;
    margin: 0 auto;
}

.view {
    max-height: 120px;
    max-width: 30%;
    margin: 0 auto;
}
</style>
