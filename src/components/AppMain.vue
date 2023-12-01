<script>
import axios from "axios";
import AppPreview from "./AppPreview.vue";
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import { store } from "../store";
export default {
    data() {
        return{
            store,
        }
    },
    created() {
            this.store.loading = true;
                axios
                .get(this.store.baseUrl + "movie/popular", {
                    params: {
                        api_key: this.store.apiKey,
                        query: store.searchText,
                        language: "it-IT",
                    }
                })
                .then((resp) => {
                    
                    this.store.popularFilmList = [];
                    this.store.popularFilmList = resp.data.results;
                    this.store.loading = false;
                })
    
                axios
                .get(this.store.baseUrl + "tv/popular", {
                    params: {
                        api_key: this.store.apiKey,
                        query: store.searchText,
                        language: "it-IT",
                    }
                })
                .then((resp2) => {
                    this.store.popularSeriesList = [];
                    this.store.popularSeriesList = resp2.data.results;
                    this.store.loading = false;
                })
        },

    methods: {
        changePreview(elem) {
            this.store.preview = elem;
        }
    },

    components : {AppCard, AppLoader, AppPreview},
}
</script>


<template>
    <main>
        <div class="container" v-if="store.loading">
            <AppLoader />
        </div>
        <div v-else>
            <section v-if="store.filmList.length === 0 && store.seriesList.length === 0 ">
                <AppPreview />

                <div class="container pt-4">
                    <h4 class="text-red">FILM POPOLARI</h4>
                    <div class="row row-cols-5 flex-nowrap rounded-3 popular-list">
                        <div class="col" v-for="film in store.popularFilmList">

                            <AppCard :details="film" @click="changePreview(film)"/>

                        </div>
                    </div>
                </div>

                <!-- Container Series Popular -->
                <div class="container pt-4">
                    <h4 class="text-red">SERIE TV POPOLARI</h4>
                    <div class="row row-cols-5 flex-nowrap rounded-3 popular-list">
                        <div class="col" v-for="serie in store.popularSeriesList">

                            <AppCard :details="serie" @click="changePreview(serie)"/>

                        </div>
                    </div>
                </div>


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
    padding-bottom: 2rem;
    .text-red {
        font-size: 3rem;
    }
    .popular-list {
        overflow-x: auto;
    }
    .row {
        align-items: stretch;
        padding-bottom: 0.5rem;
    }

}

    
</style>