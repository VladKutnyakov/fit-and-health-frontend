<template>
  <div ref="rating" class="rating">
    <i class="ti-crown rating__star" :class="[{'primary': activeStars[0]}]"></i>
    <i class="ti-crown rating__star" :class="[{'primary': activeStars[1]}]"></i>
    <i class="ti-crown rating__star" :class="[{'primary': activeStars[2]}]"></i>
    <i class="ti-crown rating__star" :class="[{'primary': activeStars[3]}]"></i>
    <i class="ti-crown rating__star" :class="[{'primary': activeStars[4]}]"></i>
  </div>
</template>

<script>
export default {
  props: {
    rating: [Number, String]
  },
  data () {
    return {}
  },
  computed: {
    activeStars () {
      let activeElements = []
      for (let i = 0; i < 5; i++) {
        if (i < this.rating) {
          activeElements.push(true)
        } else {
          activeElements.push(false)
        }
      }
      return activeElements
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.rating {
  // border: 1px solid red;
  .rating__star {
    color: $black20;
    font-size: 14px;
    transition: $tr-02;
  }
  .primary {
    color: $primary;
  }
}

.dark-theme {
  .rating {
    // border: 1px solid red;
    .rating__star {
      color: $white20;
    }
    .primary {
      color: $primary;
    }
  }
}

</style>