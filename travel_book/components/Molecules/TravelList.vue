<template>
    <div>
        <AtomsAtomHeading :text="'This is Travel Page (Static Page)'" :heading="'c_content'"></AtomsAtomHeading>
        <div class="grid grid-cols-3 gap-10 mb-5">
            <div class="text-center card" v-for="travel in travelList" :key="travel.id">
                <AtomsAtomHeading :heading="'m-4 text-2xl font-bold text-gray-500 truncate'" :text='`${travel.title}`'></AtomsAtomHeading>
                <AtomsAtomImage :img="{ src: `/_nuxt/assets/images/${travel.image}`, alt: 'travel thumb' }"  :thumb="'max-height: 150px; max-width: 100%; margin: 0 auto;'" />
                <NuxtLink :to="`/travel/${travel.id}`">
                    <div class="flex justify-center">
                        <AtomsAtomButton :class="'mt-5 btn'" :text="'View Detail'"></AtomsAtomButton>
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
.view {
    max-height: 120px;
    max-width: 30%;
    margin: 0 auto;
}
</style>
