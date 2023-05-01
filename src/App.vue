<template>
  <section class="container-fluid welcomelogo">
    <div class="banner">
      <div class="row">
        <div class="containerApp col-lg-6">
          <!-- <img src="./assets/logo7.png" class="imagelogo" /> -->
          <div class="logotextbox animate__animated animate__fadeInUp">
            <span class="brandname">HANSSOLUTION</span>
            <div>
              <span class="brandname2">ACOUSTIC CALCULATOR</span>
            </div>
          </div>
          <div class="animate__animated animate__fadeInUp">
            <button
              class="button-10"
              role="button"
              @click="scrollToFirstSection"
            >
              Get Started
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <img
            src="./assets/room.jpg"
            class="imageroom animate__animated animate__fadeInUp"
          />
        </div>
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
@font-face {
  font-family: 'Neon Led Light';
  src: url('@/assets/NEONLEDLight.otf') format('truetype');
}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
.containerApp {
  padding-top: 20px;
  padding-bottom: 20px;
}
.imagelogo {
  margin-top: 10%;
  width: 300px;
  height: 300px;
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
  background-image: linear-gradient(to bottom right, #513d90, #ceccf1);
  height: 100vh;
}
.imageroom {
  height: 100vh;
  width: 86.7vh;
  box-shadow: 0px 0px 7px #000000;
}
.brandname {
  font-family: 'Neon Led Light', sans-serif;
  color: white;
  font-size: 90px;
  text-shadow: 4px 4px 4px #8e8afb, 5px 5px 5px black;
}
.brandname2 {
  color: white;
  font-size: 30px;
}
.logotextbox {
  padding-top: 35%;
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
  letter-spacing: 1px;
  box-shadow: 0px 4px 16px rgba(154, 154, 154, 0.31);
}
@import '~bootstrap/dist/css/bootstrap.css';
@import 'animate.css';
</style>
