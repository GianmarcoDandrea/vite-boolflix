<script>
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import AppFilter from "./AppFilter.vue";
import { store } from "../store";
export default {
    data() {
        return{
            store,
        }
    },
    components : {AppCard, AppLoader, AppFilter},
}
</script>


<template>
    <div class="container" v-if="store.loading">
        <AppLoader />
    </div>
    <div class="container" v-else>
        <section v-if="store.filmList.length === 0 && store.seriesList.length === 0 ">
            Cerca i tuoi film e le tue serie preferite
        </section>

        <section v-else>
            
            <!-- Film Container -->
            <section v-show="store.filmList.length > 0">
                <h2 class="text-center text-danger">Film</h2>
                <div class="row row-cols-5 g-3">
                    <div class="col " v-for="film in store.filmList">
                        <AppCard :details="film" />
                    </div>
                </div>
            </section>

            <!-- TV Series Container -->
            <section v-show="store.seriesList.length > 0">
                <h2 class="text-center text-danger">Serie TV</h2>
                <div class="row row-cols-5 g-3 ">
                    <div class="col" v-for="serie in store.seriesList">
                        <AppCard :details="serie" />
                    </div>
                </div>

            </section>

        </section>


    </div>
</template>

<style lang="scss" scoped>
.row {
    align-items: stretch;
}

    
</style>