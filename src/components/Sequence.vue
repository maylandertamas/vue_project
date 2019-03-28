

<script>


export default {
  functional: true,
  // eslint-disable-next-line
  render(createElement, { props, data, children })
  {
    let delay = props.delay || 250;
    let tag = props.tag || "div";
    let animation = props.animation || "animated fadeInUp";

    if(props.fromTop != undefined) animation = 'entranceFromTop'
    if(props.fromRight != undefined) animation = 'entranceFromRight'
    if(props.fromBottom != undefined) animation = 'entranceFromBottom'
    if(props.fromLeft != undefined) animation = 'entranceFromLeft'

    if (children) {
      children.forEach((child, index) => {
        child.data.staticStyle = {
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: index * delay + "ms"
        };
        child.data.staticClass += " " + animation;
        child.data.staticClass += tag === "div" ? " " + 'col-12' : '';
      });
    }
    return createElement(tag,children);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entranceFromTop {
  animation-duration: 2s;
  animation-name: entranceFromTop;
}

@keyframes entranceFromTop {
  from {
    opacity: 0;
    transform: translateY(-80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.entranceFromBottom {
  animation-duration: 2s;
  animation-name: entranceFromBottom;
}

@keyframes entranceFromBottom {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.entranceFromLeft {
  animation-name: entranceFromLeft;
  animation-duration: 1s;
}

@keyframes entranceFromLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.entranceFromRight {
  animation-name: entranceFromRight;
  animation-duration: 1s;
}

@keyframes entranceFromRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}




/****/


</style>
