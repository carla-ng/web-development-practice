<template>
    <div>
        <Header />
        <slot></slot>
        
    </div>
</template>


<script>
import Header from '@/components/Header.vue'

export default {
    components: {
        Header,
    },
};
</script>
  