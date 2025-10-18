<template>
    <article class="card">
        <section class="image">
            <img :src="complete_portrait_path" :alt="`${name} photo`">
            <div class="filter"></div>
        </section>
        <section class="data">
            <div class="titles">
                <h3>{{name}}</h3>
                <small>Season: {{season}}</small>
            </div>
            <small>Synopsis:</small>
            <div class="synopsis">
                {{(synopsis==""||synopsis==null)?"No Data":synopsis}}
            </div>
        </section>
    </article>
</template>

<style scoped>
    .card {
        margin: 1rem;
        border-radius: .5rem;
        box-shadow: 0 0 .5rem .02rem #0009;
        padding: 1rem;
        background-color: var(--text-color-light);
        transition: transform .3s ease;
        max-height: fit-content;

        display: flex;
        flex-direction: column;
    }

    .card:hover {
        transform: scale(1.1, 1.1);
    }

    .image {
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        flex-shrink: 0;
    }

    .filter {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(to bottom, transparent 70%, white);
    }

    .image img {
        display: flex;
    }

    .data {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .titles {
        margin-bottom: 1rem;
    }

    .titles h3 {
        margin: 0;
    }

    .synopsis::-webkit-scrollbar {
        display: none;
    }

    .synopsis {
        margin-top: .2rem;
        overflow-y: auto;
    }

    @media screen and (min-width: 768px) {
        .card {
            max-height: 450px;
        }
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
            airdate: {
                type: String,
                required: false
            },
            episode_number: {
                type: Number,
                required: false
            },
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            season: {
                type: Number,
                required: true
            },
            synopsis: {
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