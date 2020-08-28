<template>
    <div class="signup-form">
        <h1>Log in</h1>
        <div class="authMessage">{{ getAuthData }}</div>
        <div class="alertMessage">{{alertMessage}}</div>
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

            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="login(userForm)">Sign up</button>
        </form>
    </div>
</template>

<script lang="ts">
import {mapActions, mapGetters} from 'vuex';
import Joi from 'joi';

const userSchema = Joi.object({
    email: Joi.string().min(4).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,}$/).required()
});

export default {
    name: 'LoginForm',
    data() {
        return {
            userForm: {
                email: "",
                password: ""
            },
            alertMessage: ""
        };
    },
    methods: {
        ...mapActions(['loginUser']),

        login(userForm: object) {
            if (this.validation(userForm)) {
                this.loginUser(userForm);
                this.userForm.email = this.userForm.password = "";
            }
            
        },

        validation(user: object): boolean {
            const result = userSchema.validate(user);
            if (result.error == null) return true;

            if (result.error.message.includes('email')) this.alertMessage = 'Email is invalid';
            else if (result.error.message.includes('password')) this.alertMessage = 'Password is invalid';

            return false;
        }
    },
    computed: mapGetters(['getAuthData'])
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_mixins.scss';

.signup-form {
    @include authForm();

    .alertMessage {
        background-color: #FF2121;
        color: $secondaryTextColor;
        border: 1px solid #FF2121;
        border-radius: 5px;
    }
}

.inputs {
    @include authInput();

    .form-row {
        margin: .3rem auto;
    }
}
</style>
