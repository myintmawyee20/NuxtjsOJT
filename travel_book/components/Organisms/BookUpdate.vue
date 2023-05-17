<template>
    <div>
        <VForm @submit="editBook" class="w-auto m-10" :validation-schema="schema">
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
                <AtomsAtomButton :button="'mr-5 btn'" :type="'submit'" :text="'Update'"></AtomsAtomButton>
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
const id = useRoute().params;
const router = useRouter();


const { data: bookDetail } = await useFetch(`/api/book/${id.update}`);
bookName.value = bookDetail.value.title;
author.value = bookDetail.value.author;
price.value = bookDetail.value.price;
date.value = bookDetail.value.date;


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

async function editBook() {
    await $fetch("/api/book/edit", {
        method: "PATCH",
        body: JSON.stringify({
            id: id.update,
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
