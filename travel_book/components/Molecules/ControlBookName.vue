<template>
    <div>
        <AtomsAtomLabel :label="{ for: 'title', class: 'form-label', text: 'Book Name' }"></AtomsAtomLabel>
        <AtomsAtomInputField
            :field="{ type: 'text', id: 'title', name: 'bookName', class: 'form-control', value:`${title}` }"
            @input="$emit('bookName', $event.target.value)"
            >
        </AtomsAtomInputField>
        <AtomsAtomErrorMessage :message="{ name: 'bookName', class: 'text-red-500' }"></AtomsAtomErrorMessage>
    </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>

</style>
