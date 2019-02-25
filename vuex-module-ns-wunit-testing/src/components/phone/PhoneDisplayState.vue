<template>
  <div >
        <h3>Map Phone Module State</h3>

        <p>from state details: </p>
        <div class="state">  
           {{ $store.state }}
        </div>

        <p></p>
        <div>
          PhoneNumber mobile: 
          <span id="phoneNumber">{{ $store.state.phoneDetails.types.mobile.phoneNumber}}</span>
        </div>
        <hr />

        <p>via computed mobile: </p>
        <div class="computed-mobile">          
          {{ mobileNumber }}
        </div>

        <p>via mapState home: </p>
        <div class="map-state-home">  
          {{ homeNumber }}
        </div>


  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PhoneDisplayState',
  created() {
      console.log('phone module state created');
  },
  computed: {
    mobileNumber () {
      return this.$store.state.phoneDetails.types.mobile.phoneNumber;
    },

    ...mapState({
      homeNumber: state => state.phoneDetails.types.home.phoneNumber
    })
  }
}
</script>

<style scoped>

</style>
