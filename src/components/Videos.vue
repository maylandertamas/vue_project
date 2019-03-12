<template>
<div class="row">
  {{arr}}
  <div class="content-div col-12 col-lg-5" v-for="(videoLink,index) in videosLinks" :key="index">
    <iframe width="100%" height="100%" :src="videoLink" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  </div>


</template>

<script>

import Axios from 'axios'
export default {
  name: 'videos',
  data () {
    return {
      videosLinks: [],
      arr: null
    }
  },
   mounted () {
 
    Axios.get('https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCIiJ33El2EakaXBzvelc2bQ&type=video&key=AIzaSyBfynihkI2OuWswP76U1fhCGdlX3EzSELE')
          .then(response => {
             response.data.items.forEach(element => {
              this.videosLinks.push('https://www.youtube.com/embed/'+element.id.videoId);
             });

          });
           const data = JSON.stringify("asfafasfa")
        window.localStorage.setItem('arr', data);
   this.arr= window.localStorage.getItem('arr');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.content-div {
  border-radius: 25px;
  background-color: grey;
  border-width: 2px;
  padding: 1em;
  height: 15em;
  margin: 0.5em;
  width: 100%;
}
</style>
