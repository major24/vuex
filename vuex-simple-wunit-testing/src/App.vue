<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/simple-state">Simpe State</router-link> |
      <router-link to="/mutate-simple-state">Mutate Simple State</router-link> |
      <router-link to="/action-simple-state">Action Simple State</router-link> |
      <router-link to="/getter-simple-state">Getter Simple State</router-link> |
      <router-link to="/action-call-getter">Action Call Getter</router-link> |
      <br />
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
