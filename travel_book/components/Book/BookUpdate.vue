<template>
    <div>
        <form class="w-auto m-10" @submit.prevent="editBook">
            <div class="mb-6">
                <label for="base-input" class="form-label">Book Name</label>
                <input type="text" id="base-input" class="form-control" v-model="bookName" />
            </div>
            <div class="mb-6">
                <label for="base-input" class="form-label">Author</label>
                <input type="text" id="base-input" class="form-control" v-model="author" />
            </div>
            <div class="mb-6">
                <label for="base-input" class="form-label">Price</label>
                <input type="text" id="base-input" class="form-control" v-model="price" />
            </div>
            <div class="mb-6">
                <label for="base-input" class="form-label">Date</label>
                <input type="date" id="base-input" class="form-control" v-model="date" />
            </div>
            <div class="mb-6 flex justify-center">
                <button class="btn mr-5" type="submit">Update</button>
                <NuxtLink to="/books">
                    <button class="btn">Cancel</button>
                </NuxtLink>
            </div>
        </form>
    </div>
</template>

<script setup>
const bookName = ref("");
const author = ref("");
const price = ref("");
const date = ref("");
const id = useRoute().params;
const router = useRouter();

const { data: bookDetail } = await useFetch(`/api/book/${id.update}`);
bookName.value = bookDetail.value.title;
author.value = bookDetail.value.author;
price.value = bookDetail.value.price;
date.value = bookDetail.value.date;

if(!bookDetail.value){
  throw createError({statusCode: 404, statusMessage: 'Book not fount', fatal: true})
}

async function editBook() {
    await $fetch("/api/book/edit", {
        method: "PATCH",
        body: JSON.stringify({
            id : id.update,
            title: bookName.value,
            author: author.value,
            price: price.value,
            date: date.value
        })
    })
        .then((res) => {
            router.push("/books");
        })
        .catch(err => { });
}
</script>

<style scoped></style>