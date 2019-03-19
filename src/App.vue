<template>
  <div id="app">
       <!--<div class="text-right position-fixed pos-messenger" ><i class="fab fa-facebook-messenger fb-icon"></i></div>-->
    <div class="row">
            <div class="col-2 text-left">
              <router-link v-bind:to="actualPage === 'videos' || actualPage === '/' ? 'about' : 'videos'"  
                            v-on:click.native="setNextPage()"><i class="fas fa-arrow-left icon-style">
                </i>
                </router-link>
            </div>
    <div class="col-8">
         <transition name="alert-in" enter-active-class="animated rollIn">
        <div v-if="actualPage === 'videos'" id="main-page-header-home" class="text-center"><h1 class="header-text">Videos</h1></div>
          </transition>
          <transition name="alert-in" enter-active-class="animated rollIn">
        <div v-if="actualPage === 'about'" id="main-page-header-about" class="text-center"><h1 class="header-text">About</h1></div>
          </transition>
    </div>
          <div class="col-2 text-right">
            <router-link v-bind:to="actualPage === 'videos' || actualPage === '/' ? 'about' : 'videos'"
                         v-on:click.native="setNextPage()"><i class="fas fa-arrow-right icon-style">
                </i>
                </router-link>
          </div>
    </div>
    <div class="row">
    <!--<div class="nav flex-column nav-pills col-lg-2 col-12" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <router-link  data-toggle="pill" class="nav-link active" to="/" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-on:click.native="setHome()">Home</router-link>
      <router-link data-toggle="pill" class="nav-link" to="/about" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-on:click.native="setAbout()">About</router-link>
    </div>-->
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
    }
  },
  mounted() {
   this.actualPage = this.$route.name;
  },
  methods: {
    setNextPage() {
      if (this.actualPage === 'videos') {
        this.actualPage = 'about'
        const homeText =  document.querySelector('#main-page-header-home')
        homeText.classList.add('d-none')

      } else {
        this.actualPage = 'videos'
        const aboutText =  document.querySelector('#main-page-header-about')
        aboutText.classList.add('d-none')
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
    border-style: solid;
    border-radius: 50px;
    padding: 5px 10px 5px 10px;
    border-width: 0.1em;
    font-size: 50px;
    color: #0078FF;
  }
  .header-text {
  font-size: 5em;
}
}

@media (max-width: 991.98px) { 
  .icon-style {
    border-style: solid;
    border-radius: 25px;
    padding: 0px 5px 0px 5px;
    border-width: 0.1em;
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



</style>
