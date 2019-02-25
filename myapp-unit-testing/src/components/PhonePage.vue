<template>
  <div class="phone" id="phone_templ">
    <div>
        <p>Phone Page</P>
        <span>store state phoneDetails: {{phoneDetails}}</span>
        <hr />
        <span>store state phoneDetails.data: {{phoneDetails.phoneDetails.types}}</span>
        <div>
            <input type="text" id="mobile"
                :value="phoneDetails.phoneDetails.types.mobile.phoneNumber" />
        </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'PhonePage',
  components: {

  },
  methods: 
    mapActions({ loadData: 'phoneDetails/LOAD_DATA'})
  ,
  created() {
      console.log('phone page created: calling load data');
       console.log(this.$store.state);
      // console.log('----')
      //console.log(this.loadData);
      this.loadData();
  },
//   computed: {
//       ...mapGetters({phoneDetails: 'phoneNumber/PHONE_DATA'}),
//   }
  computed:{
    ...mapState(['phoneDetails'])
  },
  //created() {
    // console.log('phone page created: calling fetch data');
    // this.$store.dispatch('fetchData')
  //}
}
</script>
