<template>

    <Layout>

        <div class="home">
            Home Page

            <div v-if="jsonData">
                <!-- <h1>{{ jsonData.destinations[0].name }}</h1> -->

                So, you want to travel to
                Space
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience! 

                Explore
            </div>
            <div v-else>
                Loading...
            </div>
        </div>
        
    </Layout>

</template>


<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

// @ is an alias to /src
import Layout from '@/components/Layout.vue';

export default {
    name: 'Home',
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


        return {
            jsonData
        };
    }
}
</script>


<style lang="scss" scoped>
.home {

}
</style>
