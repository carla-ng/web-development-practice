<template>

    <header class="header">
        <div class="header__logo"></div>
        <ul class="header__nav">
            <li>
                <router-link to="/">
                    <span>01</span>
                    <span>Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <span>02</span>
                    <span>About</span>
                </router-link>
            </li>
        </ul>
    </header>

</template>


<script>
export default {
    name: 'Header',

    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
.header {

}
</style>
