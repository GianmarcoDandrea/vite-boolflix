<script>
import { store } from "../store";
import LanguageFlag from 'vue-lang-code-flags';

export default {
        props: {
            details: Object,
        },

        components: { LanguageFlag},

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

        <div class="card-details position-absolute rounded-2">
            <!-- title -->
            <div class="title mb-1">
                <span class="fs-4 text-red">Titolo:</span>
                <br>
                <span>{{ getName }}</span>
            </div>

            <!-- original title -->
            <div class="original-title mb-1 ">
                <span class="fs-4 text-red">Titolo:</span>
                <br>
                <span>{{ getOriginalName }}</span>

            </div>

            <!-- language -->
            <!-- <div class="">
                <span class="fs-4">Lingua:</span>
                <LanguageFlag :iso="getLanguage" class="flag"/>
            </div> -->

            <!-- vote -->
            <div>
                <span class="fs-4 text-red">Voto: </span>
                <span v-for="vote in 5">
                    <i class="fa-solid fa-star" v-if="getVoted >= vote"></i>
                    <i class="fa-regular fa-star" v-else></i>
                </span>
            </div>

            <!-- plot -->
            <div class="overview">
                <span class="fs-4 text-red">Trama</span>
                <p>{{ details.overview }}</p>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

    .text-red {
        color: $primary-red;
    }
    .card {
        height: 100%;
        border: none;
        
        .poster {
        height: 100%;
        }
        .card-details{
            opacity: 0.9;
            display: none;
            padding: 1rem;
            color: white;
            background-color: black;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transition: all 1s;
            overflow-y: auto;
    
            .flag {
                margin-left: 0.5rem;
                width: 20px;
                height: 15px;
            }
        }

        &:hover {
            transition: all 1s;
            .card-details{
                display: block;
            }
            .poster {
                display: none;
            }
        }
    }
</style>