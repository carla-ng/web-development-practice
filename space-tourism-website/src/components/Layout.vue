<template>
    <div>
        <Header />
        <slot></slot>

        <!-- Can add a footer component here if needed -->
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
  