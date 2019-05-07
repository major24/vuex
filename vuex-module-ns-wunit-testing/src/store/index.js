import Vue from 'vue'
import Vuex from 'vuex'

import phoneDetails from './phoneModule/phoneDetails'
import customerDetails from './customerModule/customerDetails'

Vue.use(Vuex)

async function createStore() {
    return new Vuex.Store({
        modules: {
            phoneDetails: phoneDetails,
            customerDetails: customerDetails
        }
    })
}

export default createStore;
