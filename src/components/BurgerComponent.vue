<template>
    <section class="off-canvas-logo">
        <input ref="offCanvasBtn" type="checkbox" class="off-canvas-btn">
        <label class="off-canvas-burger"></label>
        <nav class="off-canvas-menu">
            <div class="off-canvas-menu-container">
                <button type="button" @click="navigate('/characters')" :class="currentPage==1?'off-canvas-link-selected button-link':'off-canvas-link button-link'">Characters</button>
                <button type="button" @click="navigate('/episodes')" :class="currentPage==2?'off-canvas-link-selected button-link':'off-canvas-link button-link'">Episodes</button>
                <button type="button" @click="navigate('/locations')" :class="currentPage==3?'off-canvas-link-selected button-link':'off-canvas-link button-link'">Locations</button>
            </div>
        </nav> 
    </section>
</template>

<style>
    .off-canvas-logo {
        --burguer-size: 1.5rem;
        --burger-spacing: calc((var(--burguer-size) / 5));
        --burger-radius: calc(var(--burger-spacing) / 2);

        position: relative;
        width: calc(var(--burguer-size) * 1.5);
        height: var(--burguer-size);
        margin-left: var(--padding-x);
        flex-grow: 0;
        flex-shrink: 0;
    }

    .off-canvas-btn {
        position: absolute;
        inset: 0;
        cursor: pointer;
        opacity: 0;
    }

    .off-canvas-burger {
        position: absolute;
        top: 0;
        width: 100%;
        height: var(--burger-spacing);
        border-radius: var(--burger-radius);
        transform: rotate(0deg) translate(0, calc(var(--burger-spacing) * 2));
        transition: transform .3s ease, background-color .3s ease;
        transform-origin: top left;
        z-index: -1;
        background-color: var(--text-color-light);
        box-shadow: 0 0 .5rem .02rem #0009;
    }

    .off-canvas-burger::before,
    .off-canvas-burger::after {
        content: "";
        display: block;
        width: 100%;
        height: var(--burger-spacing);
        border-radius: var(--burger-radius);
        background-color: var(--text-color-light);
        transition: transform .3s ease;
        box-shadow: 0 0 .5rem .02rem #0009;
    }

    .off-canvas-burger::before {
        transform: rotate(0deg) translate(0, calc(var(--burger-spacing) * -2));
    }


    .off-canvas-burger::after {
        transform: rotate(0deg) translate(0, var(--burger-spacing));
    }

    .off-canvas-btn:checked + .off-canvas-burger {
        background-color: transparent;
        box-shadow: none;
    }

    .off-canvas-btn:checked + .off-canvas-burger::before {
        transform: rotate(45deg) translate(calc(var(--burger-spacing) / 1.5));
    }

    .off-canvas-btn:checked + .off-canvas-burger::after {
        transform: rotate(-45deg) translate(calc(var(--burger-spacing) / 1.3));
    }

    .off-canvas-menu {
        position: fixed;
        top: var(--header-height);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--header-height));
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-filter-blur-2);
        /*
            from top to bottom
            transform: translate(0, calc(-1 * (100% + var(--header-height))));
            
            from right to left
            transform: translate(200%, 0);

            from bottom to top
            transform: translate(0, 200%);

            from left to right
            transform: translate(-100%, 0);
        */
        transform: translate(-100%, 0);
        transition: transform .3s ease;
        z-index: -2;
    }

    .off-canvas-btn:checked ~ .off-canvas-menu {
        transform: translate(0, 0);
    }

    .off-canvas-menu-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        scrollbar-width: none;
    }

    .off-canvas-menu-container::-webkit-scrollbar {
        display: none;
    }

    .off-canvas-link,
    .off-canvas-link-selected {
        width: 100%;
        padding: var(--general-padding);
        display: flex;
        flex: 1 1 auto;
        justify-content: center;
        align-items: center;
        position: relative;
        color: var(--text-color-light);
        transition: color .3s ease;
        text-decoration: none;
    }

    .button-link {
        border: none;
        background-color: transparent;
        font-size: inherit;
    }

    .off-canvas-link:hover,
    .off-canvas-link-selected {
        color: var(--text-color-dark);
    }

    .off-canvas-link::before,
    .off-canvas-link-selected:before {
        content: "";
        position: absolute;
        bottom: 0;
        height: 100%;
        background-color: var(--color4);
        transition: width .3s ease, left .3s ease;
        z-index: -1;
    }

    .off-canvas-link::before {
        width: 0;
    }

    .off-canvas-link:hover::before,
    .off-canvas-link-selected::before {
        width: 100%;
    }

    .to-center::before {
        left: 50%;
    }

    .to-center:hover::before {
        left: 0;
    }

    @media screen and (min-width: 768px) {
        .off-canvas-logo {
            position: static;
            width: auto;
            height: 100%;
            margin-left: var(--padding-x);
            flex-grow: 0;
            flex-shrink: 0;
        }

        .off-canvas-btn {
            display: none;
        }

        .off-canvas-burger {
            display: none;
        }

        .off-canvas-burger::before,
        .off-canvas-burger::after {
            display: none;
        }

        .off-canvas-menu {
            position: static;
            width: auto;
            height: 100%;
            display: block;
            transform: translate(0, 0);
            background-color: transparent;
            z-index: 0;
        }

        .off-canvas-menu-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
        }

        .off-canvas-link,
        .off-canvas-link-selected {
            width: auto;
        }

        .off-canvas-link::before,
        .off-canvas-link-selected::before {
            border-radius: 50px;
        }

        .width-50 {
            width: 50%;
        }
    }
</style>

<script>
    import { currentPage } from "@/services/GeneralService";

    export default {
        name: 'BurgerComponent',
        methods: {
            navigate(path){
                if (this.$refs.offCanvasBtn.checked == true) {
                    this.$refs.offCanvasBtn.checked = false;
                }
                this.$router.push(path);  
            }
        },
        computed: {
            currentPage() {
                return currentPage.value;
            }
        }
    }
</script>