<template>
  <div >
        <h3>Map Phone Module Mutate State</h3>

        <button @click="mutateMobileNumber">Mutate Mobile Number</button>
        <hr />
        
        <p></p>
        <div>
            debug:
           {{ $store.state }}
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PhoneMutateState',
  created() {
      console.log('phone module mutate state created');
  },
    methods: {
      mutateMobileNumber () {
          console.log('mutating mobile number');
          // ENSURE to add phoneDetails (module name)
          this.$store.commit('phoneDetails/updateMobilePhone', {phoneNumber: '999-000'});
      }
  }
}
</script>

<style scoped>

</style>
