<template>
    <div class="my-3 mx-5">
        <div class="row bg-light">
            <div class="col border">
                <MoleculesPostList @newPost="handlePost" @showDetail="handleDetail($event)"></MoleculesPostList>
            </div>
            <div class="col-6 border">
                <div v-if="postDetail">
                    <MoleculesPostDetail :postDetail="postDetail" @handleEdit="handleEdit($event)"></MoleculesPostDetail>
                </div>
            </div>
            <div class="col border">
                <div v-if="toggleEdit">
                    <MoleculesPostSave :postId="postId" :postDetail="postDetail"></MoleculesPostSave>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const toggleEdit = ref<boolean>(false);
const nuxtApp = useNuxtApp() as any;
let postDetail = ref<object>({});
let postId = ref<string>("");

function handlePost() {
    postId.value = "";
    toggleEdit.value = true;
}

function handleEdit(id: string) {
    postId.value= id;
    toggleEdit.value = true;
}

async function handleDetail(id: string) {
    let doc = await nuxtApp.db
        .collection("posts")
        .doc(id)
        .get();
    postDetail.value = { id: doc.id, ...doc.data() };
    if (doc.status === 404) {
        throw new Error("no found that exact url");
    }
}
</script>

<style scoped></style>
