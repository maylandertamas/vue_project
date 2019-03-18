<template>
<div>
  <vue-scroll-progress-bar height="0.7rem" backgroundColor="gray" />
  <div class="padding-container">
    <sequential-entrance fromLeft>
    <div class="content-div col-12"  v-for="(videoLink,index) in videosLinks" :key="index">
      <iframe width="100%" height="100%" :src="videoLink" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
      </sequential-entrance>
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
    }
  },
   mounted () {

      /** Cached */
    if (localStorage.getItem('videosLinks')) {
      try {
        this.videosLinks = JSON.parse(localStorage.getItem('videosLinks'));
      } catch(e) {
        localStorage.removeItem('videosLinks');
      }
    } else {
      Axios.get('https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCIiJ33El2EakaXBzvelc2bQ&type=video&key=AIzaSyBfynihkI2OuWswP76U1fhCGdlX3EzSELE')
        .then(response => {
            response.data.items.forEach(element => {
            this.videosLinks.push('https://www.youtube.com/embed/'+element.id.videoId);
          });
          const parsed = JSON.stringify(this.videosLinks);
          localStorage.setItem('videosLinks', parsed);
      }).catch(()=> {});
    } 


     /** With backend */
    /*Axios.get('http://localhost:3000/videos').then((response) => {
        this.videosLinks = response.data.links;
        if (this.videosLinks.length <= 0) {
          Axios.get('https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCIiJ33El2EakaXBzvelc2bQ&type=video&key=AIzaSyBfynihkI2OuWswP76U1fhCGdlX3EzSELE')
          .then(response => {
             response.data.items.forEach(element => {
              this.videosLinks.push('https://www.youtube.com/embed/'+element.id.videoId);
             });

          Axios.post('http://localhost:3000/videos', {"links": this.videosLinks});
          });
        }
      })
      .catch(() => {})*/
  },
  methods: {
    getClass(property) {
      return property % 2 === 0 ? 'top-padding-minus' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

@media (min-width: 991.98px) { 
  .padding-container {
    margin-top: 10% !important;
  }

  .top-padding-minus {
    margin-top: -10% !important;
  }
}
.content-div {
  border-radius: 25px;
  border-width: 5px;
  border-style: groove;
  border-color: black;
  padding: 1em;
  height: 15em;
  margin: 0.5em;
  width: 100%;
}
</style>
