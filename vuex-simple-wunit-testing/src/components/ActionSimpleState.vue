<template>
  <div >
    <h3>Action Simple State</h3>

    <button @click="getData" id="btn1">Do an action - getData</button>
    <button @click="setStateByParamValue(val)" id="btn2">setStateByParamValue - mapActions</button>
    <button @click="callActionWithMultiValues({ph: '416', phtype: 'mobile', 'getterValue': getter_value_1})" id="btn3">
      callActionWithMultiValues-mapActions
    </button>

    <button @click="callActionMapToDiffMethodName({ph: '905', phtype: 'home', 'getterValue': getter_value_1})" id="btn4">
      callActionMapToDiffMethodName-mapActions
    </button>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      getter_value_1: 'getter_value_1',
      loc_getter_2: 'getter_value_2'
    })
  },

  methods: {
      getData () {
          console.log('ui do action getData');
          this.$store.dispatch('getData');
      },
      ...mapActions([
        'setStateByParamValue',
        'callActionWithMultiValues'
        ]),
      ...mapActions({
        callActionMapToDiffMethodName: 'callActionWithMultiValues'
      })
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