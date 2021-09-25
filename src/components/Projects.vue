<template>
  <div class="px-6 md:px-16 my-12" v-intersect="intersectClose" >
    <div class="anchor-point -top-36" id="projects" />

    <div class="max-w-5xl mx-auto">
      <Subheading class="mb-12">PROJECTS</Subheading>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 text-gray-400">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" :side="index % 2 === 0" :is-visible="isVisible" />
      </div>
    </div>
  </div>
</template>

<script>
import onIntersect from '@/mixins/onIntersect';
import Subheading from "@/components/Subheading";
import ProjectCard from "@/components/ProjectCard";

import ProjectsJSON from "@/assets/data/projects.json";

export default {
  name: 'Projects',
  mixins: [onIntersect],
  components: {
    ProjectCard,
    Subheading
  },
  data() {
    return {
      projects: ProjectsJSON
    }
  }
}
</script>