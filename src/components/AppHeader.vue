<script>
import axios from "axios";
import { store } from "../store";
import AppSearch from "./AppSearch.vue";

export default {
    components: {AppSearch},
    data() {
        return{
            store,
        }
    },

    methods : {
        searchName() {
            this.store.loading = true;
            axios
            .get(this.store.baseUrl + "search/movie", {
                params: {
                    api_key: this.store.apiKey,
                    query: store.searchText,
                    language: "it-IT",
                }
            })
            .then((resp) => {
                
                store.filmList = [];
                store.filmList = resp.data.results;
                this.store.loading = false;
            })

            axios
            .get(this.store.baseUrl + "search/movie", {
                params: {
                    api_key: this.store.apiKey,
                    query: store.searchText,
                    language: "it-IT",
                }
            })
            .then((resp2) => {
                store.seriesList = [];
                store.seriesList = resp2.data.results;
                this.store.loading = false;
            })

        }   
    }


}


</script>


<template>
    <header class="d-flex align-items-center">
        <div class="container d-flex justify-content-between align-items-center">
            <h2 class="logo text-red fw-bold">BOOLFLIX</h2>
            <AppSearch @performSearch="searchName"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

header {
    height: $header-height;
    background-color: $header-bg-color;
    .logo {
        font-size: 4rem;
    }
}

    
</style>