<template>

    <Layout>

        <main id="main" class="destination page-container">
            <div v-if="jsonData">
                <h1 class="numbered-title">
                    <span aria-hidden="true">01</span>
                    <span>Pick your destination</span>
                </h1>

                <div class="destination__main-container">
                    <div class="destination__first-container">
                        <!-- <img :src="jsonData.destinations[0].images.png" alt="the moon"> -->
                    </div>

                    <div class="destination__second-container">
                        <div class="destination__tabs">
                            <button aria-selected="true" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[0].name }}</button>
                            <button aria-selected="false" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[1].name }}</button>
                            <button aria-selected="false" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[2].name }}</button>
                            <button aria-selected="false" class="ff-sans-cond text-accent bg-dark letter-spacing-02 uppercase">{{ jsonData.destinations[3].name }}</button>
                        </div>

                        <article>
                            <h2>{{ jsonData.destinations[0].name }}</h2>

                            <p>{{ jsonData.destinations[0].description }}</p>

                            <h3>Avg. distance</h3>
                            <p>{{ jsonData.destinations[0].distance }}</p>

                            <h3>Est. travel time</h3>
                            <p>{{ jsonData.destinations[0].travel }}</p>
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

</style>
