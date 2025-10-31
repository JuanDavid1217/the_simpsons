<template>
    <header ref="header" class="header">
        <LogoComponent/>
        <BurgerComponent/>
    </header>
</template>

<style>
    .header {
        padding: var(--padding-y) var(--padding-x);
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .header::before {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 0;
        backdrop-filter: blur(.4rem);
        background-color: var(--color-filter-blur);
        transition: box-shadow 0.3s linear;
    }

    .header.scrolled::before {
        box-shadow: 0 .2rem .5rem .02rem #0009;
    }
</style>

<script>
    import LogoComponent from '@/components/LogoComponent.vue'
    import BurgerComponent from '@/components/BurgerComponent.vue'

    export default {
        name: 'HeaderComponent',
        components: {
            LogoComponent,
            BurgerComponent
        },
        mounted() {
            window.addEventListener('scroll', ()=> {
                if (this.$refs.header) {
                    if (window.scrollY > 0) {
                        this.$refs.header.classList.add('scrolled')
                    } else {
                        this.$refs.header.classList.remove('scrolled')
                    }
                }
            })
        },
    }
</script>