<template>

    <Layout>

        <main id="main" class="destination page-container">
            <div v-if="jsonData">
                <h1 class="numbered-title">
                    <span aria-hidden="true" class="number">01</span>
                    <span>Pick your destination</span>
                </h1>

                <div class="destination__main-container">
                    <div class="destination__first-container">
                        <!-- <img class="first-img" :src="jsonData.destinations[0].images.png" alt="the moon"> -->
                        <img src="@/assets/img/destination/image-moon.png" alt="the moon">
                    </div>

                    <div class="destination__second-container">
                        <div class="destination__tabs">
                            <button aria-selected="true" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[0].name }}</button>
                            <button aria-selected="false" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[1].name }}</button>
                            <button aria-selected="false" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[2].name }}</button>
                            <button aria-selected="false" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[3].name }}</button>
                        </div>

                        <article class="destination__info">
                            <h2>{{ jsonData.destinations[0].name }}</h2>

                            <p>{{ jsonData.destinations[0].description }}</p>

                            <div class="destination__data">
                                <div>
                                    <h6>Avg. distance</h6>
                                    <p>{{ jsonData.destinations[0].distance }}</p>
                                </div>

                                <div>
                                    <h6>Est. travel time</h6>
                                    <p>{{ jsonData.destinations[0].travel }}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>

            <div v-else>
                Loading...
            </div>

        </main>

    </Layout>

</template>



<script>
import { computed, onBeforeMount, onMounted } from 'vue';
import { useStore } from 'vuex';

// @ is an alias to /src
import Layout from '@/components/Layout.vue';

export default {
    name: 'Destination',
    components: {
        Layout
    },
    setup() {
        const store = useStore()

        // Dispatch the action to fetch JSON data
        const fetchData = async () => {
            await store.dispatch('fetchJsonData')
        };

        // Access the JSON data from the store using computed
        const jsonData = computed(() => store.state.jsonData)

        onMounted(() => {
            fetchData();  // Call the fetchData function when the component is mounted
        });

        onBeforeMount(() => {
            document.body.className = 'destination-page'; // Set a class on the body tag based on the current page
        });


        return {
            jsonData
        };
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.destination {

    // * {
    //     border: 1px solid limegreen;
    // }

    .numbered-title {
        margin-bottom: 2rem;
        @media (max-width: $breakpoint-max-mobile) { text-align: center; }
        @media (min-width: $breakpoint-min-tablet) { margin-bottom: 3rem; }
    }
    .destination__main-container {
        @media (min-width: $breakpoint-min-desktop) {
            display: flex;
            flex-direction: row;
        }
    }

    .destination__first-container {
        @media (max-width: $breakpoint-max-tablet) {
            display: flex;
            justify-content: center;
        }

        @media (min-width: $breakpoint-min-desktop) { width: 50%; }

        img {
            margin-bottom: 2rem;
            max-width: 50%;

            @media (min-width: $breakpoint-min-tablet) { margin-bottom: 3rem; }

            @media (min-width: $breakpoint-min-desktop) {
                margin-inline: auto;
                margin-top: 2rem;
                max-width: 80%;
            }
        }
    }

    .destination__second-container {
        @media (min-width: $breakpoint-min-desktop) {
            width: 50%;
        }

        .destination__tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 0.5rem;

            @media (min-width: $breakpoint-min-tablet) { margin-bottom: 1rem; }
            @media (min-width: $breakpoint-min-desktop) { justify-content: flex-start; }

            & > * {
                background-color: transparent;
                border: 0;
                border-bottom: 0.2rem solid;
                border-color: rgba($palette-color-light, 0);
                color: $palette-color-accent;
                cursor: pointer;
                font-size: 14px;
                font-weight: 400;
                margin: 0 1.1rem;
                padding: 0.7rem 0;
                letter-spacing: 2.362px;
                line-height: normal;

                &:first-child { margin-left: 0; }
                &:last-child { margin-right: 0; }

                &:hover, &:focus { border-color: rgba($palette-color-light, 0.5); }

                &.active, &[aria-selected="true"] {
                    border-color: rgba($palette-color-light, 1); 
                    color: rgba($palette-color-light, 1);
                }

                @media (min-width: $breakpoint-min-tablet) {
                    font-size: 16px;
                    letter-spacing: 2.7px;
                }
            }     
        }

        article.destination__info {

            & > h2 {
                @media (max-width: $breakpoint-max-tablet) { text-align: center; }
            }

            & > p {
                border-bottom: 1px solid rgba($palette-color-light, 0.3);
                color: $palette-color-accent;
                font-size: 15px;
                font-weight: 400;
                line-height: 25px;
                margin-bottom: 1.5rem;
                margin-inline: auto;
                max-width: 65ch;
                padding-bottom: 1.5rem;

                @media (min-width: $breakpoint-min-tablet) {
                    font-size: 16px;
                    line-height: 28px;
                    margin-bottom: 2rem;
                    padding-bottom: 3rem;
                }

                @media (max-width: $breakpoint-max-tablet) { text-align: center; }

                @media (min-width: $breakpoint-min-desktop) {
                    font-size: 18px;
                    line-height: 32px;
                }
            }

            .destination__data {
                display: flex;
                flex-direction: column;

                @media (min-width: $breakpoint-min-tablet) {
                    flex-direction: row;
                    justify-content: space-evenly;
                }

                @media (min-width: $breakpoint-min-desktop) {
                    justify-content: flex-start;
                }

                & > div {
                    margin-bottom: 2rem;

                    @media (min-width: $breakpoint-min-desktop) { width: 50%; }

                    & > h6 {
                        color: $palette-color-accent;
                        font-size: 14px;
                        font-weight: 400;
                        font-family: $font-family-sans-cond;
                        line-height: normal;
                        letter-spacing: 2.362px;
                        margin-bottom: 0.9em;
                        text-transform: uppercase;

                        @media (max-width: $breakpoint-max-tablet) { text-align: center; }
                    }

                    & > p {
                        font-family: $font-family-serif;
                        font-size: 28px;
                        font-weight: 400;
                        line-height: normal;
                        text-transform: uppercase;

                        @media (max-width: $breakpoint-max-tablet) { text-align: center; }
                    }
                }
            }
        }
    }
}
</style>
