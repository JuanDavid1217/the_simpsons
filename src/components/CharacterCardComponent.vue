<template>
    <article class="card">
        <section class="profile-image">
            <img :src="complete_portrait_path" :alt="`${name} photo`">
        </section>
        <section class="profile-data">
            <h4>{{name}} <small v-if="age">(age: {{age}})</small></h4>
            <p>{{occupation}}</p>
            <p v-if="status" :class="status=='Alive'?'alive':'deceased'"><small><b>{{status}}</b></small></p>
        </section>
    </article>
</template>

<style scoped>
    .card {
        margin: 1rem;
        border-radius: .5rem;
        box-shadow: 0 0 .5rem .02rem #0009;
        padding: .5rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--text-color-light);
        transition: transform .3s ease;
    }

    .card:hover {
        transform: scale(1.1, 1.1);
    }

    .profile-image {
        --img-size: 8rem;
        width: var(--img-size);
        hight: var(--img-size);
        border-radius: 50%;
        overflow: hidden;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .profile-data {
        text-align: center;
    }

    .profile-data h4 {
        margin-bottom: 0;
    }

    .alive {
        color: green;
    }

    .deceased {
        color: red;
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