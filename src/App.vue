<template>
  <section class="container-fluid welcomelogo">
    <div class="row">
      <div class="containerApp col-lg-12">
        <img src="./assets/logo1.png" class="image" />
      </div>
    </div>
  </section>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style>
.containerApp {
  padding-top: 20px;
  padding-bottom: 20px;
}
.image {
  width: 100px;
  height: 100px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.welcomelogo {
  background-color: #ff9408;
}

@import '~bootstrap/dist/css/bootstrap.css';
</style>
