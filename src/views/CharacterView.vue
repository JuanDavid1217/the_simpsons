<template>
    <main>
        <CardComponent v-for="(item, id) in data" :name="item.name" :id="item.id" :image="item.portrait_path" :key="id"/>
        <div ref="sentinel" class="sentinel"></div>
    </main>
</template>

<style scoped>
    main {
        flex-grow: 1;
        background-color: var(--text-color-light);
        display: grid;
        padding: 2rem;
    }

    @media screen and (min-width: 576px) {
        main {
            grid-template-columns: repeat(2, 1fr);
        }
    }
  
    @media screen and (min-width: 768px) {
        main {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (min-width: 1200px) {
        main {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>

<script>
import {get} from '@/services/GeneralService'
import CardComponent from '@/components/CardComponent.vue'

export default {
    name: 'CharacterView',
    components: {
        CardComponent
    },
    data() {
        return {
            data: [],
            page: 1,
            observer: null
        }
    },
    async mounted() {
        this.observer = new IntersectionObserver(
            async (entries) => {
                if (entries[0].isIntersecting) await this.getCharacters(`/characters?page=${this.page}`);
            },
            { rootMargin: "32px" }
        );

        await this.getCharacters('/characters');

        this.observer.observe(this.$refs.sentinel);
    },
    beforeUnmount() {
        if (this.observe != null) {
            this.observer.disconnect()
        }
    },
    methods: {
        async getCharacters(endpoint) {
            const response = await get(endpoint);
            if (response.status==200) {
                this.data = this.data.concat(response.data.results);
                this.page++
            }
        }
    },
}
</script>