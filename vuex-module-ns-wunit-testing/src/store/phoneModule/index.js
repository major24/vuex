import Vue from 'vue'
import Vuex from 'vuex'

import phoneDetails from './phoneDetails'

Vue.use(Vuex)

async function createStore() {
    return new Vuex.Store({
        modules: {
            phoneDetails: phoneDetails
        }
    })
}

export default createStore;