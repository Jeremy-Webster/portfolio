<template>
  <div id="app">
    <Menu />
    <Hero />
    <Bio />
    <Projects />
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Projects from "@/components/Projects";

document.title = "Jeremy's Portfolio";

export default {
  name: 'App',
  components: {
    Menu,
    Hero,
    Bio,
    Projects
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

  .richtext ul {
    text-decoration: none;
    margin-top: 2em;
  }

  .richtext li {
    margin: 0.5em 0;
  }

  .richtext b {
    color: white;
  }
</style>
<style src="./assets/tailwind.css" />