<script>
import { store } from '../store.js';
    
export default {
    data() {
        return {
            store,
        }
    },
    created() {

        this.store.preview = store.popularFilmList[0]
        console.log(this.store.preview);
    },

    methods: {
        substringOverviww(overview) {
            let preview;
            if (overview.length > 200) {
                preview = overview.substr(0, 200) + '...';
            } else {
                preview = overview;
            }               

            return preview;
        }
    },


    computed: {
        getName() {
            return this.store.preview.title ?? this.store.preview.name
        },
        getVoted() {
            return Math.ceil(this.store.preview.vote_average / 2);
        },
        getOverview () {
            return this.store.preview.overview
        },
        getBackground() {
            console.log(this.store);
            return this.store.preview.backdrop_path 
        }
    },
}
    
    
</script>
<template>

    <section class="poster" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${getBackground}` }">

        <div class="details p-5 ">

            <div class="row row-cols-2">
                <div class="col">
                    <div>
                        <h1 class="title">{{ getName }}</h1>
                    </div>

                    <div class="overview">
                        <p v-if="store.preview.overview !== ''">{{ substringOverviww(getOverview) }}</p>
                    </div>

                    <div class="vote">
                        <span v-for="vote in 5">
                            <i class="fa-solid fa-star" v-if="getVoted >= vote"></i>
                            <i class="fa-regular fa-star" v-else></i>
                        </span>
                    </div>

                    <div class="button-section my-3">
                        <span>
                            <a :href="`https://www.google.com/search?q=streaming%20${getName}`">
                                <button class="btn rounded-5">
                                    <i class="fa-solid fa-play"></i>
                                    Guarda ora
                                </button>
                            </a>
                        </span>

                        <span class="mx-3">
                            <a :href="`https://www.google.com/search?q=trailer%20${getName}`">
                                <button class="btn rounded-5 ml-5">
                                    <i class="fa-solid fa-play"></i>
                                    Trailer
                                </button>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>




<style lang="scss" scoped>
@use "../style/partials/variables" as *;
    .poster {
        min-height: 70vh;
        width: 100%;
        background-position: cover;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 10rem;
    }
    .details{
        .title {
            font-size: 3rem;
        }
        .overview {
            font-size: 1.25rem;
        }
        .vote {
            font-size: 1.25rem;
        }
        .row {
            font-size: 1.25rem;
            color: white;
        }

        .button-section {
            font-size: 1.25rem;

            button {
                background-color: $primary-red;
                color: white;
                padding: 0.5rem 1rem;
            }
        }
    }

</style>