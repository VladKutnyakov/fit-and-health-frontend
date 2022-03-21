<template>
  <div
    class="app-info"
    :class="[
      { 'app-info--success': success },
      { 'app-info--warning': warning },
      { 'app-info--info': info },
      { 'app-info--alert': alert },
      { 'app-info--small': small },
      { 'app-info--big': big }
    ]"
  >
    <i
      class="app-info__icon"
      :class="[
        { 'ti-check-box': success },
        { 'ti-na': warning },
        { 'ti-info-alt': info },
        { 'ti-alert': alert },
        { 'ti-pencil-alt': !success && !warning && !info && !alert },
      ]"
    ></i>
    <p class="app-info__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    success: Boolean,
    warning: Boolean,
    info: Boolean,
    alert: Boolean,
    text: String,
    small: Boolean,
    big: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-info {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: $gray-light;
  color: $gray-dark;
  border-radius: 6px;
  .app-info__icon {
    margin-right: 15px;
    font-size: 26px;
  }
  .app-info__text {
    font-size: 16px;
  }
}

.app-info--success {
  background: $success;
  color: $white;
}
.app-info--warning {
  background: $warning;
  color: $black;
}
.app-info--info {
  background: $info;
  color: $white;
}
.app-info--alert {
  background: $danger;
  color: $white;
}

.app-info--small {
  padding: 8px 15px;
  .app-info__icon {
    margin-right: 10px;
    font-size: 18px;
  }
  .app-info__text {
    font-size: 14px;
  }
}
.app-info--big {
  padding: 15px;
  .app-info__icon {
    margin-right: 10px;
    font-size: 20px;
  }
  .app-info__text {
    font-size: 18px;
  }
}

</style>
