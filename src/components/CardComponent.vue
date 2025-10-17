<template>
    <article class="card">
        <img :src="complete_portrait_path" :alt="`${name} photo`">
    </article>
</template>

<style>
    .card {
        margin: 1rem;
        border-radius: .5rem;
        box-shadow: 0 0 .3rem .02rem #000;
        padding: .5rem;
    }

    .card img {
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
    }
</style>

<script>
    import {urlImage} from "@/services/GeneralService"
    export default {
        name: "CardComponent",
        props: {
            age: {
                type: Number,
                required: false
            },
            birthdate: {
                type: String,
                required: false
            },
            gender: {
                type: String,
                required: false
            },
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            occupation: {
                type: String,
                required: false
            },
            phrases: {
                type: Array,
                required: false
            },
            image: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: false
            }
        },
        computed: {
            complete_portrait_path () {
                return `${urlImage}${this.image}`
            }
        }
    }
</script>