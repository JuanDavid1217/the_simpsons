<template>
    <section class="logo">
        <img src="../assets/images/logo.png" alt="The Simpsons logo">
    </section>
</template>

<style>
    .logo {
        width: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .logo img {
        object-fit: cover;
        object-position: center
    }
</style>

<script>
    export default {
        name: 'LogoComponent'
    }
</script>