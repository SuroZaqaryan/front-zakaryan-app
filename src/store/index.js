import Vue from 'vue'
import Vuex from 'vuex'
import Category from "@/store/modules/Category";
import Search from "@/store/modules/Search"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Category,
        Search
    }
})