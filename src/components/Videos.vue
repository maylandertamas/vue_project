<template>
<div>
  <vue-scroll-progress-bar height="0.7rem" backgroundColor="gray" />
  <div class="row padding-container">
    <div class="col-12">
    <sequence>
    <div class="content-div col-12" v-bind:class="getClass(index)"  v-for="(videoLink,index) in videosLinks" :key="index">
      <iframe width="100%" height="100%" :src="videoLink" frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </sequence>
        </div>
  </div>   
</div> 
</template>

<script>

import Axios from 'axios'
import moment from 'moment'
import Sequence from './Sequence.vue'

export default {
  name: 'videos',
  components: {
  Sequence
  },
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
      return property % 2 === 0 ? 'padding-even' : 'padding-odd'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

@media (min-width: 991.98px) { 
  .padding-container {
    margin-top: 1em !important;
    margin-left: 5em;

  }

  .padding-odd {
    margin-top: -20% !important;
    margin-left: 47% !important;
    margin-bottom: -15% !important;
  }

  .content-div {
  border-radius: 25px;
  border-width: 5px;
  border-style: groove;
  border-color: black;
  padding: 1em;
  height: 20em;
  margin: 0.5em;
  width: 45%;
}

}

@media (max-width: 991.98px) { 
  .padding-container {
    margin-top: 0em;
    margin-left: 0em;

  }

  .padding-odd {
    margin-top: 0%;
    margin-left: 0%;
    margin-bottom: 0%;
  }

  .content-div {
  border-radius: 25px;
  border-width: 5px;
  border-style: groove;
  border-color: black;
  padding: 1em;
  height: 25em;
  margin: 0.5em;
  width: 100%;
}

}


</style>
