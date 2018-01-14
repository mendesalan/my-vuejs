<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h1 v-if="isLoading">is loading...... </h1>
    <button @click="cliclmeh">CLICK MEH</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'    
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getCount'
    ]),
    isLoading () {
      return this.$store.state.toggle.toggle
    }
  },
  methods: {
    ...mapActions([
        'toggle'
      ]),
    cliclmeh() {
      // this.$store.commit('toggle')
      // this.$store.commit('increment', Object)
      // this.$store.commit('toggle') // call mutation sync
      // this.$store.dispatch('toggle') // call actions async
      this.$store.commit('increment', 2)
      this.$store.getters.getCount
    },
    count () {
      return store.state.count
    }  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
