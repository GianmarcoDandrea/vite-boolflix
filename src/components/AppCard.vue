<script>
import { store } from "../store";
import LanguageFlag from 'vue-lang-code-flags';
import { MDBIcon } from 'mdb-vue-ui-kit';

export default {
        props: {
            details: Object,
        },

        components: { LanguageFlag, MDBIcon },

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
    <div class="card position-relative">
        <img src="../assets/img/Poster_not_available.jpg" alt="poster not avaible" v-if="details.poster_path === null">
        <img :src="`https://image.tmdb.org/t/p/w342${details.poster_path}`" class="poster rounded-2" v-else>

        <div class="card-details position-absolute">
            <div class="title">
                <span>Titolo:</span>
                <p>{{ getName }}</p>
            </div>
            <div class="original-title">
                <span>Titolo:</span>
                <p>{{ getOriginalName }}</p>

            </div>
            <div>
                <span>Lingua:</span>
                <LanguageFlag :iso="getLanguage" class="flag"/>
                <!-- <MDBIcon flag="getLanguage" /> -->
    
            </div>
            <div>
                <span>Voto: </span>
                <span v-for="vote in 5">
                    <i class="fa-solid fa-star" v-if="getVoted >= vote"></i>
                    <i class="fa-regular fa-star" v-else></i>
                </span>
    
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .card {
        height: 100%;
        border: none;
        .poster {
        height: 100%;
        }
        .card-details{
            opacity: 0;
            padding: 1rem;
            color: white;
            background-color: black;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transition: all 1s;
            overflow-y: auto;
            border-radius: .5rem;
    
            &:hover {
                opacity: 0.9;
                transition: all 1s;
            }
    
            .flag {
                margin-left: 1rem;
            }
        }
    }

</style>