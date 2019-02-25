<template>
  <div >
    <h3>Action Simple State</h3>

    <button @click="getData" id="btn1">Do an action - getData</button>
    <button @click="setStateByParamValue(val)" id="btn2">Do an action - getDataById</button>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ActionSimpleState',
  data() {
    return {
      val: 'new value 22'
    }
  },

  created() {
      // console.log('action simple state created');
  },

  methods: {
      getData () {
          console.log('ui do action getData');
          this.$store.dispatch('getData');
      },
      ...mapActions([
        'setStateByParamValue'
        ]),
  },

  watch: {
    'val': (val, oldVal) => {
      console.log(`in action ui watchs val change val:${val} - oldVal:${oldVal}`);
      // this.$store.dispatch('getData');
    }
  },
}

</script>

<style scoped>

</style>