<template>

    <Layout>

        <main id="main" class="technology page-container">
            <div v-if="jsonData">
                <transition name="text-to-bottom" appear>
                    <h1 class="numbered-title">
                        <span aria-hidden="true" class="number">03</span>
                        <span>Space Launch 101</span>
                    </h1>
                </transition>

                <transition name="text-to-bottom" appear>
                    <div class="technology__main-container">
                        <div class="technology__first-container">
                            <img :src="selectedImageDesktop" :alt="selectedTechnology.name" class="desktop">
                            <img :src="selectedImageMobile" :alt="selectedTechnology.name" class="mobile">
                        </div>

                        <div class="technology__second-container">
                            <div class="technology__tabs" aria-label="technologys list">
                                
                                <Tabs
                                    :tabData="jsonData"
                                    :tabSelectedIndex="selectedTechnologyIndex"
                                    tabType="technology"
                                    @update:tabSelectedIndex="updateSelectedIndex"
                                />

                            </div>

                            <article class="technology__info">
                                <h6 class="subheading-02">The terminology...</h6>
                                <h4>{{ selectedTechnology.name }}</h4>
                                <p class="ff-sans text-accent">{{ selectedTechnology.description }}</p>
                            </article>
                        </div>
                    </div>
                </transition>

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
    name: 'Technology',
    components: {
        Layout,
        Tabs
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
        const updateSelectedIndex = (index) => {
            selectedTechnologyIndex.value = index
        }

        // Change tabs with keyboard arrows
        const handleKeyDown = (event) => {
            if ( event.key === 'ArrowLeft' ) {
                updateSelectedIndex(selectedTechnologyIndex.value === 0 ? jsonData.value.technology.length - 1 : selectedTechnologyIndex.value - 1)
                event.preventDefault()
            } else if ( event.key === 'ArrowRight' ) {
                updateSelectedIndex(selectedTechnologyIndex.value === jsonData.value.technology.length - 1 ? 0 : selectedTechnologyIndex.value + 1)
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
            updateSelectedIndex,
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
    @media (max-width: $breakpoint-max-mobile) { padding-inline: 0; }

    .numbered-title {
        margin-bottom: 2.5rem;

        @media (max-width: $breakpoint-max-mobile) {
            padding-inline: 1rem;
            text-align: center;
        }

        @media (min-width: $breakpoint-min-tablet) { margin-bottom: 3.5rem; }
        @media (min-width: $breakpoint-min-desktop) { margin-inline: auto; }
    }

    .technology__main-container {
        display: flex;
        flex-direction: column;

        @media (min-width: $breakpoint-min-desktop) {
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
        }
        
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

            @media (max-width: $breakpoint-max-mobile) { padding-inline: 1rem; }
            
            @media (min-width: $breakpoint-min-desktop) {
                align-items: flex-start;
                flex-direction: row;
                margin-top: 4rem;
                order: 1;
                width: 60%;
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
                    margin-bottom: 1rem;
                    line-height: normal;
                }

                p {
                    font-size: 0.938rem;
                    line-height: 1.563rem;
                    margin-bottom: 2rem;
                    max-width: 50ch;

                    @media (min-width: $breakpoint-min-tablet) { font-size: 1rem; }
                    @media (max-width: $breakpoint-max-tablet) { margin-inline: auto; }
                    @media (min-width: $breakpoint-min-desktop) { font-size: 1.125rem; }
                }
            }
        }
    }
}

</style>