<template>
  <div id="app">
         <transition name="alert-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div v-if="actualPage === 'Home'" id="main-page-header-home" class="text-center"><h1>Home</h1></div>
          </transition>
          <transition name="alert-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
        <div v-if="actualPage === 'About'" id="main-page-header-about" class="text-center"><h1>About</h1></div>
          </transition>

    <div class="row">
    <div class="nav flex-column nav-pills col-lg-2 col-12" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <router-link  id="v-pills-settings-tab" data-toggle="pill" class="nav-link active" to="/" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-on:click.native="setHome()">Home</router-link>
      <router-link id="v-pills-settings-tab" data-toggle="pill" class="nav-link" to="/about" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-on:click.native="setAbout()">About</router-link>
    </div>
    <div class="col-lg-10 col-12">
      <router-view />
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data () {
    return {
      actualPage: 'Home',
    }
  }, 
  methods: {
    setHome() {
      this.actualPage = 'Home'
      const homeText =  document.querySelector('#main-page-header-home')
      const aboutText =  document.querySelector('#main-page-header-about')
      aboutText.classList.add('d-none')
      homeText.classList.remove('d-none')
      //homeText.classList.add('animated', 'bounceInRight')
      //aboutText.classList.remove('animated', 'bounceInRight')

 
    },
    setAbout() {
      this.actualPage = 'About'
      const homeText =  document.querySelector('#main-page-header-home')
      const aboutText =  document.querySelector('#main-page-header-about')
      homeText.classList.add('d-none')
      aboutText.classList.remove('d-none')
      //aboutText.classList.add('animated', 'bounceInRight')
      //homeText.classList.remove('animated', 'bounceInRight')

    }
  }
}
</script>

<style>

body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 80%;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
