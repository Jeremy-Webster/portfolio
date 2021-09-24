<template>
  <div>
    <img src="@/assets/hero_skyline.png" class="select-none pointer-events-none h-40 -mt-40"  />
    <div class="flex justify-center px-6 md:px-16 pt-8 bg-navy" v-intersect="intersect">
      <div class="flex flex-col md:flex-row justify-between w-full max-w-5xl transition duration-500 transform" :class="[isVisible ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0']">
        <div class="md:pt-16">
          <div class="w-60 h-60 sm:w-96 sm:h-96 md:w-48 md:h-48 rounded-full border-4 border-green-300 p-2 border-glow mx-auto">
            <img src="@/assets/headshot_photo.jpg" class="select-none pointer-events-none w-full h-full rounded-full"/>
          </div>
          <div class="py-6">
            <p class="font-medium text-white text-center text-xl">Jeremy Webster</p>

            <div class="flex justify-between mb-8 md:mb-40 px-4 my-2 w-40 mx-auto">
              <a v-for="(social, index) in socials" :key="index" :href="social.link" class="transform duration-500 transform" :style="{ transitionDelay: (5 + index) + '00ms' }" :class="[isVisible ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0']"><SVGIcon :name="social.icon" class="w-8 h-8 text-green-300 animate-pulse transition transform hover:scale-110" /></a>
            </div>
          </div>

        </div>

        <div class="flex-1 md:max-w-2xl px-6 md:ml-16">
          <div class="flex items-center">
            <div class="w-4 h-4 border-green-300 border-2 p-0.5 rounded-sm">
              <div class="bg-green-300 w-full h-full rounded-sm"></div>
            </div>
            <h2 class="text-2xl text-white font-bold mx-5 inline-block" id="about">ABOUT ME</h2>
          </div>

          <h3 class="text-white text-lg font-bold mt-12 mb-5">Welcome its good to have you here!</h3>
          <p class="text-gray-400 text-lg">
            I am a Programmer and a Game Dev enthusiast looking to build awesome applications and games. The approach to life I always take is to never stop learning, even from mistakes. Following these ideals has lead me to take part in some amazing adventures with amazing people, and I hope you will let me persuade you to become one of these people.
            <br><br>
            During middle school I taught myself programming as a way to live out the adventures I wanted the most in the games I enjoyed the most, from their my journey in programming began and has never stopped.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .bg-navy {
    background-color: #2B3443;
  }
</style>

<script>
import onIntersect from '../mixins/onIntersect';
import SVGIcon from "@/components/SVGIcon";

export default {
  name: 'Bio',
  mixins: [onIntersect],
  components: {
    SVGIcon
  },
  data() {
    return {
      socials: [
        {name: 'Email', icon: 'mail', link: 'mailto:websterjeremy@outlook.com'},
        {name: 'Github', icon: 'github', link: 'https://github.com/Jeremy-Webster'},
        {name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com/in/jeremy-leslie-jay-webster/'},
      ]
    }
  }
}
</script>