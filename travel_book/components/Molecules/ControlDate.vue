<template>
    <div>
        <AtomsAtomLabel :label="{ for: 'date', class: 'form-label', text: 'Date' }"></AtomsAtomLabel>
        <AtomsAtomInputField
            :field="{ type: 'date', id: 'date', name: 'date', class: 'form-control', value:`${date}` }"
            @input="$emit('date', $event.target.value)"
            >
        </AtomsAtomInputField>
        <AtomsAtomErrorMessage :message="{ name: 'date', class: 'text-red-500' }"></AtomsAtomErrorMessage>
    </div>
</template>

<script setup>
defineProps(['date'])
</script>

<style scoped>

</style>
