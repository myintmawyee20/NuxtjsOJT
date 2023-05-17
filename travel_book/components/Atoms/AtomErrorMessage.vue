<template>
    <div>
        <VErrorMessage :name="message.name" :class="message.class" />
    </div>
</template>

<script setup>
defineProps(['message'])
</script>

<style scoped>

</style>
