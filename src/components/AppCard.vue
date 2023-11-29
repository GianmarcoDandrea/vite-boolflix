<script>
import { store } from "../store";
import LanguageFlag from 'vue-lang-code-flags';

export default {
        props: {
            details: Object,
        },

        components: { LanguageFlag },

        data() {
            return {
            store,
            }
        },

        computed: {
        getName() {
            return this.details.title ? this.details.title : this.details.name
        },
        getOriginalName() {
            return this.details.original_title ? this.details.original_title : this.details.original_name
        },
        getVoted() {
            return Math.ceil(this.details.vote_average / 2);
        },
        getLanguage() {
            return this.details.original_language;
        }
    }        
}
</script>

<template>
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w342${details.poster_path}`" class="rounded-2">
        <span class="title">Titolo: <br>{{ getName }}</span>
        <span class="original-title">Titolo Originale: <br>{{ getOriginalName }}</span>
        <div>
            <span>Lingua:</span>
            <br>
            <Language :iso="getLanguage" />

        </div>
        <div>

            <span>Voto: </span>
            <span v-for="vote in 5">
                <i class="fa-solid fa-star" v-if="getVoted >= vote"></i>
                <i class="fa-regular fa-star" v-else="getVoted = 0"></i>
            </span>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    .card {
        padding: 1rem 0.5rem;
    }
</style>