<template>
  <div class="app-spinner">
    <div v-if="loading" class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-if="donut" class="donut"></div>

    <div v-if="donutDouble" class="donut multi"></div>

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
  // align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: $white50;
  z-index: 1000;
}

body.dark {
  .app-spinner {
  background: $black50;
}
}

$charade: #282a37;
$bluebell: #979fd0;

.loading {
  display: flex;
  justify-content: center;

  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: $bluebell;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}

.donut {
  width: 2rem;
  height: 2rem;
  margin: 2rem;
  border-radius: 50%;
  border: 0.3rem solid rgba($bluebell, 0.3);
  border-top-color: $bluebell;
  animation: 1.5s spin infinite linear;

  &.multi {
    border-bottom-color: $bluebell;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ripple {
  width: 2rem;
  height: 2rem;
  margin: 2rem;
  border-radius: 50%;
  border: 0.3rem solid $bluebell;
  transform: translate(50%);
  animation: 1s ripple ease-out infinite;
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

.multi-ripple {
  width: 2.6rem;
  height: 2.6rem;
  margin: 2rem;

  div {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.3rem solid $bluebell;
    animation: 1.5s ripple infinite;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }
  }
}

</style>
