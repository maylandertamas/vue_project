<template>
<div>
  <vue-scroll-progress-bar height="0.7rem" backgroundColor="gray" />
  <div class="row padding-container">
    <sequential-entrance class="mb-4" tag="div" fromLeft>
    <div class="content-div col-12" v-bind:class="getClass(index)"  v-for="(videoLink,index) in videosLinks" :key="index">
      <iframe width="100%" height="100%" :src="videoLink" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
      </sequential-entrance>
  </div>   
</div> 
</template>

<script>

import Axios from 'axios'
import moment from 'moment'

export default {
  name: 'videos',
  data () {
    return {
      videosLinks: [],
    }
  },
   mounted () {
      
    var now = moment();

      /** Cached */
    if (localStorage.getItem('videosLinksObject')) {
      try {
        var parsed = JSON.parse(localStorage.getItem('videosLinksObject'));
        this.videosLinks = parsed.videosLinks;
        if (!parsed.timeStamp || now.diff(parsed.timeStamp, 'days') >= 1 ) {
          throw "Cache expired";
        }
      } catch(e) {
        // eslint-disable-next-line
        console.log(e)
        localStorage.removeItem('videosLinksObject');
      }
    } else {
      Axios.get('https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCEXGDNclvmg6RW0vipJYsTQ&type=video&key=AIzaSyBfynihkI2OuWswP76U1fhCGdlX3EzSELE')
        .then(response => {
            response.data.items.forEach(element => {
            this.videosLinks.push('https://www.youtube.com/embed/'+element.id.videoId);
          });
          var videosLinksObject = { videosLinks: this.videosLinks, timeStamp: now }
          const parsed = JSON.stringify(videosLinksObject);
          localStorage.setItem('videosLinksObject', parsed);
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
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

@media (min-width: 991.98px) { 
  .padding-container {
    margin-top: 4em !important;

  }

  .top-padding-minus {
    margin-top: -10% !important;
    margin-left: 110% !important;
    margin-bottom: -50% !important;

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
  width: 200%;
}
</style>
