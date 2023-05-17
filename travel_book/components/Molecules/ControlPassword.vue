<template>
    <div>
        <AtomsAtomLabel :label="{ for: 'password', class: 'form-label', text: 'Password' }"></AtomsAtomLabel>
        <AtomsAtomInputField
            :field="{ type: 'password', id: 'password', name: 'password', class: 'form-control', placeholder: 'Enter Password' }"
            @input="$emit('password', $event.target.value)"
            >
        </AtomsAtomInputField>
        <AtomsAtomErrorMessage :message="{ name: 'password', class: 'text-red-500' }"></AtomsAtomErrorMessage>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
