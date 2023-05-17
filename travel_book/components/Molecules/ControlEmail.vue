<template>
    <div>
        <AtomsAtomLabel :label="{ for: 'email', class: 'form-label', text: 'Your email' }"></AtomsAtomLabel>
        <AtomsAtomInputField
            :field="{ type: 'email', id: 'email', name: 'userName', class: 'form-control', placeholder: 'name@flowbite.com' }"
            @input="$emit('email', $event.target.value)"
            >
        </AtomsAtomInputField>
        <AtomsAtomErrorMessage :message="{ name: 'userName', class: 'text-red-500' }"></AtomsAtomErrorMessage>
    </div>
</template>

<script setup>

</script>

<style scoped></style>
