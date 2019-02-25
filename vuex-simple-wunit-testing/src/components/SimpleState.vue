<template>
  <div >
        <h3>Map State</h3>

        <p>from state: </p>
        <div class="state-1">  
           {{ $store.state.value_1 }}
        </div>

        <p>via computed: </p>
        <div class="state-2">          
            {{ value_2 }}
        </div>

        <p>via mapState: </p>
        <div class="state-3">  
            {{ value_3 }}
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SimpleState',
  created() {
      console.log('simple state created');
  },
  computed: {
    value_2 () {
      return this.$store.state.value_2;
    },

    ...mapState({
      value_3: state => state.value_3
    })
  }
}
</script>

<style scoped>

</style>
