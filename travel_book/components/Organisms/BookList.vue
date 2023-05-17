<template>
    <div>
        <div class="text-right m-6">
            <NuxtLink to="/books/create">
                <AtomsAtomButton :button="'btn'" :text="'CreateBook'"></AtomsAtomButton>
            </NuxtLink>
        </div>
        <div class="shadow-md">
            <MoleculesControlTable :bookList="bookList"></MoleculesControlTable>  
        </div>
    </div>
</template>

<script setup>
const { data: bookList } = await useFetch("/api/book/list");
</script>

<style scoped></style>
