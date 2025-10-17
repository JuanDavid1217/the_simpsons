<template>
    <main>
        <CardComponent v-for="(item, id) in data" :name="item.name" :image="item.image_path" :id="item.id" :key="id"/>
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
import CardComponent from "@/components/CardComponent.vue"
import { get } from "@/services/GeneralService"

export default {
    name: 'LocationView',
    components: {
        CardComponent
    },
    data() {
        return {
            data: [],
            page: 1,
            observr: null
        }
    },
    async mounted() {
        this.observer = new IntersectionObserver (
            async (entries) => {
                if  (entries[0].isIntersecting) await this.getLocations(`/locations?page=${this.page}`);
            },
            { rootMargin: "32px" }
        );

        await this.getLocations('/locations');

        this.observer.observe(this.$refs.sentinel);
    },
    beforeUnmount() {
        if (this.observer != null) {
            this.observer.disconnect();
        }
    },
    methods: {
        async getLocations(endpoint) {
            const response = await get(endpoint);
            if (response.status == 200) {
                this.data = this.data.concat(response.data.results);
                this.page++
            }  
        }
    },
}
</script>