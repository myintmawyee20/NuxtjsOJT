<template>
    <div class=" mt-60">
        <h1 class="m-10 text-2xl font-bold text-center">Login Page</h1>
        <VForm class="mx-auto w-80" @submit="onSubmit" :validation-schema="schema">
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <VField type="email" id="email" v-model="userName" name="userName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com" />
                <VErrorMessage name="userName" class="text-red-500 " />
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    password</label>
                <VField type="password" id="password" v-model="password" name="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <VErrorMessage name="password" class="text-red-500 " />
            </div>
            <div class="text-center">
                <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </div>
        </VForm>
    </div>
</template>

<script setup>
import * as yup from 'yup';

const userName = ref('');
const password = ref('');
const isLogin = useCookie('auth');
const router = useRouter();

const schema = yup.object({
    userName: yup.string()
        .required('Email ဖြည့်ရန်လိုအပ်သည်*')
        .email('Email format မှားနေပါသည်*'),
    password: yup.string()
        .required('Password ဖြည့်ရန် လိုအပ်ပါသည်*')
        .min(6, 'Password သည် အနည်း စာလုံး 6 လုံး ရှိရပါမည်*'),
});

function onSubmit(){
    if (userName.value === 'mmy@gmail.com' && password.value === 'password'){
        isLogin.value = true;
        router.push('/home');
    }
}
</script>

<style scoped></style>
