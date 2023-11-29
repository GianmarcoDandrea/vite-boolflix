<script>
import { store } from "../store";

export default {
        props: {
            details: Object,
        },

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

        <span class="title">Titolo: <br>{{ getName }}</span>
        <span class="original-title">Titolo Originale: <br>{{ getOriginalName }}</span>
        <span class="original-language">Lingua Originale:{{ getLanguage }}</span>
        <span class="vote">Voto: {{ getVoted }}</span>
    </div>
</template>
<style lang="scss" scoped>
    .card {
        padding: 1rem 0.5rem;
    }
</style>