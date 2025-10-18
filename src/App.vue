<template>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
</template>

<style>
  :root {
    /*Colors*/
    --color1: #0C9AF2;
    --color2: #3F5B73;
    --color3: #07B0F2;
    --color4: #F2D22E;
    --color5: #F2F2F2;

    --color-filter-blur: #0C9AF280;
    --color-filter-blur-2: #00000090;
    --color-filter-blur-3: #fbffed70;
    
    --text-color-dark: #161616;
    --text-color-light: #fbffed;

    /*Text*/
    /* @link https://utopia.fyi/type/calculator?c=360,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
    --step--2: clamp(0.7813rem, 0.7736rem + 0.0341vw, 0.8rem);
    --step--1: clamp(0.9375rem, 0.9119rem + 0.1136vw, 1rem);
    --step-0: clamp(1.125rem, 1.0739rem + 0.2273vw, 1.25rem);
    --step-1: clamp(1.35rem, 1.2631rem + 0.3864vw, 1.5625rem);
    --step-2: clamp(1.62rem, 1.4837rem + 0.6057vw, 1.9531rem);
    --step-3: clamp(1.944rem, 1.7405rem + 0.9044vw, 2.4414rem);
    --step-4: clamp(2.3328rem, 2.0387rem + 1.3072vw, 3.0518rem);
    --step-5: clamp(2.7994rem, 2.384rem + 1.8461vw, 3.8147rem);

    /*General*/
    --logo-size: 2.7rem;
    --padding-x: 2rem;
    --padding-y: 0.5rem;
    --general-padding: 1rem;
    --header-height: calc(var(--logo-size) + (var(--padding-y) * 2));
  }

  html {
    box-sizing: border-box;
    font-size: var(--step--1);
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text-color-dark);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    min-width: 13rem;
    background-color: var(--color1);
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    width: 100%;
    height: auto;
  }
  
</style>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>