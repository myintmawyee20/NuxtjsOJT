<template>
    <div class="container my-3" v-if="Object.keys(postDetail).length > 0">
        <div class="d-flex justify-content-between">
            <AtomsAtomText :textDesign="'h3'" :text="postDetail.title"></AtomsAtomText>
            <AtomsAtomIcons :iconDesign="'material-icons display-6 cursor-pointer'" :text="'edit'"
                @click.prevent="$emit('handleEdit', postDetail.id)"></AtomsAtomIcons>
        </div>
        <AtomsAtomText :textDesign="'text-justify mt-3'" :text="postDetail.description">
        </AtomsAtomText>
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
