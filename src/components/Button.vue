<template>
  <button class="px-12 py-2 rounded-md font-medium transition transform hover:scale-105" :class="[glow ? 'border-glow' : 'border-green-300', themes[theme]]">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    theme: {
      type: String,
      default: 'primary'
    },
    glow: String
  },
  data() {
    return {
      themes: {
        primary: `text-white bg-green-300`,
        secondary: `text-green-300 border-2`
      }
    }
  }
}
</script>

<style>
.border-glow {
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    border-color: rgba(110, 231, 183, 0.6);
    box-shadow: 0 0 10px rgba(110, 231, 183, 0.2);
  }
  to {
    border-color: rgba(110, 231, 183, 1);
    box-shadow: 0 0 10px rgba(110, 231, 183, 0.3);
  }
}
</style>