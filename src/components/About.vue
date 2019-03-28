<template>
<!-- <transition name="about" enter-active-class="animated fadeInUp">-->
  <div class="text-justify container col-10 mt-4">
     <sequence delay=30  tag='span'>
    <span v-for="(text,index) in aboutText" :key="index">
     {{ text }}
    </span>
     </sequence>
  </div>
 <!--</transition>-->
</template>

<script>
import Sequence from './Sequence.vue'
export default {
  name: 'about',
  components: {
  Sequence
  },
  data() {
    return {
      aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam mi, finibus sit amet viverra vitae, luctus sit amet orci. Nam tristique metus \
      nec augue fermentum, a tincidunt velit malesuada. Morbi a ante sit amet diam accumsan feugiat eu ac nulla. Praesent non porttitor ipsum. Cras et faucibus nunc. Donec \
      fringilla sed mi ac sodales. Quisque rhoncus purus purus, eget finibus lorem accumsan id. Aenean et mauris condimentum, iaculis nunc vitae, pulvinar eros. Etiam sit amet \
      turpis vulputate, vestibulum diam vel, tempor mi. Proin a luctus lorem. Quisque id ipsum dignissim, lacinia odio non, maximus augue. Ut porta turpis nec placerat vehicula.\
       Duis interdum eleifend pretium.".match(/.{1,15}/g)
    }
  },
  mounted() {
    console.log(this.aboutText);
  }
}
</script>

<style scoped>

</style>