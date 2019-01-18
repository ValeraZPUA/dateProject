<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start page</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/userspag">Users</router-link>
      |
      <router-link to="/newuser">New User</router-link>
      |
      <router-link to="/updateuser">Update User</router-link>
      |
      <router-link to="/deleteuser">Delete User</router-link>
      |
      <router-link to="/uploadphoto">Upload Photo</router-link>
      |
      <router-link to="/deletephoto">Delete Photo</router-link>
      |
      <router-link to="/updatephoto">Update Photo</router-link>
      |
      <router-link to="/photos">Photos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
