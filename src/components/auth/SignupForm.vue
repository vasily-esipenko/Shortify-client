<template>
    <div class="signup-form">
        <h1>Sign up</h1>
        <div>{{ getAuthData }}</div>
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
                        <input type="password" class="form-control" id="confirm-password" placeholder="confirm password" v-model="confirmPassword">
                    </div>
                </div>

            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="signup(userForm)">Sign up</button>
        </form>
    </div>
</template>

<script lang="ts">
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'SignupForm',
    data() {
        return {
            userForm: {
                email: "",
                password: "",
            },
            confirmPassword: "",
            alertMessage: ""
        };
    },
    methods: {
        ...mapActions(['signupUser']),
        signup(userForm: object) {
            this.signupUser(userForm);
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
