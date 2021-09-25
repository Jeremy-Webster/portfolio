<template>
  <component
      :is="iconComponent"
      role="img"
      class="inline-block fill-current"
  />
</template>

<script>
const icons = {
  mail: require('@/assets/icons/icon_mail.svg'),
  linkedin: require('@/assets/icons/icon_linkedin.svg'),
  github: require('@/assets/icons/icon_github.svg'),
  menu: require('@/assets/icons/icon_menu.svg'),
  preview: require('@/assets/icons/icon_preview.svg'),
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },
  computed: {
    iconComponent() {
      return icons[this.name]
    }
  }
}
</script>