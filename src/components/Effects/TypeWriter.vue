<template>
  <span ref="effect" class="animate-blink"></span>
</template>

<script>
export default {
  name: 'TypeWriter',
  props: {
    text: String,
    delay: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      position: 0,
    }
  },
  methods: {
    animateEffect() {
      this.$refs.effect.innerHTML = this.$refs.effect.innerHTML + this.text.charAt(this.position);
      this.position++;
      setTimeout(this.animateEffect, this.speed);
    }
  },
  mounted() {
    setTimeout(this.animateEffect, this.delay)
  }
}
</script>

<style>
  .animate-blink:after {
    content: '';
    margin-left: 2px;
    width: 2px;
    height: 1em;
    background: rgba(110, 231, 183, 0.6);
    opacity: 0;
    display: inline-block;
    animation: blink .75s linear infinite alternate;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

