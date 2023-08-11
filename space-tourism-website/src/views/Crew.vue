<template>

    <Layout>

        <main id="main" class="crew page-container">
            <div v-if="jsonData">
                <h1 class="numbered-title">
                    <span aria-hidden="true" class="number">02</span>
                    <span>Meet your crew</span>
                </h1>

                <div class="crew__main-container">

                    <div class="crew__text-container">
                        <div class="crew__dot-indicators" aria-label="crew members list">
                            <button
                                v-for="(member, index) in jsonData.crew"
                                :key="index"
                                :aria-selected="index === selectedCrewMemberIndex"
                                :aria-controls="`${member.role.replace(/\s+/g, '-').toLowerCase()}-tab`"
                                @click="selectCrewMember(index)"
                            >
                                <span class="sr-only">{{ member.role }}</span>                                
                            </button>
                        </div>

                        <article class="crew__info">
                            <h2>{{ selectedCrewMember.role }}</h2>

                            <p class="crew__info-name">{{ selectedCrewMember.name }}</p>

                            <p class="crew__info-bio">{{ selectedCrewMember.bio }}</p>
                        </article>
                    </div>

                    <div class="crew__image">
                        <img :src="selectedImage" :alt="selectedCrewMember.name">
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

export default {
    name: 'Crew',
    components: {
        Layout
    },
    setup() {
        const store = useStore()
        const selectedCrewMemberIndex = ref(0)

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
        const selectCrewMember = (index) => {
            selectedCrewMemberIndex.value = index
        }

        // Change tabs with keyboard arrows
        const handleKeyDown = (event) => {
            if ( event.key === 'ArrowLeft' ) {
                selectCrewMember(selectedCrewMemberIndex.value === 0 ? jsonData.value.crew.length - 1 : selectedCrewMemberIndex.value - 1)
                event.preventDefault()
            } else if ( event.key === 'ArrowRight' ) {
                selectCrewMember(selectedCrewMemberIndex.value === jsonData.value.crew.length - 1 ? 0 : selectedCrewMemberIndex.value + 1)
                event.preventDefault()
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
            selectCrewMember,
            selectedCrewMember,
            selectedCrewMemberIndex,
            selectedImage,
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
        //@media (min-width: $breakpoint-min-desktop) { margin-bottom: 0; }
        @media (min-width: $breakpoint-min-desktop) { margin-bottom: 1.5rem; }
    }

    .crew__main-container {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: $breakpoint-min-desktop) {
            align-items: flex-end;
            flex-direction: row;
            //margin-top: -2.5rem;
        }

        .crew__text-container {
            display: flex;
            flex-direction: column;
            order: 2;

            @media (max-width: $breakpoint-max-tablet) { align-items: center; }

            .crew__dot-indicators {
                display: flex;
                margin-bottom: 2rem;
                order: 1;

                @media (min-width: $breakpoint-min-tablet) {
                    margin-bottom: 2.5rem;
                    order: 2;
                }

                @media (min-width: $breakpoint-min-desktop) { margin-bottom: 3rem; }

                & > button {
                    aspect-ratio: 1;
                    background-color: rgba($palette-color-light, 0.25);
                    border-radius: 50%;
                    border: 0;
                    cursor: pointer;
                    height: 0.75rem;
                    margin: 0 0.5rem;
                    width: 0.75rem;

                    @media (min-width: $breakpoint-min-desktop) {
                        height: 0.95rem;
                        margin: 0 0.7rem;
                        width: 0.95rem;
                    }

                    &:hover, &:focus { background-color: rgba($palette-color-light, 0.25); }
                    &[aria-selected="true"] { background-color: rgba($palette-color-light, 1); }
                }
            }

            article.crew__info {
                order: 2;

                @media (min-width: $breakpoint-min-tablet) { order: 1; }
                @media (max-width: $breakpoint-max-tablet) { text-align: center; }

                h2 {
                    color: rgba($palette-color-light, 0.5);
                    font-family: $font-family-serif;
                    font-size: 16px;
                    line-height: normal;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;

                    @media (min-width: $breakpoint-min-tablet) { font-size: 24px; }
                    @media (min-width: $breakpoint-min-desktop) { font-size: 32px; }
                }

                p.crew__info-name {
                    color: $palette-color-light;
                    font-family: $font-family-serif;
                    font-size: 24px;
                    line-height: normal;
                    margin-bottom: 1rem;
                    text-transform: uppercase;
                    white-space: nowrap;

                    @media (min-width: $breakpoint-min-tablet) { font-size: 40px; }
                    @media (min-width: $breakpoint-min-desktop) { font-size: 56px; }
                }

                p.crew__info-bio {
                    color: $palette-color-accent;
                    font-family: $font-family-sans;
                    font-size: 15px;
                    line-height: 25px;
                    margin-bottom: 2rem;
                    max-width: 50ch;

                    @media (min-width: $breakpoint-min-tablet) {
                        font-size: 1rem;
                        line-height: 28px;
                        margin-bottom: 2.5rem;
                    }

                    @media (min-width: $breakpoint-min-desktop) {
                        font-size: 18px;
                        line-height: 2rem;
                        margin-bottom: 7.5rem;
                        max-width: 45ch;
                    }
                }
            }
        }

        .crew__image {
            order: 1;

            @media (min-width: $breakpoint-min-tablet) { order: 2; }

            @media (max-width: $breakpoint-max-tablet) {
                border-bottom: 1px solid rgba($palette-color-light, 0.3);
                margin-bottom: 2rem;
            }

            @media (min-width: $breakpoint-min-desktop) {
                display: flex;
                justify-content: flex-end;
            }

            img {
                max-width: 65%;

                @media (min-width: $breakpoint-min-tablet) { max-width: 75%; }
                @media (max-width: $breakpoint-max-tablet) { margin: 0 auto; }
                @media (min-width: $breakpoint-min-desktop) { max-width: 85%; }
            }
        }

    }
}

</style>