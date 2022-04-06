<template>
  <div
    class="app-spinner"
    :class="[
      { 'app-spinner--center': center },
      { 'app-spinner--rounded': rounded },
      { 'app-spinner--small': small },
    ]"
  >
    <div v-if="loading" class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-if="donut" class="donut"></div>

    <div v-if="donutDouble" class="donut-multi"></div>

    <div v-if="ripple" class="ripple"></div>

    <div v-if="rippleDouble" class="multi-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    donut: Boolean,
    donutDouble: Boolean,
    ripple: Boolean,
    rippleDouble: Boolean,
    center: Boolean,
    rounded: Boolean,
    small: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-spinner {
  position: absolute;
  top: 0;
  left: 0;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: $white60;
  z-index: 1000;

  .loading {
    display: flex;
    div {
      width: 15px;
      height: 15px;
      margin: 20px 5px;
      background: $primaryLight1;
      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;
    }
    div:nth-child(2) {
      animation-delay: 0.3s;
    }
    div:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }

  .donut {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgba($primary, 0.2);
    border-top-color: $primaryLight1;
    animation: 1.5s spin infinite linear;
  }
  .donut-multi {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid rgba($primary, 0.2);
    border-top-color: $primaryLight1;
    border-bottom-color: $primaryLight1;
    animation: 1.5s spin infinite linear;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .ripple {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid $primaryLight1;
    transform: translate(50%);
    animation: 1s ripple ease-out infinite;
  }
  .multi-ripple {
    width: 45px;
    height: 45px;
    div {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid $primaryLight1;
      animation: 1.5s ripple infinite;
    }
    div:nth-child(2) {
      animation-delay: 0.5s;
    }
  }
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }

    to {
      transform: scale(1);
      opacity: 0;
    }
  }
}

.app-spinner--center {
  align-items: center;
  justify-content: center;
}

.app-spinner--rounded {
  border-radius: 6px;
}

.app-spinner--small {
  .loading {
    div {
      width: 8px;
      height: 8px;
    }
  }

  .donut {
    width: 20px;
    height: 20px;
    border: 4px solid rgba($primary, 0.2);
    border-top-color: $primary;
  }
  .donut-multi {
    width: 20px;
    height: 20px;
  }

  .ripple {
    width: 20px;
    height: 20px;
  }
  .multi-ripple {
    width: 25px;
    height: 25px;
    div {
      width: 20px;
      height: 20px;
    }
  }
}

body.dark {
  .app-spinner {
    background: $black60;
  }
}

</style>
