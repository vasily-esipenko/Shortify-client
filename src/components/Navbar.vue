<template>
    <div class="navbar-fixed">
        <nav>
            <div class="logo">
                <button>
                    <router-link to="/">Shortify</router-link>
                </button>
            </div>
            <div class="nav-items">
                <button class="links-item">
                    <router-link to="/links">Links</router-link>
                </button>

                <button class="links-item">
                    <router-link to="/signup">Sign up</router-link>
                </button>

                <button class="links-item">
                    <router-link to="/login">Log in</router-link>
                </button>

                <button class="links-item">
                    <router-link to="/">Logout</router-link>
                </button>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Navbar',
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_mixins.scss';

.navbar_fixed {
    position: fixed;
}

nav {
    position: relative;
    background-color: $secondaryBackground;
    padding: 0 1rem;
    margin-bottom: 3.2rem;
    @include mainFlex();

    .logo {
        font-size: 2.5rem;

        button {
            @include navBtn;

            &:hover {
                @include navBtnHover;
            }
        }
    }

    .nav-items {
        position: absolute;
        top: 30%;
        right: 3%;
    }

    .links-item {
        margin-right: 1.2rem;
        font-size: 1.1rem;
        @include navBtn;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            @include navBtnHover;
        }
    }
}

</style>
