
export default {
  namespaced: true,
  state: {
    customer: {
      firstName: 'John',
      lastName: 'Candy',
      address: {
        street: '123 King Street',
        zipCode: '1234567'
      }
    }
  },
  mutations: {
    updateName(state, payload) {
      console.log('in store mutating customer name')
      // console.log(payload)
      // console.log(state)
      state.customer.firstName = payload.firstName
      state.customer.lastName = payload.lastName
    },
  }
}
