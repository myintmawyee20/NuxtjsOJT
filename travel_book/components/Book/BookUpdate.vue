<template>
    <div>
        <VForm @submit="editBook" class="w-auto m-10" :validation-schema="schema">
            <div class="mb-6">
                <label for="base-input" class="form-label">Book Name</label>
                <VField type="text" name="title" id="base-input" class="form-control" v-model="bookName" />
                <VErrorMessage name="title" class="text-red-500 " />
            </div>
            <div class="mb-6">
                <label for="base-input" class="form-label">Author</label>
                <VField type="text" name="author" id="base-input" class="form-control" v-model="author" />
                <VErrorMessage name="author" class="text-red-500 " />
            </div>
            <div class="mb-6">
                <label for="base-input" class="form-label">Price</label>
                <VField type="number" name="price" id="base-input" class="form-control" v-model="price" />
                <VErrorMessage name="price" class="text-red-500 " />
            </div>
            <div class="mb-6">
                <label for="base-input" class="form-label">Date</label>
                <VField type="date" name="date" id="base-input" class="form-control" v-model="date" />
                <VErrorMessage name="date" class="text-red-500 " />
            </div>
            <div class="flex justify-center mb-6">
                <button class="mr-5 btn" type="submit">Update</button>
                <NuxtLink to="/books">
                    <button class="btn">Cancel</button>
                </NuxtLink>
            </div>
        </VForm>
    </div>
</template>

<script setup>
import * as yup from 'yup';

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

const schema = yup.object({
    title: yup.string().required('စာအုပ်အမည် ဖြည့်ရန် လိုအပ်သည်*'),
    author: yup.string().required('စာရေးဆရာအမည် ဖြည့်ရန် လိုအပ်သည်*'),
    price: yup.string().required('စျေးနှုန်း ဖြည့်ရန် လိုအပ်သည်*'),
    date: yup.string().required('ထုတ်ဝေခဲ့သောရက်စွဲ ဖြည့်ရန် လိုအပ်သည်*'),
});

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
