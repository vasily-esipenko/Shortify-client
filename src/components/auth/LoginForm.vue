<template>
    <div class="signup-form">
        <h1>Log in</h1>
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
                        <input type="text" class="form-control" id="password" placeholder="password" v-model="userForm.password">
                    </div>
                </div>

            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="signup">Sign up</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
    name: 'LoginForm',
    data() {
        return {
            userForm: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            console.log(this.userForm);
        }
    }
}
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
</style>