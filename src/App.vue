<template>
  <div id="app">
       <!--<div class="text-right position-fixed pos-messenger" ><i class="fab fa-facebook-messenger fb-icon"></i></div>-->
    <div class="row">
            <div class="col-2 text-left">
              <router-link v-bind:to="actualPage === 'videos' || actualPage === '/' ? 'about' : 'videos'"  
                            v-on:click.native="setLeftPage()"><i class="fas fa-arrow-left icon-style">
                </i>
                </router-link>
            </div>
    <div class="col-8">
  
        <div id="main-page-header-home"  class="text-center animated position-absolute col-12"  v-bind:class="{ 'd-none': isAboutPageOnStartUp}"><h1  class="header-text ">Videos</h1></div>
        <div id="main-page-header-about" class="text-center animated position-absolute col-12" v-bind:class="{ 'd-none': isHomePageOnStartUp}"><h1   class="header-text ">About</h1></div>
 
        
        <!--<div id="main-page-header-about" class="text-center animated"><h1 class="header-text">About</h1></div>-->
   
    </div>
          <div class="col-2 text-right">
            <router-link v-bind:to="actualPage === 'videos' || actualPage === '/' ? 'about' : 'videos'"
                         v-on:click.native="setRightPage()"><i class="fas fa-arrow-right icon-style">
                </i>
                </router-link>
          </div>
    </div>
    <div class="row">
    <div class="col-12">
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
      actualPage: '',
      isHomePageOnStartUp: false,
      isAboutPageOnStartUp: false,
    }
  },
  mounted() {
   this.actualPage = this.$route.name;
   this.isHomePageOnStartUp = this.$route.name === 'videos' || this.$route.name === '/' ? true : false;
   this.isAboutPageOnStartUp = !this.isHomePageOnStartUp;
  },
  methods: {
    setLeftPage() {
      const homeText =  document.querySelector('#main-page-header-home')
      const aboutText =  document.querySelector('#main-page-header-about')
      homeText.classList.remove('d-none')
      aboutText.classList.remove('d-none')
      if (this.actualPage === 'videos') {
        this.actualPage = 'about'
        homeText.classList.remove('rollIn')
        homeText.classList.remove('rollInRight')
        aboutText.classList.remove('rollOut')
        aboutText.classList.remove('rollOutLeft')
        homeText.classList.add('rollOutLeft')
        aboutText.classList.add('rollInRight')
      } else {
        this.actualPage = 'videos'
        homeText.classList.remove('rollOut')
        homeText.classList.remove('rollOutLeft')
        aboutText.classList.remove('rollIn')
        aboutText.classList.remove('rollInRight')
        aboutText.classList.add('rollOutLeft')
        homeText.classList.add('rollInRight')
      }
    },
    setRightPage() {
      const homeText =  document.querySelector('#main-page-header-home')
      const aboutText =  document.querySelector('#main-page-header-about')
      homeText.classList.remove('d-none')
      aboutText.classList.remove('d-none')
      if (this.actualPage === 'videos') {
        this.actualPage = 'about'
        homeText.classList.remove('rollIn')
        aboutText.classList.remove('rollOut')
        homeText.classList.add('rollOut')
        aboutText.classList.add('rollIn')
      } else {
        this.actualPage = 'videos'
        homeText.classList.remove('rollOut')
        aboutText.classList.remove('rollIn')
        aboutText.classList.add('rollOut')
        homeText.classList.add('rollIn')
      }
    }

  }
}
</script>

<style>

.pos-messenger {
  left: 90%;
  top: 50%;
}

@media (min-width: 991.98px) { 
  .icon-style {
    padding: 5px 10px 5px 10px;
    font-size: 5em;
    color: #0078FF;
  }
  .header-text {
  font-size: 5em;
}
}

@media (max-width: 991.98px) { 
  .icon-style {
    padding: 0px 5px 0px 5px;
    font-size: 3em;
    color: #0078FF;
  }
  .header-text {
  font-size: 3em;
}
}

.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: linear-gradient(to right, #38C172, #51D88A);
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



/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollOutLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
        opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);

  }
}

@keyframes rollOutLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
        opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);

  }
}

.rollOutLeft {
  -webkit-animation-name: rollOutLeft;
  animation-name: rollOutLeft;
}



/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@-webkit-keyframes rollInRight {
  from {
     opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }

  to {
       opacity: 1;

  }
}

@keyframes rollInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }

  to {
        opacity: 1;

  }
}

.rollInRight {
  -webkit-animation-name: rollInRight;
  animation-name: rollInRight;
}

</style>
