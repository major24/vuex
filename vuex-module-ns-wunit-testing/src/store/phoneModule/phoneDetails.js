
export default {
    namespaced: true,
    state: {
        types: {
            mobile: {
                phoneNumber: '416-111'
            },

            home: {
                phoneNumber: '905-222'
            }
        }
    },
    mutations: {
        updateMobilePhone(state, payload) {
            console.log('in store mutating phone-mobile')
            // console.log(payload)
            // console.log(state)
            state.types.mobile.phoneNumber = payload.phoneNumber
        },
    }
}
