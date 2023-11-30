<script>
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import { store } from "../store";
export default {
    data() {
        return{
            store,
        }
    },
    components : {AppCard, AppLoader},
}
</script>


<template>
    <main>
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
                    <h2 class="text-center text-red ">Film</h2>
                    <div class="row row-cols-5 g-3">
                        <div class="col " v-for="film in store.filmList">
                            <AppCard :details="film" />
                        </div>
                    </div>
                </section>
    
                <!-- TV Series Container -->
                <section v-show="store.seriesList.length > 0">
                    <h2 class="text-center text-red">Serie TV</h2>
                    <div class="row row-cols-5 g-3">
                        <div class="col" v-for="serie in store.seriesList">
                            <AppCard :details="serie" />
                        </div>
                    </div>
    
                </section>
    
            </section>
    
    
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

main {
    background-color: $main-bg-color;
    min-height: $main-height;
    .text-red {
        font-size: 3rem;
    }
    .row {
        align-items: stretch;
        padding-bottom: 2rem;
    }

}

    
</style>