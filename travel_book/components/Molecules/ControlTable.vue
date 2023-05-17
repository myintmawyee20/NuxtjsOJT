<template>
    <table class="w-full text-left text-gray-500 dark:text-gray-400 mb-20">
        <AtomsAtomTableHeading
            :headerClass="{ rowClass: 'text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400', header: 'px-6 py-3 font-medium' }"
            :headingTitle="headingTitle">
        </AtomsAtomTableHeading>
        <template v-if="bookList.length">
            <tr v-for="(book) in bookList" :key="book.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ book.title }}
                </td>
                <td class="px-6 py-4">
                    {{ book.author }}
                </td>
                <td class="px-6 py-4">
                    {{ book.price }}
                </td>
                <td class="px-6 py-4">
                    {{ book.date }}
                </td>
                <td class="px-6 py-4 flex">
                    <NuxtLink :to="`/books/${book.id}`">
                        <AtomsAtomButton :button="'p-2 rounded-md bg-green-400 text-white flex mr-5'">
                            <AtomsAtomIcons :icons="{ text: 'edit', class: 'material-icons text-center' }">
                            </AtomsAtomIcons>
                        </AtomsAtomButton>
                    </NuxtLink>
                    <AtomsAtomButton @handleBtn="toggle(book.id)" :button="'p-2 rounded-md bg-red-500 text-white flex'"
                        :type="'button'">
                        <AtomsAtomIcons :icons="{ text: 'delete', class: 'material-icons text-center' }">
                        </AtomsAtomIcons>
                    </AtomsAtomButton>
                </td>
            </tr>
        </template>
        <div class=" fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            v-if="toggleModal">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <AtomsAtomButton :type="'button'" @handleBtn="closeModal"
                        :button="'absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'">
                        <AtomsAtomSvg
                            :svg="{ class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' }">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd">
                            </path>
                        </AtomsAtomSvg>
                    </AtomsAtomButton>
                    <div class="p-6 text-center">
                        <AtomsAtomSvg
                            :svg="{ class: 'mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' }">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </AtomsAtomSvg>
                        <AtomsAtomHeading :text="'Areyou sure you want to delete this book?'"
                            :heading="'mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'">
                        </AtomsAtomHeading>
                        <AtomsAtomButton :type="'button'" @handleBtn="deleteBook"
                            :class="'text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'"
                            :text="`Yes, I'm sure`"></AtomsAtomButton>
                        <AtomsAtomButton :type="'button'" @handleBtn="closeModal"
                            :class="'text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'"
                            :text="`No, cancel`">
                        </AtomsAtomButton>
                    </div>
                </div>
            </div>
        </div>
    </table>
</template>

<script setup>
defineProps(['bookList'])

const headingTitle = ref(['Book Name', 'Author', 'Price', 'Date', 'Action'])
const toggleModal = ref(false);
const bookId = ref(null);

function closeModal() {
    toggleModal.value = false;
}

function toggle(id) {
    toggleModal.value = !toggleModal.value;
    bookId.value = id;
}

async function deleteBook() {
    await $fetch("/api/book/delete", {
        method: "post",
        body: JSON.stringify({
            id: bookId.value,
        })
    })
        .then((res) => {
            closeModal();
            window.location.reload();
        })
        .catch(err => { });

}
</script>

<style scoped>

</style>
