<template>
  <div >
        <h3>Map Customer Module State</h3>

        <p>from state details: </p>
        <div class="state">
           {{ $store.state.customerDetails }}
        </div>

        <p>Mapped state (customer)</p>
        <p>{{customer}}</p>
        <p><button @click="mutateName">Update Name</button></p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CustomerDisplayState',
  created() {
      console.log('customer module state created');
  },
  computed: {
    // mobileNumber () {
    //   return this.$store.state.phoneDetails.types.mobile.phoneNumber;
    // },

    ...mapState({
      customer: state => state.customerDetails
    })
  },
  methods: {
    mutateName () {
    console.log('mutating customer name');
    // ENSURE to add phoneDetails (module name)
    this.$store.commit('customerDetails/updateName', { firstName: 'John2', lastName: 'Candy2' });
}
  }
}
</script>

<style scoped>

</style>
