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
                        <img :src="selectedImage" :alt="selectedDestination.name">
                    </div>

                    <div class="destination__second-container">
                        <div class="destination__tabs" aria-label="destinations list">
                            <!-- <button
                                v-for="(destination, index) in jsonData.destinations"
                                :key="index"
                                :aria-selected="index === selectedDestinationIndex"
                                :aria-controls="`${destination.name.replace(/\s+/g, '-').toLowerCase()}-tab`"
                                class="ff-sans-cond text-accent letter-spacing-02 uppercase"
                                @click="updateSelectedIndex(index)"
                            >
                                {{ destination.name }}
                            </button> -->

                            <Tabs
                                :tabData="jsonData"
                                :tabSelectedIndex="selectedDestinationIndex"
                                tabType="destination"
                                @update:tabSelectedIndex="updateSelectedIndex"
                            />

                        </div>

                        <article class="destination__info">
                            <h2>{{ selectedDestination.name }}</h2>

                            <p class="text-accent">{{ selectedDestination.description }}</p>

                            <div class="destination__data">
                                <div>
                                    <h6 class="ff-sans-cond text-accent">Avg. distance</h6>
                                    <p class="ff-serif">{{ selectedDestination.distance }}</p>
                                </div>

                                <div>
                                    <h6 class="ff-sans-cond text-accent">Est. travel time</h6>
                                    <p class="ff-serif">{{ selectedDestination.travel }}</p>
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
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import Tabs from '@/components/Tabs.vue';


export default {
    name: 'Destination',
    components: {
        Layout,
        Tabs
    },
    setup() {
        const store = useStore()
        const selectedDestinationIndex = ref(0)


        // Dispatch the action to fetch JSON data
        const fetchData = async () => {
            await store.dispatch('fetchJsonData')
        };

        // Access the JSON data from the store using computed
        const jsonData = computed(() => store.state.jsonData)

        // Access the selected destination based on the index
        const selectedDestination = computed(() => jsonData.value.destinations[selectedDestinationIndex.value])

        // Obtain the image of the selected destination
        const selectedImage = computed(() => {
            return require(`@/assets/img/destination/${selectedDestination.value.images.png}`)
        })

        // Function to select a destination when a button/tab is clicked
        const updateSelectedIndex = (index) => {
            selectedDestinationIndex.value = index
        }

        // Change tabs with keyboard arrows
        const handleKeyDown = (event) => {
            if ( event.key === 'ArrowLeft' ) {
                updateSelectedIndex(selectedDestinationIndex.value === 0 ? jsonData.value.destinations.length - 1 : selectedDestinationIndex.value - 1)
                event.preventDefault()
            } else if ( event.key === 'ArrowRight' ) {
                updateSelectedIndex(selectedDestinationIndex.value === jsonData.value.destinations.length - 1 ? 0 : selectedDestinationIndex.value + 1)
                event.preventDefault()
            }
        }


        onMounted(() => {
            window.addEventListener('keydown', handleKeyDown)
            fetchData()  // Call the fetchData function when the component is mounted
        })

        onBeforeMount(() => {
            document.body.className = 'destination-page'; // Set a class on the body tag based on the current page
        })

        onBeforeUnmount(() => {
            window.removeEventListener('keydown', handleKeyDown)
        })


        return {
            jsonData,
            updateSelectedIndex,
            selectedDestination,
            selectedDestinationIndex,
            selectedImage,
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.destination {
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
                max-width: 75%;
            }
        }
    }

    .destination__second-container {
        @media (min-width: $breakpoint-min-desktop) { width: 50%; }

        article.destination__info {

            & > h2 {
                @media (max-width: $breakpoint-max-tablet) { text-align: center; }
            }

            & > p {
                border-bottom: 1px solid rgba($palette-color-light, 0.3);
                font-size: 0.938rem;
                font-weight: 400;
                line-height: 1.563rem;
                margin-bottom: 1.5rem;
                margin-inline: auto;
                max-width: 65ch;
                padding-bottom: 1.5rem;

                @media (min-width: $breakpoint-min-tablet) {
                    font-size: 1rem;
                    line-height: 1.75rem;
                    margin-bottom: 2rem;
                    padding-bottom: 3rem;
                }

                @media (max-width: $breakpoint-max-tablet) { text-align: center; }

                @media (min-width: $breakpoint-min-desktop) {
                    font-size: 1.125rem;
                    line-height: 2rem;
                }
            }

            .destination__data {
                display: flex;
                flex-direction: column;

                @media (min-width: $breakpoint-min-tablet) {
                    flex-direction: row;
                    justify-content: space-evenly;
                }

                @media (min-width: $breakpoint-min-desktop) { justify-content: flex-start; }

                & > div {
                    margin-bottom: 2rem;

                    @media (min-width: $breakpoint-min-desktop) { width: 50%; }

                    & > h6 {
                        font-size: 0.875rem;
                        font-weight: 400;
                        line-height: normal;
                        letter-spacing: 0.148rem;
                        margin-bottom: 0.9em;
                        text-transform: uppercase;

                        @media (max-width: $breakpoint-max-tablet) { text-align: center; }
                    }

                    & > p {
                        font-size: 1.75rem;
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
