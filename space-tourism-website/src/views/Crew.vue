<template>

    <Layout>

        <main id="main" class="crew page-container">
            <div v-if="jsonData">
                <transition name="text-to-bottom" appear>
                    <h1 class="numbered-title">
                        <span aria-hidden="true" class="number">02</span>
                        <span>Meet your crew</span>
                    </h1>
                </transition>

                <div class="crew__main-container">

                    <transition name="text-to-bottom" appear>
                        <div class="crew__text-container">
                            <div class="crew__dot-indicators" aria-label="crew members list">

                                <Tabs
                                    :tabData="jsonData"
                                    :tabSelectedIndex="selectedCrewMemberIndex"
                                    tabType="crew"
                                    @update:tabSelectedIndex="updateSelectedIndex"
                                />
                                
                            </div>

                            <article class="crew__info"
                                     @touchstart="startTouch"
                                     @touchmove="handleTouch"
                                     @touchend="endTouch">

                                <h5 class="ff-serif">{{ selectedCrewMember.role }}</h5>

                                <p class="crew__info-name ff-serif text-light">{{ selectedCrewMember.name }}</p>

                                <p class="crew__info-bio ff-sans text-accent">{{ selectedCrewMember.bio }}</p>

                            </article>
                        </div>
                    </transition>

                    <div class="crew__image"
                         @touchstart="startTouch"
                         @touchmove="handleTouch"
                         @touchend="endTouch">
                        
                         <transition name="scale-up" appear>
                            <img :src="selectedImage" :alt="selectedCrewMember.name">
                        </transition>
                        
                    </div>

                </div>

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
    name: 'Crew',
    components: {
        Layout,
        Tabs
    },
    setup() {
        const store = useStore()
        const selectedCrewMemberIndex = ref(0)

        let startX = 0
        let diffX = 0

        // Dispatch the action to fetch JSON data
        const fetchData = async () => {
            await store.dispatch('fetchJsonData')
        };

        // Access the JSON data from the store using computed
        const jsonData = computed(() => store.state.jsonData)

        // Access the selected crew member based on the index
        const selectedCrewMember = computed(() => jsonData.value.crew[selectedCrewMemberIndex.value])

        // Obtain the image of the selected crew member
        const selectedImage = computed(() => {
            return require(`@/assets/img/crew/${selectedCrewMember.value.images.png}`)
        })

        // Function to select a destination when a button/tab is clicked
        const updateSelectedIndex = ( index ) => {
            selectedCrewMemberIndex.value = index
        }

        // Change tabs with keyboard arrows
        const handleKeyDown = ( event ) => {
            if ( event.key === 'ArrowLeft' ) {
                updateSelectedIndex(selectedCrewMemberIndex.value === 0 ? jsonData.value.crew.length - 1 : selectedCrewMemberIndex.value - 1)
                event.preventDefault()
            } else if ( event.key === 'ArrowRight' ) {
                updateSelectedIndex(selectedCrewMemberIndex.value === jsonData.value.crew.length - 1 ? 0 : selectedCrewMemberIndex.value + 1)
                event.preventDefault()
            }
        }

        // Touch/slide events for mobile
        const startTouch = ( event ) => {
            startX = event.touches[0].clientX
            diffX = 0
        }
        const handleTouch = ( event ) => {
            const currentX = event.touches[0].clientX
            diffX = currentX - startX
        }
        const endTouch = () => {
            if ( Math.abs(diffX) > 50 ) {
                if ( diffX > 0 ) {
                    updateSelectedIndex(selectedCrewMemberIndex.value === 0 ? jsonData.value.crew.length - 1 : selectedCrewMemberIndex.value - 1)
                } else {
                    updateSelectedIndex(selectedCrewMemberIndex.value === jsonData.value.crew.length - 1 ? 0 : selectedCrewMemberIndex.value + 1)
                }
            }
        }


        onBeforeMount(() => {
            document.body.className = 'crew-page'; // Set a class on the body tag based on the current page
        })

        onMounted(() => {
            window.addEventListener('keydown', handleKeyDown)
            fetchData();  // Call the fetchData function when the component is mounted
        })

        onBeforeUnmount(() => {
            window.removeEventListener('keydown', handleKeyDown)
        })


        return {
            jsonData,
            updateSelectedIndex,
            selectedCrewMember,
            selectedCrewMemberIndex,
            selectedImage,
            startTouch,
            handleTouch,
            endTouch
        };
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.crew {
    .numbered-title {
        margin-bottom: 2rem;
        @media (max-width: $breakpoint-max-mobile) { text-align: center; }
        @media (min-width: $breakpoint-min-tablet) { margin-bottom: 3rem; }
        @media (min-width: $breakpoint-min-desktop) { margin-bottom: 1.5rem; }
    }

    .crew__main-container {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: $breakpoint-min-desktop-big) {
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
        }

        .crew__text-container {
            display: flex;
            flex-direction: column;
            order: 2;

            @media (max-width: $breakpoint-max-desktop) { align-items: center; }

            @media (min-width: $breakpoint-min-desktop) { width: 60%; }

            .crew__dot-indicators {
                display: flex;
                margin-bottom: 2rem;
                order: 1;

                @media (min-width: $breakpoint-min-desktop) {
                    margin-bottom: 2.5rem;
                    order: 2;
                }

                @media (min-width: $breakpoint-min-desktop-big) { margin-bottom: 3rem; }
            }

            article.crew__info {
                order: 2;

                @media (min-width: $breakpoint-min-desktop) { order: 1; }
                @media (max-width: $breakpoint-max-desktop) { text-align: center; }

                h5 {
                    color: rgba($palette-color-light, 0.5);
                    line-height: normal;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                }

                p.crew__info-name {
                    font-size: 1.5rem;
                    line-height: normal;
                    margin-bottom: 1rem;
                    text-transform: uppercase;

                    @media (min-width: $breakpoint-min-desktop) { font-size: 2.5rem; }
                    @media (min-width: $breakpoint-min-desktop-big) { font-size: 3.5rem; }
                }

                p.crew__info-bio {
                    font-size: 0.938rem;
                    line-height: 1.563rem;
                    margin-bottom: 2rem;
                    max-width: 50ch;

                    @media (min-width: $breakpoint-min-desktop) {
                        font-size: 1rem;
                        line-height: 1.75rem;
                        margin-bottom: 2.5rem;
                    }

                    @media (min-width: $breakpoint-min-desktop) and (max-width: $breakpoint-max-desktop) { min-height: 7rem; }

                    @media (min-width: $breakpoint-min-desktop-big) {
                        font-size: 1.125rem;
                        line-height: 2rem;
                        margin-bottom: 7.5rem;
                        max-width: 45ch;
                    }
                }
            }
        }

        .crew__image {
            order: 1;

            @media (min-width: $breakpoint-min-desktop) { order: 2; }

            @media (max-width: $breakpoint-max-desktop) {
                border-bottom: 1px solid rgba($palette-color-light, 0.3);
                margin-bottom: 2rem;
            }

            @media (min-width: $breakpoint-min-desktop-big) {
                display: flex;
                justify-content: flex-end;
            }

            img {
                max-width: fit-content;

                @media (max-width: $breakpoint-max-desktop) {
                    height: 55vh;
                    margin: 0 auto;
                }

                @media (max-width: $breakpoint-max-tablet) {
                    height: 50vh;
                    max-height: 50vh;
                }

                @media (min-width: $breakpoint-min-desktop-big) { height: 62vh; }
            }
        }

    }
}

</style>