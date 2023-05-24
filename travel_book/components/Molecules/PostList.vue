<template>
    <div class="container my-3">
        <AtomsAtomButton @click.prevent="$emit('newPost')" :text="'New Post'" :type="'button'" :button="'btn btn-success w-100'">
        </AtomsAtomButton>
        <AtomsAtomInputField :inputField="'form-control my-3'" :type="'text'" :placeholder="'Search...'"
            v-bind:value="searchTitle" v-on:input="searchTitle = $event.target.value">
        </AtomsAtomInputField>
        <div class="cursor-pointer">
            <div class="card border-dark mb-3" style="max-width: 100%" v-for="post in getLists" :key="post.id"
                @click="$emit('showDetail', post.id)">
                <h6><span :class="post.is_published  ? 'badge bg-success': 'badge bg-danger'">{{post.is_published  ? 'Publish': 'Draft'}}</span></h6>
                <AtomsAtomText :textDesign="'h4 one-line-sentence border-bottom px-2'" :text="post.title">
                </AtomsAtomText>
                <div class="px-2">
                    <AtomsAtomText :textDesign="'two-line-sentence'" :text="post.description">
                    </AtomsAtomText>
                </div>
            </div>
            <InfiniteLoading @infinite="infiniteLoad" />
        </div>
    </div>
</template>

<script setup lang="ts">
import InfiniteLoading from "v3-infinite-loading";

let nuxtApp = useNuxtApp() as any;
let posts = ref([]) as any;
let page = ref<number>(0);
let searchTitle = ref<string>("");

async function fetchPosts() {
    let res = await nuxtApp.db
        .collection("posts")
        .orderBy("created_at", "desc")
        .limit(20);

    if (page.value) {
        res = res.startAfter(page.value);
    }

    let postList = await res.get();
    page.value = postList.docs[postList.docs.length - 1];
    let result = postList.docs.map((post: any) => {
        return { id: post.id, ...post.data() };
    });

    posts.value.push(...result);

    return result.length;
}

let infiniteLoad = async ($state: any) => {
    let newPostsCount = await fetchPosts();
    if (newPostsCount) {
        return $state.loaded(); // More posts to come
    }

    return $state.complete(); // Done with the posts
};

let getLists = computed(() => {
    return posts.value.filter(function (item: any) {
        const s = searchTitle.value.toLowerCase();
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        return title.match(s.trim()) && description.match(s.trim());
    });
});
</script>

<style scoped>
.one-line-sentence {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.two-line-sentence {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cursor-pointer {
    cursor: pointer;
    overflow-y: scroll;
    max-height: 440px;
}
</style>
