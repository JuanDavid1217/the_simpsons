<template>
    <main>
        <EpisodeCardComponent v-for="(item, id) in data" :name="item.name" :id="item.id" :image="item.image_path" :season="item.season" :synopsis="item.synopsis" :key="id"/>
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
  
    @media screen and (min-width: 768px) {
        main {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 1200px) {
        main {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>

<script>
import EpisodeCardComponent from "@/components/EpisodeCardComponent.vue"
import { get } from "@/services/GeneralService"

export default {
    name: 'EpisodeView',
    components: {
        EpisodeCardComponent
    },
    data() {
        return {
            data: [],
            page: 1,
            observer: null
        }
    },
    async mounted() {
        this.observer = new IntersectionObserver (
            async (entries) => {
                if (entries[0].isIntersecting) await this.getEpisodes(`/episodes?page=${this.page}`);
            },
            { rootMargin: "32px" }
        );

        await this.getEpisodes('/episodes');

        this.observer.observe(this.$refs.sentinel);
    },
    beforeUnmount() {
        if (this.observer != null) {
            this.observer.disconnect();
        }
    },
    methods: {
        async getEpisodes(endpoint) {
            const response = await get(endpoint);
            if (response.status == 200) {
                this.data = this.data.concat(response.data.results);
                this.page++
            }
        }
    },
}
</script>