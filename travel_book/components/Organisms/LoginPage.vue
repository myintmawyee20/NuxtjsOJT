<template>
    <div class="mt-60">
        <AtomsAtomHeading :heading="'m-10 text-2xl font-bold text-center'" :text="'Login Page'"></AtomsAtomHeading>
        <VForm class="mx-auto w-80" @submit="onSubmit" :validation-schema="schema">
            <div class="mb-6">
                <MoleculesControlEmail @email="handleEmail"></MoleculesControlEmail>
            </div>
            <div class="mb-6">
                <MoleculesControlPassword @password="handlePassword"></MoleculesControlPassword>
            </div>
            <div class="text-center">
                <AtomsAtomButton :text="'Login'" :type="'submit'" :button="'btn'"></AtomsAtomButton>
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

function handlePassword(value){
    password.value = value;
}

function handleEmail(value){
    userName.value = value;
}


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
