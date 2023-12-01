import {reactive} from "vue"

export const store = reactive ({
    filmList:[],
    seriesList:[],
    popularFilmList:[],
    popularSeriesList:[],
    preview:[],
    searchText:"",
    loading: false,
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "80af501ae1f07a940be7e96db3c882a1"
});