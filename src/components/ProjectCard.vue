<template>
  <div class="w-full transition duration-1000 transform" :class="[isVisible ? 'translate-x-0 opacity-1' : ( side ? '-translate-x-full' : 'translate-x-full' ) +' opacity-0']">
    <h2 class="text-2xl font-bold mb-8">{{ project.title }}</h2>
    <a :href="project.href">
      <img :src="require('@/assets/images/' + project.img)" class="mx-auto shadow-2xl rounded-xl cursor-pointer transition transform duration-300 hover:scale-105" />
    </a>
    <div>
      <div class="flex justify-between px-4 my-2 w-40 mx-auto">
        <a v-for="(link, index) in project.links" :key="index" :href="link.href" target="_blank" class="transform duration-500 transform" :style="{ transitionDelay: (5 + index) + '00ms' }" :class="[isVisible ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0']"><SVGIcon :name="link.icon" class="w-8 h-8 text-green-300 animate-pulse transition transform hover:scale-110" /></a>
      </div>
      <p class="richtext mt-6 text-lg" v-html="project.copy"></p>
      <ul class="richtext mt-6">
        <li v-for="(point, index) in project.outline" :key="index" class="my-2"><b>{{ index }}</b>: {{ point }}</li>
      </ul>
      <Button text="Read more" theme="secondary" glow="true" class="my-8" :href="project.href" />
    </div>
  </div>
</template>

<script>
import SVGIcon from "@/components/SVGIcon";
import Button from "@/components/Button";

export default {
  name: 'ProjectCard',
  props: ['project', 'side', 'isVisible'],
  components: {
    Button,
    SVGIcon
  },
}

</script>