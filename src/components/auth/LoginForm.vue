<template>
    <div class="signup-form">
        <h1>Log in</h1>
        <div class="authMessage" v-show="getAuthResult">{{ getAuthResult }}</div>
        <div class="alertMessage" v-show="alertMessage" @click="closeAlert">
            {{ alertMessage }}
            <span role="button"><i class="far fa-times-circle"></i></span>
        </div>
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

            <button type="submit" role="button" class="btn btn-primary" @click.prevent="login(userForm)">Log in</button>
        </form>
    </div>
</template>

<script>
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

        login(userForm) {
            if (this.validation(userForm)) {
                this.loginUser(userForm);
                this.userForm.email = this.userForm.password = "";
            }
            
        },

        validation(user) {
            const result = userSchema.validate(user);
            if (result.error == null) return true;

            if (result.error.message.includes('email')) this.alertMessage = 'Email is invalid';
            else if (result.error.message.includes('password')) this.alertMessage = 'Password is invalid';

            return false;
        },
        closeAlert() {
            this.alertMessage = "";
        }
    },
    computed: mapGetters(['getAuthResult'])
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_mixins.scss';

.signup-form {
    @include authForm();

    .alertMessage {
        @include alertMessage();
    }

    .authMessage {
        @include authMessage();
    }
}

.inputs {
    @include authInput();

    .form-row {
        margin: .3rem auto;
    }
}
</style>
