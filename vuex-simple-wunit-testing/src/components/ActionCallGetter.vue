<template>
  <div >
    <h3>Action call getters</h3>
    <button @click="callAction()" id="btn2">Call an action to test context</button>
    <button @click="callAction2()" id="btn2">Call an action def parameters</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ActionCallGetter',
  created() {
      console.log('state created: ', this.$store);
  },
  methods: {
    callAction() {
      this.$store.dispatch('testAction')
    },
    callAction2() {
      this.$store.dispatch('testAction2')
    }
  }
}
</script>

<style scoped>

</style>
