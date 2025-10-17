<template>
    <main>
        <CharacterCardComponent v-for="(item, id) in data" :name="item.name" :id="item.id" :image="item.portrait_path" :occupation="item.occupation" :age="item.age" :status="item.status" :key="id"/>
        <div ref="sentinel" class="sentinel"></div>
    </main>
</template>

<style scoped>
    main {
        flex-grow: 1;
        background-color: var(--text-color-light);
        display: grid;
        padding: 1rem;
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
import CharacterCardComponent from '@/components/CharacterCardComponent.vue'

export default {
    name: 'CharacterView',
    components: {
        CharacterCardComponent
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
                console.log(response)
                this.data = this.data.concat(response.data.results);
                this.page++
            }
        }
    },
}
</script>