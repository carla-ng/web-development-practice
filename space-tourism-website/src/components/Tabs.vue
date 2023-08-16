<template>

    <div :class="['tabs', tabType]">

        <button
            v-for="(destination, index) in tabData.destinations"
            :key="index"
            :aria-selected="index === tabSelectedIndex"
            :aria-controls="`${destination.name.replace(/\s+/g, '-').toLowerCase()}-tab`"
            class="ff-sans-cond text-accent letter-spacing-02 uppercase"
            @click="selectDestination(index)"
        >

            <span v-if="tabType === 'destination'">
                {{ destination.name }}
            </span>
            
        </button>

    </div>

</template>


<script>
import { reactive, toRefs } from 'vue';

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

        const selectDestination = ( index ) => {
            emit('update:tabSelectedIndex', index)
        }


        return {
            ...state,
            selectDestination,
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
    &.destination {
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
            font-size: 0.875rem;
            font-weight: 400;
            margin: 0 1.1rem;
            padding: 0.7rem 0;
            letter-spacing: 0.148rem;
            line-height: normal;

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
}

</style>