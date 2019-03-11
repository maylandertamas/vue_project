<template>
  <div class="content-div">
      {{ info }}
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/BBJa32lCaaY" frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>


</template>

<script>

export default {
  name: 'videos',
  data () {
    return {
      info: null
    }
  },
    mounted () {
      axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
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
  height: 30em;
}
</style>
