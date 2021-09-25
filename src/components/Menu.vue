<template>
  <div class="fixed z-30 flex justify-center w-full transition-all duration-300 items-center" :class="[scrollY > 1 ? 'bg-black-alpha h-20 shadow-xl' : 'h-32']" v-intersect="intersect">
    <div class="w-full px-6 md:px-16 max-w-5xl h-16 flex justify-between items-center">
      <div>
        <a @click="scrollToTop()" class="cursor-pointer">
          <h2 class="text-2xl font-bold text-white whitespace-nowrap tracking-tighter">
          <span class="text-green-400 text-glow">&#60;/</span>
          {{ personalData.fullName }}
          <span class="text-green-400 text-glow">></span></h2>
        </a>
      </div>
      <div class="text-xl text-gray-500 tracking-tight">
        <div class="hidden sm:flex space-x-12">
          <div v-for="(section, index) in sections" :key="index" class="transition duration-500 transform" :style="{ transitionDelay: index + 'ms' }" :class="[isVisible ? 'translate-y-0 opacity-1' : '-translate-y-full opacity-0']">
            <a :href="section.link" v-smooth-scroll @click="selectedSection = index" class="text-gray-300 transition hover:text-gray-100 transform hover:scale-105">
              {{ section.text }}
              <div v-if="selectedSection === index" class="absolute w-8 h-1 bg-green-300 rounded-xl opacity-70 mt-1"></div>
            </a>
          </div>
        </div>

        <div class="inline-block sm:hidden w-10 h-10 p-2 rounded-full border-glow border-2 border-green-300 cursor-pointer transition transform hover:scale-105">
          <SVGIcon name="menu" class="w-full h-full -mt-3 text-green-300" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import onIntersect from '@/mixins/onIntersect';
import SVGIcon from "@/components/SVGIcon";

import PersonalJSON from "@/assets/data/personal.json";

export default {
  name: 'Menu',
  mixins: [onIntersect],
  components: {
    SVGIcon
  },
  data() {
    return {
      personalData: PersonalJSON,
      sections: [
        { text: "About", link: "#about" },
        { text: "Projects", link: "#projects" },
        { text: "Contact", link: "#contact" },
      ],
      scrollY: null,
      selectedSection: 0
    }
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY || window.scrollTop
    },
    scrollToTop() {
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });

      } else {
        window.location.href = '/';
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
  .text-glow {
    animation: glow 1s ease-in-out infinite alternate;
  }

  .bg-black-alpha {
    background-color: rgb(40, 52, 68);
  }

  @keyframes glow {
    from {
      text-shadow: 2px 2px 8px rgba(52, 211, 153, 0.6);
    }
    to {
      text-shadow: 2px 2px 8px rgba(52, 211, 153, 1);
    }
  }
</style>