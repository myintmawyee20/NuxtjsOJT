<template>
    <div>
        <VField :type="field.type" :id="field.id" :name="field.name" :class="field.class" 
        :value="field.value"  :placeholder="field.placeholder" />
    </div>
</template>

<script setup>
defineProps(['field'])
</script>

<style scoped></style>
