import { Form, Field, ErrorMessage } from 'vee-validate';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VForm', Form);
    nuxtApp.vueApp.component('Field', Field);
    nuxtApp.vueApp.component('ErrorMessage', ErrorMessage);
})