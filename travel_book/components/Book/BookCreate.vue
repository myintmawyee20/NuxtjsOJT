<template>
    <div>
        <form @submit.prevent="addBook">
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
            <div class="flex justify-center mb-6">
                <button class="mr-5 btn" type="submit">Create</button>
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
const router = useRouter();
const allBook = await useFetch('http://localhost:3000/api/book/list');
let userId = allBook.data.value ? allBook.data.value.length + 1 : 1;

async function addBook() {
    await $fetch("/api/book/create", {
        method: "post",
        body: JSON.stringify({
            id : userId,
            title: bookName.value,
            author: author.value,
            price: price.value,
            date: date.value
        })
    })
        .then(() => {
            router.push("/books");
        })
        .catch(err => { });
}
</script>

<style scoped></style>
