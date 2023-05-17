<template>
    <div>
        <AtomsAtomLabel :label="{ for: 'author', class: 'form-label', text: 'Author' }"></AtomsAtomLabel>
        <AtomsAtomInputField
            :field="{ type: 'text', id: 'author', name: 'author', class: 'form-control', value:`${author}` }"
            @input="$emit('author', $event.target.value)"
            >
        </AtomsAtomInputField>
        <AtomsAtomErrorMessage :message="{ name: 'author', class: 'text-red-500' }"></AtomsAtomErrorMessage>
    </div>
</template>

<script setup>
defineProps(['author'])
</script>

<style scoped>

</style>
