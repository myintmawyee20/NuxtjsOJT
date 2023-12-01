<template>
    <div class="container my-3" v-if="Object.keys(postDetail).length > 0">
        <div class="d-flex justify-content-between">
            <AtomsText :textDesign="'h3'" :text="postDetail.title"></AtomsText>
            <AtomsIcons :iconDesign="'material-icons display-6 cursor-pointer'" :text="'edit'"
                @click="$emit('handleEdit', postDetail.id)"></AtomsIcons>
        </div>
        <AtomsText :textDesign="'text-justify mt-3'" :text="postDetail.description">
        </AtomsText>
    </div>
</template>

<script setup lang="ts">
defineProps(['postDetail'])

</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>
