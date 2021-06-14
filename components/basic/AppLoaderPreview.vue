<template>
  <div v-if="isActive" class="app-loader-preview">
    <div class="app-loader-preview__spinner">
      <div class="spinner">
        <div class="spinner__circle"></div>
        <div class="spinner__circle"></div>
        <div class="spinner__circle"></div>
        <div class="spinner__shadow"></div>
        <div class="spinner__shadow"></div>
        <div class="spinner__shadow"></div>
      </div>

      <span v-if="message" class="message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    message: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-loader-preview {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: $black40;
  width: 100vw;
  height: 100vh;
  .app-loader-preview__spinner {
    // border: 1px solid red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    .spinner {
      // border: 1px solid red;
      width: 200px;
      height: 70px;
      .spinner__circle {
        width: 20px;
        height: 20px;
        position: absolute;
        border-radius: 50%;
        background-color: $white;
        left: 15%;
        transform-origin: 50%;
        animation: circle 0.5s alternate infinite ease;
      }
      .spinner__circle:nth-child(2) {
        left: 45%;
        animation-delay: 0.2s;
      }
      .spinner__circle:nth-child(3) {
        left: auto;
        right: 15%;
        animation-delay: 0.3s;
      }
      .spinner__shadow {
        width: 20px;
        height: 4px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 62px;
        transform-origin: 50%;
        z-index: -1;
        left: 15%;
        filter: blur(1px);
        animation: shadow 0.5s alternate infinite ease;
      }
      .spinner__shadow:nth-child(4) {
        left: 45%;
        animation-delay: 0.2s;
      }
      .spinner__shadow:nth-child(5) {
        left: auto;
        right: 15%;
        animation-delay: 0.3s;
      }
    }
    .message {
      // border: 1px solid red;
      margin: 10px auto 0 auto;
      text-transform: uppercase;
      color: $white;
      font-size: 20px;
      letter-spacing: 4px;
    }
  }
  
}

@keyframes circle {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0%;
  }
}

@keyframes shadow {
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}

</style>
