<template>

    <div :class="['tabs', tabType]">

        <button
            v-for="(current, index) in tabItems"
            :key="index"
            :aria-selected="index === tabSelectedIndex"
            :aria-controls="`${current[tabInfo].replace(/\s+/g, '-').toLowerCase()}-tab`"
            @click="selectTab(index)"
        >

            <span      v-if="tabType === 'destinations'"> {{ current.name }} </span>
            <span v-else-if="tabType === 'crew'" class="sr-only"> {{ current.role }} </span>
            <span v-else-if="tabType === 'technology'"> {{ index + 1 }} </span>
            
        </button>

    </div>

</template>


<script>
import { computed, reactive, toRefs } from 'vue';

export default {
    name: 'Tabs',

    props: {
        tabData: {
            type: Object,
            required: true,
        },
        tabSelectedIndex: {
            type: Number,
            required: true,
        },
        tabType: {
            type: String,
            required: true,
        },
    },

    emits: ['update:tabSelectedIndex'], // Define the custom event

    setup( props, { emit } ) {

        const state = reactive(toRefs(props))


        // Select current tab
        const selectTab = ( index ) => {
            emit('update:tabSelectedIndex', index)
        }


        // Assign to tabItems the data that needs to be added to the tabs
        const tabItems = computed(() => {
            if ( state.tabType === 'destinations' ) {
                return state.tabData.destinations

            } else if ( state.tabType === 'crew' ) {
                return state.tabData.crew

            } else if ( state.tabType === 'technology' ) {
                return state.tabData.technology

            } else {
                return state.tabData
            }
        })


        // Assign to tabInfo the info that needs to be added to aria-controls
        const tabInfo = computed(() => {
            if ( state.tabType === 'crew' ) {
                return 'role'

            } else {
                return 'name'
            }
        })


        return {
            ...state,
            tabInfo,
            tabItems,
            selectTab,
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.tabs {

   /*************************\
    *    Destination Tabs   *
    *************************/
    &.destinations {
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
            font-family: $font-family-sans-cond;
            font-size: 0.875rem;
            font-weight: 400;
            margin: 0 1.1rem;
            padding: 0.7rem 0;
            letter-spacing: 0.148rem;
            line-height: normal;
            text-transform: uppercase;

            &:first-child { margin-left: 0; }
            &:last-child { margin-right: 0; }

            &:hover, &:focus { border-color: rgba($palette-color-light, 0.5); }

            &.active, &[aria-selected="true"] {
                border-color: rgba($palette-color-light, 1); 
                color: rgba($palette-color-light, 1);
            }

            @media (min-width: $breakpoint-min-tablet) {
                font-size: 1rem;
                letter-spacing: 0.169rem;
            }
        }     
    }


    /*************************\
     *       Crew Tabs       *
     *************************/
    &.crew {
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


    /*************************\
     *    Technology Tabs    *
     *************************/
    &.technology {
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
            font-size: 1rem;
            height: 2.5rem;
            text-align: center;
            width: 2.5rem;

            &.active, &[aria-selected="true"] {
                background-color: $palette-color-light;
                color: $palette-color-dark;
            }

            @media (min-width: $breakpoint-min-tablet) {
                font-size: 1.5rem;
                height: 3.75rem;
                width: 3.75rem;
            }

            @media (max-width: $breakpoint-max-tablet) { margin-inline: 0.5rem;}

            @media (min-width: $breakpoint-min-desktop) {
                font-size: 2rem;
                height: 5rem;
                margin: 1rem 0;
                width: 5rem;

                &:first-child { margin-top: 0; }
                &:last-child { margin-bottom: 0; }

                &:hover:not([aria-selected="true"]) {
                    background-color: rgba($palette-color-light, 0.5);
                    color: $palette-color-dark;
                }
            }
        }
    }
}

</style>