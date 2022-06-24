import vue from 'vue';
import axios from 'axios';
const mixin = {
    created() {

    },
    methods: {
        Tester() {
            console.log("Hello");
        },
        getAllMovies() {
            axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}`

            ).then(res => {
                console.log(res.data)
            })
        },

    },
    data() {
        return {
            apiKey: 'd71113104c109ad83b0a4ce24235d2ca'
        }
    },

}

vue.mixin(mixin);