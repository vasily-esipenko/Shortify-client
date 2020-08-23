<template>
    <footer>
        <span class="author">Vasily Esipenko, 2020</span>
        <span class="links">
            <a class="link-item" href="https://t.me/Vasily_Esipenko" target="_blank">
                <i class="fab fa-telegram"></i>
            </a>
            <a class="link-item" href="https://github.com/vasily-esipenko" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a class="link-item" href="https://stackoverflow.com/users/13187161/vasily-esipenko?tab=profile" target="_blank">
                <i class="fab fa-stack-overflow"></i>
            </a>
        </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';

a, a:hover {
    color: $mainTextColor;
}

footer {
    position: absolute;
    left: 3%;
    bottom: 0;
    margin: 1rem;
    font-size: 1.1rem;
    font-weight: 600;

    .links {
        margin-left: .5rem;

        .link-item {
            margin-right: .5rem;
        }
    }
}
</style>
