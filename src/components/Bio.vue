<template>
  <div>
    <div class="anchor-point" id="about" />
    <img src="@/assets/hero_skyline.png" class="select-none pointer-events-none h-40 -mt-40"  />

    <div class="flex justify-center px-6 md:px-16 pt-8 bg-navy" v-intersect="intersect">
      <div class="flex flex-col md:flex-row justify-between w-full max-w-5xl transition duration-500 transform" :class="[isVisible ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0']">
        <div class="md:pt-16">
          <a :href="personalData.profile">
            <div class="w-60 h-60 sm:w-96 sm:h-96 md:w-48 md:h-48 rounded-full border-4 border-green-300 p-2 border-glow mx-auto transition duration-500 transform hover:scale-105">
              <img src="@/assets/headshot_photo.jpg" class="select-none pointer-events-none w-full h-full rounded-full"/>
            </div>
          </a>
          <div class="py-6">
            <p class="font-medium text-white text-center text-xl">{{ personalData.fullName }}</p>

            <div class="flex justify-between mb-8 px-4 my-2 w-40 mx-auto">
              <a v-for="(social, index) in personalData.socials" :key="index" :href="social.link" target="_blank" class="transform duration-500 transform" :style="{ transitionDelay: (5 + index) + '00ms' }" :class="[isVisible ? 'translate-y-0 opacity-1' : 'translate-y-full opacity-0']"><SVGIcon :name="social.icon" class="w-8 h-8 text-green-300 animate-pulse transition transform hover:scale-110" /></a>
            </div>
          </div>

        </div>

        <div class="flex-1 md:max-w-2xl px-6 md:ml-16 mb-0 md:mb-16">
          <Subheading>ABOUT ME</Subheading>

          <span v-html="personalData.about" class="richtext text-gray-400 text-lg inline-block mt-8"></span>
        </div>
      </div>
    </div>

    <img src="@/assets/hero_skyline.png" class="select-none pointer-events-none h-40 transform rotate-180"  />
  </div>
</template>

<style>
  .bg-navy {
    background-color: #2B3443;
  }

  .anchor-point {
    display: block;
    position: relative;
    top: -75px;
    visibility: hidden;
  }
</style>

<script>
import onIntersect from '@/mixins/onIntersect';
import SVGIcon from "@/components/SVGIcon";
import Subheading from "@/components/Subheading";

import PersonalJSON from "@/assets/data/personal.json";

export default {
  name: 'Bio',
  mixins: [onIntersect],
  components: {
    Subheading,
    SVGIcon
  },
  data() {
    return {
      personalData: PersonalJSON
    }
  }
}
</script>