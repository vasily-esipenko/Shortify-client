<template>
    <div class="container">
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';
import {Options, Vue} from 'vue-class-component';

@Options({
    components: {
        LoginForm
    }
})

export default class Login extends Vue {}
</script>

<style lang="scss" scoped>

</style>
