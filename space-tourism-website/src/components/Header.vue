<template>

    <header class="header">

        <div class="header__logo">
            <img src="../assets/shared/logo.svg" alt="Space Tourism logo" class="header__logo-img">
        </div>

        <button class="header__hamburger" aria-controls="header__nav-ul" @click="toggleNavVisibility">
            <span class="sr-only" :aria-expanded="ariaExpanded">Menu</span>
        </button>

        <nav class="header__nav" :class="{ 'header--visible': navVisible }">
            <ul class="header__nav-ul">
                <li v-for="item in navItems" :key="item.path" :class="{ active: isActive(item.path) }">
                    <router-link :to="item.path" class="text-light ff-sans-cond letter-spacing-02 uppercase">
                        <span class="number" aria-hidden="true">{{ item.number }}</span>
                        <span class="text">{{ item.label }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>

    </header>

</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'Header',

    setup() {
        const navVisible = ref(false)
        const route = useRoute()

        const navItems = [
            { path: '/', number: '00', label: 'Home' },
            { path: '/destination', number: '01', label: 'Destination' },
            { path: '/crew', number: '02', label: 'Crew' },
            { path: '/technology', number: '03', label: 'Technology' },
        ]


        // Get active page
        const isActive = (path) => {
            return route.path === path
        }

        // Open/close nav with hamburger button
        const toggleNavVisibility = () => {
            navVisible.value = !navVisible.value
        }

        // After the page is mounted we wait for elements to show and then add class to show the nav > ul element
        onMounted(() => {
            setTimeout(() => {
                const navElement = document.getElementsByTagName('ul')[0]
                navElement.classList.add('show-loaded')
            }, 1000)
        })

        // Computed property to set aria-expanded attribute
        const ariaExpanded = computed(() => String(navVisible.value))


        return {
            ariaExpanded,
            navVisible,
            toggleNavVisibility,
            navItems,
            isActive,
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    animation-name: nav-load;
    animation-duration: 650ms;
    animation-timing-function: ease-in;

    @media (min-width: $breakpoint-min-desktop) {
        &::after {
            content: '';
            background: rgba($palette-color-light, 0.25);
            display: block;
            height: 2px;
            margin-left: 2.5rem;
            margin-right: -2.5rem;
            order: 1;
            position: relative;
            width: 100%;
        }
    }

    .header__logo {
        .header__logo-img {
            margin: 2rem clamp(1.5rem, 5vw, 3.5rem);
        }
    }

    .header__hamburger {
        display: none;

        @media (max-width: $breakpoint-max-mobile) {
            aspect-ratio: 1;
            border: 0;
            display: block;
            position: absolute;
            right: 1rem;
            top: 2rem;
            width: 1.5rem;
            z-index: 2000;

            background: transparent;
            background-image: url('~@/assets/shared/icon-hamburger.svg');
            background-repeat: no-repeat;
            background-position: center;

            &:has(> span[aria-expanded="true"]) {
                background-image: url('~@/assets/shared/icon-close.svg');
            }

            &:focus-visible {
                outline: 5px solid #fff;
                outline-offset: 5px;
            }
        }
    }

    .header__nav {
        @media (min-width: $breakpoint-min-desktop) { order: 2; }

        ul.header__nav-ul {
            @media (max-width: $breakpoint-max-mobile) {
                display: none;
                &.show-loaded { display: flex; }
            }

            @media (min-width: $breakpoint-min-tablet) { display: flex; }

            list-style: none;
            margin: 0;
            padding: 0;

            background: rgba($palette-color-dark, 0.95);

            @supports (backdrop-filter: blur(1rem)) {
                background: rgba($palette-color-light, 0.05);
                backdrop-filter: blur(3rem);
            }

            @media (max-width: $breakpoint-max-mobile) {
                flex-direction: column;
                inset: 0 0 0 30%;
                padding: 5rem 2rem 2rem 2rem;
                position: fixed;
                transform: translateX(100%);
                transition: transform 500ms ease-in-out;
                z-index: 1000;

                &[data-visible="true"] { transform: translateX(0); }

                & > .active { border: 0; }
            }

            @media (min-width: $breakpoint-min-tablet) {
                gap: clamp(2rem, 5vw, 7rem);
            }

            @media (min-width: $breakpoint-min-tablet) and (max-width: $breakpoint-max-tablet) {
                padding-inline: 1.5rem;
            }

            @media (min-width: $breakpoint-min-desktop) {
                margin-block: 2rem;
                padding-inline: clamp(3rem, 7vw, 7rem);
            }

            li {
                border-bottom: 0.2rem solid rgba($palette-color-light, 0);
                cursor: pointer;

                &:hover, &:focus { border-color: rgba($palette-color-light, 0.25); }
                &.active, &[aria-selected="true"] { border-color: rgba($palette-color-light, 1); }

                @media (min-width: $breakpoint-min-tablet) {
                    animation-name: nav-li-load;
                    animation-duration: 1000ms;
                    animation-timing-function: ease-in;
                }

                a {
                    display: block;  
                    padding: 1rem 0;
                    text-decoration: none;

                    @media (min-width: $breakpoint-min-tablet) { padding: 2rem 0; }
                
                    & > .number {
                        font-weight: 700;
                        margin-right: 0.5em;

                        @media (min-width: $breakpoint-min-tablet) and (max-width: $breakpoint-max-tablet) {
                            display: none;
                        }
                    }

                    & > .text {
                        font-size: 1rem;
                        @media (min-width: $breakpoint-min-tablet) { font-size: 0.875rem; }
                        @media (min-width: $breakpoint-min-desktop) { font-size: 1rem; }
                    }
                }
            }
        }

        &.header--visible {
            ul.header__nav-ul {
                @media (max-width: $breakpoint-max-mobile) { transform: translateX(0); }
            }
        }
    }
}

// Animations
@keyframes nav-load {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
}

@keyframes nav-li-load {
    0% { transform: scale(0); }
    90% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
</style>
