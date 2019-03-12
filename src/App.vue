<template>
  <div id="app">
       <div class="text-right position-fixed pos" ><a href=""><i class="fab fa-facebook-messenger fb-icon"></i></a></div>
    <div class="mb-3">
         <transition name="alert-in" enter-active-class="animated rollIn" leave-active-class="animated bounceOutRight">
        <div v-if="actualPage === 'Home'" id="main-page-header-home" class="text-center"><h1 class="header-text">Videos</h1></div>
          </transition>
          <transition name="alert-in" enter-active-class="animated rollIn" leave-active-class="animated bounceOutRight">
        <div v-if="actualPage === 'About'" id="main-page-header-about" class="text-center"><h1 class="header-text">About</h1></div>
          </transition>
    </div>
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
 
    },
    setAbout() {
      this.actualPage = 'About'
      const homeText =  document.querySelector('#main-page-header-home')
      const aboutText =  document.querySelector('#main-page-header-about')
      homeText.classList.add('d-none')
      aboutText.classList.remove('d-none')

    }
  }
}
</script>

<style>

.pos {
  left: 90%;
  top: 13%;
}

.fb-icon {
  border-style: solid;
  border-radius: 50px;
  padding: 5px 10px 5px 10px;
  border-width: 0.1em;
  font-size: 50px;
  color: #0078FF;
}

.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: linear-gradient(to right, #38C172, #51D88A);
}

.header-text {
  font-size: 5em;
}


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
