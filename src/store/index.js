import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {

    },
    getters,
    plugins: [VuexAlong({
        local: {}
    })]
})