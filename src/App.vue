<template>
  <div id="app">
    <div class="row">
    <div class="nav flex-column nav-pills col-lg-2 col-12" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <router-link  id="v-pills-settings-tab" data-toggle="pill" class="nav-link active" to="/" role="tab" aria-controls="v-pills-settings" aria-selected="false">Home</router-link>
      <router-link id="v-pills-settings-tab" data-toggle="pill" class="nav-link" to="/about" role="tab" aria-controls="v-pills-settings" aria-selected="false">About</router-link>
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
