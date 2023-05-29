<template>
    <div class="my-3">
        <VForm @submit="savePost" class="w-auto m-10" :validation-schema="schema">
            <div class="form-check form-switch container my-3">
                <AtomsCheckBox :inputField="'form-check-input'" :type="'checkbox'" :id="'flexSwitchCheckChecked'"
                    v-model="is_published" @change="handleChange" :checked="is_published" />
                <AtomsLabel :checkDesign="'form-check-label'" :checkLabel="'flexSwitchCheckChecked'"
                    :text="'Publish or draft'"></AtomsLabel>
            </div>
            <div class="w-100 mt-3">
                <div class="mb-3">
                    <AtomsInputField :title="'title'" :inputField="'form-control'" :type="'text'"
                        :placeholder="'Enter Post Title...'" v-model="title" :value="title"
                        @input="postName($event.target.value)">
                    </AtomsInputField>
                    <AtomsErrorMessage :message="{ name: 'title', class: 'text-danger' }"></AtomsErrorMessage>
                </div>

                <AtomsTextArea :description="'description'" :areaDesign="'form-control'" v-model="description"
                    :placeholder="'Leave a post description here'" :style="'height: 200px'"
                    @input="postDescription($event.target.value)"></AtomsTextArea>
                <AtomsErrorMessage :message="{ name: 'description', class: 'text-danger' }"></AtomsErrorMessage>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <AtomsButton :button="'me-3 btn btn-success'" :type="'submit'" :text="props.postId ? 'Edit' : 'Create'">
                </AtomsButton>
                <AtomsButton :button="'btn btn-secondary'" :type="'button'" :text="'Cancel'" @click="handleReset">
                </AtomsButton>
            </div>
        </VForm>
    </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import * as yup from "yup";

let nuxtApp = useNuxtApp() as any;
let props = defineProps({
    postId: String,
    postDetail: Object,
});
let title = ref<string>(props.postId ? props.postDetail?.title : "");
let description = ref<string>(props.postId ? props.postDetail?.description : "");
let is_published = ref<boolean>(props.postId ? props.postDetail?.is_published : true);

function handleReset() {
    location.reload();
}

// Create a watcher for the postId prop
watch(
    () => props.postId,
    (newPostId: any) => {
        if (newPostId) {
            title.value = props.postDetail?.title;
            description.value = props.postDetail?.description;
            is_published.value = props.postDetail?.is_published;
        } else {
            title.value = "";
            description.value = "";
            is_published.value = true;
        }
    }
);

function postName(value: string) {
    title.value = value;
}

function postDescription(value: string) {
    description.value = value;
}

function handleChange() {
    is_published.value = !is_published.value;
}

const schema = yup.object({
    title: yup.string().required("Post အမည် ဖြည့်ရန် လိုအပ်သည်*"),
    description: yup.string().required("ဖော်ပြချက် ဖြည့်ရန် လိုအပ်သည်*"),
});

let savePost = async () => {
    let newPost = {
        title: title.value,
        description: description.value,
        is_published: is_published.value,
        created_at: nuxtApp.timestamp(),
    };
    if (props.postId) {
        await nuxtApp.db.collection("posts").doc(props.postId).update(newPost);
    } else {
        await nuxtApp.db.collection("posts").add(newPost);
    }
    location.reload();
};
</script>

<style scoped></style>
