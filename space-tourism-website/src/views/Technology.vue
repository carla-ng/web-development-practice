<template>

    <Layout>

        <main id="main" class="technology page-container">
            <div v-if="jsonData">
                <h1 class="numbered-title">
                    <span aria-hidden="true" class="number">03</span>
                    <span>Space Launch 101</span>
                </h1>

                <div class="technology__main-container">
                    <div class="technology__first-container">
                        <img :src="selectedImageDesktop" :alt="selectedTechnology.name" class="desktop">
                        <img :src="selectedImageMobile" :alt="selectedTechnology.name" class="mobile">
                    </div>

                    <div class="technology__second-container">
                        <div class="technology__tabs" aria-label="technologys list">
                            <button
                                v-for="(technology, index) in jsonData.technology"
                                :key="index"
                                :aria-selected="index === selectedTechnologyIndex"
                                :aria-controls="`${technology.name.replace(/\s+/g, '-').toLowerCase()}-tab`"
                                @click="selectTechnology(index)"
                            >
                                {{ index + 1 }}
                            </button>
                        </div>

                        <article class="technology__info">
                            <h6 class="subheading-02">The terminology...</h6>
                            <h4>{{ selectedTechnology.name }}</h4>
                            <p>{{ selectedTechnology.description }}</p>
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

export default {
    name: 'Technology',
    components: {
        Layout
    },
    setup() {
        const store = useStore()
        const selectedTechnologyIndex = ref(0)


        // Dispatch the action to fetch JSON data
        const fetchData = async () => {
            await store.dispatch('fetchJsonData')
        };

        // Access the JSON data from the store using computed
        const jsonData = computed(() => store.state.jsonData)

        // Access the selected technology based on the index
        const selectedTechnology = computed(() => jsonData.value.technology[selectedTechnologyIndex.value])

        // Obtain the image of the selected technology for desktop
        const selectedImageDesktop = computed(() => {
            return require(`@/assets/img/technology/${selectedTechnology.value.images.portrait}`)
        })

        // Obtain the image of the selected technology for tablet and mobile
        const selectedImageMobile = computed(() => {
            return require(`@/assets/img/technology/${selectedTechnology.value.images.landscape}`)
        })

        // Function to select a destination when a button/tab is clicked
        const selectTechnology = (index) => {
            selectedTechnologyIndex.value = index
        }

        // Change tabs with keyboard arrows
        const handleKeyDown = (event) => {
            if ( event.key === 'ArrowLeft' ) {
                selectTechnology(selectedTechnologyIndex.value === 0 ? jsonData.value.technology.length - 1 : selectedTechnologyIndex.value - 1)
                event.preventDefault()
            } else if ( event.key === 'ArrowRight' ) {
                selectTechnology(selectedTechnologyIndex.value === jsonData.value.technology.length - 1 ? 0 : selectedTechnologyIndex.value + 1)
                event.preventDefault()
            }
        }


        onMounted(() => {
            window.addEventListener('keydown', handleKeyDown)
            fetchData();  // Call the fetchData function when the component is mounted
        })

        onBeforeMount(() => {
            document.body.className = 'technology-page'; // Set a class on the body tag based on the current page
        })

        onBeforeUnmount(() => {
            window.removeEventListener('keydown', handleKeyDown)
        })


        return {
            jsonData,
            selectTechnology,
            selectedTechnology,
            selectedTechnologyIndex,
            selectedImageDesktop,
            selectedImageMobile,
        };
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.technology {
    padding-inline: 0;

    @media (min-width: $breakpoint-min-desktop) { max-width: none; }
    @media (min-width: 1400px) { max-width: 80rem; }

    .numbered-title {
        margin-bottom: 2.5rem;
        max-width: 85rem;
        padding-inline: 1rem;

        @media (max-width: $breakpoint-max-mobile) { text-align: center; }
        @media (min-width: $breakpoint-min-tablet) { margin-bottom: 3.5rem; }
        @media (min-width: $breakpoint-min-desktop) { margin-inline: auto; }
        @media (min-width: 1400px) { max-width: 80rem; }
    }

    .technology__main-container {
        display: flex;
        flex-direction: column;

        @media (min-width: $breakpoint-min-desktop) {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }

        @media (min-width: 1400px) { justify-content: center; }
        
        .technology__first-container {
            @media (min-width: $breakpoint-min-desktop) {
                order: 2;
                width: 40%;
            }

            img {
                &.mobile {
                    @media (max-width: $breakpoint-max-mobile) { margin-bottom: 2.5rem; }
                    @media (max-width: $breakpoint-max-tablet) { margin-bottom: 3.5rem; }
                }
                &.desktop {
                    @media (min-width: $breakpoint-min-desktop) { margin-bottom: 2rem; }
                }
            }
        }

        .technology__second-container {
            display: flex;
            flex-direction: column;
            padding-inline: 1rem;
            
            @media (min-width: $breakpoint-min-desktop) {
                align-items: flex-start;
                flex-direction: row;
                order: 1;
                width: 60%;
            }

            .technology__tabs {
                display: flex;
                justify-content: center;
                margin-bottom: 1.5rem;

                @media (max-width: $breakpoint-max-tablet) { margin-bottom: 3rem; }
                @media (min-width: $breakpoint-min-desktop) {
                    flex-direction: column;
                    margin-right: 5rem;
                }
                
                button {
                    background-color: $palette-color-dark;
                    border: 1px solid rgba($palette-color-light, 0.25);
                    border-radius: 50%;
                    color: $palette-color-light;
                    cursor: pointer;
                    font-size: 16px;
                    height: 40px;
                    text-align: center;
                    width: 40px;

                    &.active, &[aria-selected="true"] {
                        background-color: $palette-color-light;
                        color: $palette-color-dark;
                    }

                    @media (min-width: $breakpoint-min-tablet) {
                        font-size: 24px;
                        height: 60px;
                        width: 60px;
                    }

                    @media (max-width: $breakpoint-max-tablet) { margin-inline: 0.5rem;}

                    @media (min-width: $breakpoint-min-desktop) {
                        font-size: 32px;
                        height: 80px;
                        margin: 1rem 0;
                        width: 80px;

                        &:first-child { margin-top: 0; }
                        &:last-child { margin-bottom: 0; }

                        &:hover {
                            background-color: rgba($palette-color-light, 0.5);
                            color: $palette-color-dark;
                        }
                    }
                }
            }

            article.technology__info {
                @media (max-width: $breakpoint-max-tablet) { text-align: center; }
                @media (min-width: $breakpoint-min-desktop) { margin-right: 2rem; }

                h6 {
                    margin-bottom: 0.5rem;
                    @media (min-width: $breakpoint-min-tablet) { margin-bottom: 1rem; }
                    @media (min-width: $breakpoint-min-desktop) { margin-bottom: 0.7rem; }
                }

                h4 {
                    font-size: 24px;
                    margin-bottom: 1rem;
                    line-height: normal;

                    @media (min-width: $breakpoint-min-tablet) { font-size: 40px; }
                    @media (min-width: $breakpoint-min-desktop) {
                        font-size: 56px;
                        //white-space: nowrap;
                    }
                }

                p {
                    color: $palette-color-accent;
                    font-family: $font-family-sans;
                    font-size: 15px;
                    line-height: 25px;
                    margin-bottom: 2rem;
                    max-width: 50ch;

                    @media (min-width: $breakpoint-min-tablet) { font-size: 16px; }
                    @media (max-width: $breakpoint-max-tablet) { margin-inline: auto; }
                    @media (min-width: $breakpoint-min-desktop) { font-size: 18px; }
                }
            }
        }
    }
}

</style>