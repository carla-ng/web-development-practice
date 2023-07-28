<template>
    <Layout>

        <main id="main" class="home page-container">

            <div class="home__first-container">
                <h1 class="home__heading">
                    <span class="home__heading-intro text-accent ff-sans-cond uppercase">So, you want to travel to</span>
                    <span class="home__heading-text">space</span>
                </h1>

                <p class="home__text text-accent">
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>

            <div class="home__second-container">
                <a href="#" class="home__explore-button ff-serif text-dark bg-light uppercase">
                    <span>Explore</span>
                </a>
            </div>

        </main>

    </Layout>
</template>


<script>
import { onBeforeMount } from 'vue';

import Layout from '@/components/Layout.vue';

export default {
    name: 'Home',
    components: {
        Layout
    },
    setup() {

        onBeforeMount(() => {
            document.body.className = 'home-page'; // Set a class on the body tag based on the current page
        });

        return { };
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.home {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: $breakpoint-min-desktop) {
        align-items: flex-end;
        flex-direction: row;
        justify-content: space-between;
    }

    .home__first-container {
        text-align: center;
        @media (min-width: $breakpoint-min-desktop) { text-align: left; }

        .home__heading {
            .home__heading-intro {
                display: block;
                font-size: 16px;
                letter-spacing: 2.7px;
                line-height: normal;
                margin-bottom: 16px;

                @media (min-width: $breakpoint-min-tablet) {
                    font-size: 20px;
                    letter-spacing: 3.375px;
                    margin-bottom: 24px;
                }

                @media (min-width: $breakpoint-min-desktop) {
                    font-size: 28px;
                    letter-spacing: 4.725px;
                }
            }

            .home__heading-text {
                margin-bottom: 16px;
                @media (min-width: $breakpoint-min-tablet) { margin-bottom: 24px; }
            }
        }

        .home__text {
            font-size: 15px;
            line-height: 25px;
            margin-inline: auto;
            margin-bottom: 80px;
            max-width: 45ch;

            @media (min-width: $breakpoint-min-tablet) {
                font-size: 16px;
                line-height: 28px;
                margin-inline: unset;
            }

            @media (min-width: $breakpoint-min-desktop) {
                font-size: 18px;
                line-height: 32px;
                margin-bottom: 0;
            }
        }
    }

    .home__second-container {
        margin-inline: 2rem;
        .home__explore-button {
            aspect-ratio: 1;
            border-radius: 50%;
            cursor: pointer;
            display: inline-grid;
            letter-spacing: 2px;
            position: relative;
            place-items: center;
            text-decoration: none;
            z-index: 1;

            height: 150px;
            width: 150px;

            @media (min-width: $breakpoint-min-tablet) {
                height: 242px;
                width: 242px;
            }

            @media (min-width: $breakpoint-min-desktop) {
                height: 274px;
                width: 274px;
            }

            &::after {
                content: '';
                background: rgba($palette-color-light, 0.15);
                border-radius: 50%;
                height: 100%;
                opacity: 0;
                position: absolute;
                transition: opacity 500ms linear, transform 500ms ease-in-out;
                width: 100%;
                z-index: -1;
            }

            &:hover, &:focus {
                &::after {
                    opacity: 1;
                    transform: scale(1.5);
                }
            }

            span {
                font-size: 20px;
                line-height: normal;
                letter-spacing: 1.25px;

                @media (min-width: $breakpoint-min-tablet) {
                    font-size: 32px;
                    letter-spacing: 2px;
                }

                @media (min-width: $breakpoint-min-desktop) {
                    font-size: 32px;
                }
            }
        }
    }
}
</style>
