<template>
  <section class="container-fluid welcomelogo">
    <div class="banner">
      <img src="./assets/Hans_Logo.png" class="imagelogo" />
      <div class="logotextbox animate__animated animate__fadeInUp">
        <span class="brandname">HANS SOLUTION</span>
        <div>
          <span class="brandname2">ACOUSTIC CALCULATOR</span>
        </div>
      </div>
      <div class="animate__animated animate__fadeInUp">
        <button class="button-10" role="button" @click="scrollToFirstSection">
          Get Started
        </button>
      </div>
    </div>
  </section>
  <router-view />
</template>
<script>
export default {
  inject: ['GStore'],
  methods: {
    scrollToFirstSection() {
      const aboutSection = document.querySelector('#first')
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
<style>
.containerApp {
  padding-top: 20px;
  padding-bottom: 20px;
}
.imagelogo {
  margin-top: 7%;
  width: 275px;
  height: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  background-color: black;
  height: 100vh;
}
.brandname {
  color: white;
  font-size: 90px;
  font-weight: bold;
}
.brandname2 {
  color: white;
  font-size: 30px;
}
.button-10 {
  margin-top: 10%;
  padding: 1rem 2.5rem;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: #fff;
  border-radius: 53px;
  border: 1px solid #e8e8e8;
  color: #1e1b1b;
  font-weight: bold;
  letter-spacing: 1.5px;
}
@import '~bootstrap/dist/css/bootstrap.css';
@import 'animate.css';
</style>
