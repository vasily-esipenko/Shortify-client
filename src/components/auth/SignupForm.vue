<template>
    <div class="signup-form">
        <h1>Sign up</h1>
        <div class="authMessage" v-show="getAuthData">{{ getAuthData }}</div>
        <div class="alertMessage" v-show="alertMessage">{{ alertMessage }}</div>
        <form class="form">
            <div class="inputs col">

                <div class="form-row">
                    <div class="col">
                        <label class="sr-only" for="email">email</label>
                        <input type="text" class="form-control" id="email" placeholder="email" v-model="userForm.email">
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                        <label class="sr-only" for="password">password</label>
                        <input type="password" class="form-control" id="password" placeholder="password" v-model="userForm.password">
                    </div>
                </div>

                <div class="form-row">
                    <div class="col">
                        <label class="sr-only" for="confirm-password">confirm password</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="confirm password" v-model="userForm.confirmPassword">
                    </div>
                </div>

            </div>

            <button type="submit" role="button" class="btn btn-primary" @click.prevent="signup(userForm)">Sign up</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Joi from 'joi';

const userSchema = Joi.object({
    email: Joi.string().min(4).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,}$/).required(),
    confirmPassword: Joi.ref('password')
});

export default {
    name: 'SignupForm',
    data() {
        return {
            userForm: {
                email: "",
                password: "",
                confirmPassword: ""
            },
            alertMessage: ""
        };
    },
    methods: {
        ...mapActions(['signupUser']),
        signup(userForm) {
            if (this.validation(userForm)) {
                const signupForm = {
                    email: userForm.email,
                    password: userForm.password
                };
                this.signupUser(signupForm);
                this.userForm.email = this.userForm.password = this.userForm.confirmPassword = "";
            }
        },
        validation(user) {
            const result = userSchema.validate(user);
            if (result.error == null) return true;

            if (result.error.message.includes('email')) this.alertMessage = 'Email is invalid';
            else if (result.error.message.includes('password')) this.alertMessage = 'Password is invalid';
            else if (result.error.message.includes('confirmPassword')) this.alertMessage = `Passwords don't match`;

            return false;
        }
    },
    computed: mapGetters(['getAuthData'])
};

</script>

<style lang="scss" scoped>
@import '@/styles/_mixins.scss';

.signup-form {
    @include authForm();
}

.inputs {
    @include authInput();

    .form-row {
        margin: .3rem auto;
    }
}
</style>>
