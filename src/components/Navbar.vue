<template>
    <div class="navbar-fixed">
        <nav>
            <div class="logo">
                <router-link to="/">Shortify</router-link>
            </div>
            <div class="nav-items">
                <span class="links-item">
                    <router-link to="/links">Links</router-link>
                </span>

                <span class="links-item">
                    <router-link to="/signup">Sign up</router-link>
                </span>

                <span class="links-item">
                    <router-link to="/login">Log in</router-link>
                </span>

                <span class="links-item">
                    <router-link to="/">Logout</router-link>
                </span>
            </div>
        </nav>
    </div>
</template>

<script>
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
    }

    .nav-items {
        position: absolute;
        top: 30%;
        right: 3%;
    }

    .links-item {
        margin-right: 1rem;
    }
}

</style>
