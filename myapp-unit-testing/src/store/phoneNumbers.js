import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Vue.use(Vuex)

const initState = {
    phoneDetails: {
      types: {
        mobile: {
          phoneNumber: ''
        },

        home: {
          phoneNumber: ''
        }
      }
    }

}

export default {
  namespaced: true,
  state: initState,
  actions,
  mutations,
  getters
}

//export default new Vuex.Store({
  //state: initState,
  //actions,
  //mutations
//})


// const initState = {
//   data: {
//     phoneDetails: {
//       mobile: {
//         phoneNumber: ''
//       },
//       home: {
//         phoneNumber: ''
//       }
//     }
//   }
// }


// const initState = {
//   phoneDetails: {
//     types: {
//       mobile: {
//         phoneNumber: ''
//       },

//       home: {
//         phoneNumber: ''
//       }
//     }
//   }

// }