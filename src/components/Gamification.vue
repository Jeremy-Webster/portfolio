<template>
  <div id="container" class="w-60 h-60"></div>
</template>

<script>
import onIntersect from '@/mixins/onIntersect';
import * as Three from 'three'

export default {
  name: 'Gamification',
  mixins: [onIntersect],
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
      console.log("Doing Setup");
      let container = document.getElementById('container');

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
      this.camera.position.z = 1;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.6, 0.6, 0.6);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new Three.WebGLRenderer({antialias: true, alpha: true});
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setClearColor(0xffffff, 0);
      container.appendChild(this.renderer.domElement);

    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
}
</script>

<style>
  #container canvas {
    width: 300px;
    height: 300px;
  }
</style>