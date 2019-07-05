<template>
    <div class="container">
        <header class="alert alert-primary">
            <div class="store">[IMG] Store</div>
            <div class="basket">In Basket: <span> 123 </span></div>
        </header>
        <section>
            <div class="row">
                <div class="col col-sm-2 menu">
                    <ul class="list-group">
                        <router-link v-for="(item, index) in menuList"
                            :key="index"
                            :to="item.url"
                            tag="li"
                            class="list-group-item"
                            active-class="active">
                            <a>{{item.text}}</a>
                        </router-link>
                    </ul>
                </div>
                <div class="col col-sm-10">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters('menu', {
            menuList: 'items'
        })
    }
}
</script>

<style>
    header {
        margin: 15px;
        display: flex;
        justify-content: space-between;
    }
    .store {
        width: 150px;
        text-align: center;
        font-size: 24px;
    }
    .basket {
        width: 200px;
        text-align: center;
        font-size: 24px;
    }
    section {
         margin: 0 15px;
    }
    .list-group-item.active a{
        color: inherit;
    }
    .list-group-item a {
        text-decoration: none;
    }
</style>
