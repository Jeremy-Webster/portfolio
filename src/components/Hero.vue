<template>
  <div class="flex justify-center px-6 md:px-16 hero-background" id="top">
    <div class="flex justify-between w-full flex-col md:flex-row md:max-w-5xl pt-60 pb-72" v-intersect="intersect">
      <div class="md:max-w-md transition duration-1000 transform" :class="[isVisible ? 'translate-x-0 opacity-1' : '-translate-x-full opacity-0']">
        <p class="text-sm tracking-tighter text-green-300 font-medium -mb-1">{{ personalData.role.toUpperCase() }}</p>
        <h1 class="text-4xl text-white font-bold">{{ personalData.fullName }}</h1>
        <p class="text-gray-400 font-medium my-6"><TypeWriter :text="personalData.quote" /></p>
        <Button text="See my Projects" theme="secondary" glow="true" href="#projects" />
      </div>

      <div class="mt-28 md:mt-0 transition duration-1000 transform" :class="[isVisible ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0']">
        <Gamification class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import onIntersect from '@/mixins/onIntersect';
import TypeWriter from "@/components/Effects/TypeWriter";
import Button from "@/components/Button";
import Gamification from "@/components/Gamification";

import PersonalJSON from "@/assets/data/personal.json";

export default {
  name: 'Hero',
  mixins: [onIntersect],
  components: { TypeWriter, Button, Gamification },
  data() {
    return {
      personalData: PersonalJSON
    }
  }
}
</script>

<style>
  .hero-background {
    background: radial-gradient(#303F53, transparent);
  }
</style>