<template>
    <section class="logo">
        <img src="../assets/images/logo.png" alt="The Simpsons Frontend logo">
    </section>
</template>

<style>
    .logo {
        width: var(--logo-size);
        height: var(--logo-size);
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        border: thin solid red;
    }

    .logo img {
        object-fit: contain;
        object-position: center
    }
</style>

<script>
    export default {
        name: 'LogoComponent'
    }
</script>