<template>
    <article class="card">
        <section class="container">
            <img :src="complete_portrait_path" :alt="`${name} photo`">
            <div class="filter">
                <small v-if="town && town!=''">{{town}}</small>
                <h3>{{name}}</h3>
                <small v-if="use && use!=''">{{use}}</small>
            </div>
        </section>
    </article>
</template>

<style scoped>
    .card {
        margin: 1rem;
        border-radius: .5rem;
        box-shadow: 0 0 .5rem .02rem #0009;
        padding: .5rem;
        background-color: var(--text-color-light);
        transition: transform .3s ease;

        display: flex;
        flex-direction: column;
    }

    .container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-radius: .5rem;
        overflow: hidden;
        position: relative;
    }

    .container img {
        object-fit: cover;
        object-position: center;
        flex-grow: 1;
    }

    .filter {
        position: absolute;
        inset: 0;
        background-color: var(--color-filter-blur-2);
        color: var(--text-color-light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity .3s ease;
        text-align: center;
    }

    .card:hover {
        transform: scale(1.1, 1.1);
    }

    .card:hover .filter {
        opacity: 100%;
    }
</style>

<script>
    import {urlImage} from "@/services/GeneralService"
    export default {
        name: "CardComponent",
        props: {
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            town: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            use: {
                type: String,
                required: true
            }
        },
        computed: {
            complete_portrait_path () {
                return `${urlImage}${this.image}`
            }
        }
    }
</script>