import Vue from 'vue'
import Vuex from 'vuex'
import Category from "@/store/modules/Category";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Category
    }
})