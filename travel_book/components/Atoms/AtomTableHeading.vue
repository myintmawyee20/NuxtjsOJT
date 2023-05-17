<template>
    <tr :class="headerClass.rowClass">
        <th :class="headerClass.header" v-for="(title, index) in headingTitle" :key="index">
            {{ title }}
        </th>
    </tr>
</template>

<script setup>
defineProps(['headingTitle', 'headerClass'])
</script>

<style scoped></style>
