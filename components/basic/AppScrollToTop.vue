<template>
  <div
    class="app-scroll-to-top"
    :class="[{ 'app-scroll-to-top--visible': isVisible }]"
    @click="scrollToTop()"
  >
    <i class="ti-angle-up"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    setVisibility () {
      if (window.pageYOffset > 400) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    },
    scrollToTop () {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -50)

        setTimeout(() => {
          this.scrollToTop()
        }, 0)
      }
    }
  },
  mounted () {
    if (window.pageYOffset > 400) {
      this.isVisible = true
    } else {
      this.isVisible = false
    }
    document.addEventListener('scroll', this.setVisibility)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.setVisibility)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $green;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: $white;
  opacity: 0;
  visibility: hidden;
  transition: $tr-02;
  cursor: pointer;
}
.app-scroll-to-top:hover {
  box-shadow: $boxShadow;
}

.app-scroll-to-top--visible {
  opacity: 1;
  visibility: visible;
}

</style>
