<template>
    <div>
        <!-- part of header -->
        <header class="shadow-sm bg-white sticky">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="font-bold text-xl text-blue-400" to="/home">Nuxt OJT</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/home" class="text-blue-400">Home Page</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog" class="text-blue-400">Blog Page</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/travel" class="text-blue-400">Travel Page</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/books" class="text-blue-400">Books Page</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="text-gray-400" @click.prevent="logout">Logout</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- part of body -->
        <div class="container mx-auto">
            <slot />
        </div>
        <!-- part of footer -->
        <footer class="shadow-sm bg-white fixed bottom-0 left-0 w-screen h-12 border-t-2">
            <p class="text-center text-sm mt-3 text-blue-400">Copyright@scmnuxtjsojt</p>
        </footer>
    </div>
</template>

<script setup>
const isLogin = useCookie('auth');

function logout(){
    isLogin.value = false;
}
</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
