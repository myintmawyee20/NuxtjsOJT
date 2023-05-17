<template>
    <div>
        <VForm @submit="addBook" class="w-auto m-10" :validation-schema="schema">
            <div class="mb-6">
                <MoleculesControlBookName @bookName="handleBookName" :title="bookName"></MoleculesControlBookName>
            </div>
            <div class="mb-6">
                <MoleculesControlAuthor @author="handleAuthor" :author="author"></MoleculesControlAuthor>
            </div>
            <div class="mb-6">
                <MoleculesControlPrice @price="handlePrice" :price="price"></MoleculesControlPrice>
            </div>
            <div class="mb-6">
                <MoleculesControlDate @date="handleDate" :date="date"></MoleculesControlDate>
            </div>
            <div class="flex justify-center mb-6">
                <AtomsAtomButton :button="'mr-5 btn'" :type="'submit'" :text="'Create'"></AtomsAtomButton>
                <NuxtLink to="/books">
                    <AtomsAtomButton :button="'btn'" :text="'Cancel'"></AtomsAtomButton>
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
const router = useRouter();
const allBook = await useFetch('http://localhost:3000/api/book/list');
let userId = allBook.data.value ? allBook.data.value.length + 1 : 1;

function handleBookName(value) {
    bookName.value = value;
}

function handleAuthor(value) {
    author.value = value;
}

function handlePrice(value) {
    price.value = value;
}

function handleDate(value) {
    date.value = value;
}

const schema = yup.object({
    bookName: yup.string().required('စာအုပ်အမည် ဖြည့်ရန် လိုအပ်သည်*'),
    author: yup.string().required('စာရေးဆရာအမည် ဖြည့်ရန် လိုအပ်သည်*'),
    price: yup.string().required('စျေးနှုန်း ဖြည့်ရန် လိုအပ်သည်*'),
    date: yup.string().required('ထုတ်ဝေခဲ့သောရက်စွဲ ဖြည့်ရန် လိုအပ်သည်*'),
});

async function addBook() {
    await $fetch("/api/book/create", {
        method: "post",
        body: JSON.stringify({
            id: userId,
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
