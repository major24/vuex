<template>
  <div >

    <h3>Getter from store</h3>
    <p>from getter: </p>
    <div class="map-getter-1">
        {{ getter_value_1 }}
    </div>

    <p>via computed: </p>
    <div class="map-getter-2">
        {{ loc_getter_2 }}
    </div>

  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
import { mapGetters } from 'vuex'

export default {
  name: 'GetterSimpleState',
  created () {
    console.log('simple getter page created')
  },
  computed: {
    ...mapGetters({
      getter_value_1: 'getter_value_1',
      loc_getter_2: 'getter_value_2'
    })
  }
}
</script>

<style scoped>

</style>
