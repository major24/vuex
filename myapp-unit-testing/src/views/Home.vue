<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span>store data: {{data}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(['data'])
  },
  created() {
    console.log('created: calling fetch data');
    this.$store.dispatch('fetchData')
  }
}
</script>
