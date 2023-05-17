<template>
    <div>
        <AtomsAtomLabel :label="{ for: 'price', class: 'form-label', text: 'Price' }"></AtomsAtomLabel>
        <AtomsAtomInputField
            :field="{ type: 'number', id: 'price', name: 'price', class: 'form-control', value:`${price}` }"
            @input="$emit('price', $event.target.value)"
            >
        </AtomsAtomInputField>
        <AtomsAtomErrorMessage :message="{ name: 'price', class: 'text-red-500' }"></AtomsAtomErrorMessage>
    </div>
</template>

<script setup>
defineProps(['price'])
</script>

<style scoped>

</style>
