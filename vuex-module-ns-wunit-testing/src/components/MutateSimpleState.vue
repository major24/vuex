<template>
  <div >
    <h3>Mutate Simple State</h3>

    <button @click="mutateValue1">Mutate Value 1</button>

  </div>
</template>

<script>


export default {
  name: 'MutateSimpleState',
  created() {
      console.log('ui mutate simple state created');
  },
  methods: {
      mutateValue1 () {
          console.log('mutating value 1');
          this.$store.commit('updateValue1', 'value 100');
      }
  }
}
</script>

<style scoped>

</style>