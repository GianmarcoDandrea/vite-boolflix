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
            .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: '80af501ae1f07a940be7e96db3c882a1',
                    query: store.searchText,
                    language: "it-IT",
                }
            })
            .then((resp) => {
                
                store.filmList = [];
                store.filmList = resp.data.results;
                console.log(resp.data.results);
                this.store.loading = false;
            })

            axios
            .get("https://api.themoviedb.org/3/search/tv", {
                params: {
                    api_key: '80af501ae1f07a940be7e96db3c882a1',
                    query: store.searchText,
                    language: "it-IT",
                }
            })
            .then((resp2) => {
                store.seriesList = [];
                store.seriesList = resp2.data.results;
                console.log(resp2.data.results);
                this.store.loading = false;
            })

        }   
    }


}


</script>


<template>

    <div class="container d-flex justify-content-between align-items-center py-2">
        <h1>BOOLFLIX</h1>
        <AppSearch @performSearch="searchName"/>
    </div>
</template>

<style lang="scss" scoped>
    
</style>