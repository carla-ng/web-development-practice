import { createStore } from 'vuex';

const store = createStore({
    strict: true,  // enable strict mode

    state: {
        jsonData: null,
    },

    mutations: {
        setJsonData(state, data) {
            state.jsonData = data;
        },
    },

    actions: {
        async fetchJsonData({ commit }) {
            try {
                const response = await fetch('/json/data.json')
                const data = await response.json()

                commit('setJsonData', data)
            } catch (error) {
                console.error('Error fetching JSON data:', error)
            }
        },
    },
});

export default store;
