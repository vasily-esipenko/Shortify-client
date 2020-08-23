<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        Footer,
    }
}
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
@import '@/styles/_mixins.scss';

body {
    margin: 0;
    padding: 0;
    width: 100%;
}

a, a:hover {
    text-decoration: none;
    color: $secondaryTextColor;
}

*::before,
*::after {
    box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
