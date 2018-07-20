<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">BAB 1</router-link> |
      <router-link to="/bab2">BAB 2</router-link> |
      <router-link to="/bab3">BAB 3</router-link> |
      <router-link to="/bab4">BAB 4</router-link> |
      <router-link to="/bab5">BAB 5</router-link> |
      <router-link to="/bab6">BAB 6</router-link> |
      <router-link to="/bab7">BAB 7</router-link>
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
