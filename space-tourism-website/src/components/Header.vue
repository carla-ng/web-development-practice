<template>

    <header class="header">
        <div class="header__logo"></div>
        <nav class="header__nav">
            <ul>
                <li class="active">
                    <router-link to="/" class="text-light letter-spacing-02 uppercase">
                        <span class="number">00</span>
                        <span>Home</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/destination" class="text-light letter-spacing-02 uppercase">
                        <span class="number">01</span>
                        <span>Destination</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/crew" class="text-light letter-spacing-02 uppercase">
                        <span class="number">02</span>
                        <span>Crew</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/technology" class="text-light letter-spacing-02 uppercase">
                        <span class="number">03</span>
                        <span>Technology</span>
                    </router-link>
                </li>
            </ul>
        </nav>
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
@import '@/assets/styles/global.scss';

.header {
    .header__nav {
        ul {
            display: flex;
            gap: 8rem;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                a {
                    text-decoration: none;
                
                    & > .number {
                        font-weight: 700;
                        margin-right: 0.5em;
                    }
                }
            }
            
            & > * {
                border-bottom: 0.2rem solid $palette-color-light;
                cursor: pointer;
                padding: 1rem 0;

                &:hover, &:focus { border-color: rgba($palette-color-light, 0.25); }
                &.active, &[aria-selected="true"] { border-color: rgba($palette-color-light, 1); }
            }
        }
    }
}
</style>
