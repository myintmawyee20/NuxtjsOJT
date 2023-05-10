export default defineNuxtRouteMiddleware((to, from) => {
    const isLogin = useCookie('auth');
    if (isLogin.value) {
        return navigateTo('/home'); // Redirect to the current route
    }
});

