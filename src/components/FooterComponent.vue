<template>
    <footer class="footer">
        <section class="container">
            <p>
                Built by: <a href="https://juandavid1217.github.io/my_portfolio/" target="_blank">David Delgado</a>.
            </p>
            <p>
                This project uses <a href="https://thesimpsonsapi.com/" target="_blank">The Simpson API</a> to retrieve the displayed data.
            </p>
            <p>
                <i>The Simpsons™ is a trademark of 20th Television / Disney. This project is a non-commercial fan-made app.</i>
            </p>
        </section>
    </footer>
</template>

<style scoped>
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .container {
        text-align: center;
        color: var(--text-color-light);
        font-size: smaller;
    }

    .container a {
        color: var(--text-color-light);
    }

</style>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>