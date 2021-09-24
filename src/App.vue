<template>
  <div id="app">
    <Menu />
    <Hero />
    <Bio />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Hero from './components/Hero.vue'
import Bio from './components/Bio.vue'

document.title = "Jeremy's Portfolio";

export default {
  name: 'App',
  components: {
    Menu,
    Hero,
    Bio
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  body {
    background-color: #202733;
    font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
    overflow-x: hidden;
  }
</style>
<style src="./assets/tailwind.css" />