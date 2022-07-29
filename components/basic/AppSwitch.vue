<template>
  <label
    class="app-switch"
    :class="[
      { 'app-switch--xl': xl },
      { 'app-switch--lg': lg },
      { 'app-switch--md': md },
      { 'app-switch--sm': sm },
    ]"
  >
    <input
      class="app-switch__input"
      type="checkbox"
      :checked="value"
      :value="value"
      @change="change($event)"
    >

    <p class="app-switch__item">
      <i
        v-if="iconLeft"
        class="item__icon item__icon--left ti-light-bulb"
        :class="iconLeft"
      ></i>
      <i
        v-if="iconRight"
        class="item__icon item__icon--right ti-shine"
        :class="iconRight"
      ></i>
    </p>

    <p v-if="label" class="app-switch__text">{{ label }}</p>
  </label>
</template>

<script>
export default {
  name: 'AppSwitch',
  props: {
    value: Boolean,
    label: String,
    iconLeft: String,
    iconRight: String,
    xl: Boolean,
    lg: Boolean,
    md: Boolean,
    sm: Boolean,
  },
  methods: {
    change ($event) {
      this.$emit('change', $event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.app-switch {
  // border: 1px solid red;
  display: flex;
  align-items: center;
  .app-switch__input {
    display: none;
  }
  .app-switch__input + .app-switch__item:after {
    left: 3px;
    background: $secondaryLight1;
  }
  .app-switch__input:checked + .app-switch__item {
    border: 2px solid $primary;
  }
  .app-switch__input:checked + .app-switch__item:after {
    left: 19px;
    background: $primary;
  }
  .app-switch__input:checked ~ .app-switch__text {
    color: $primary;
  }
  .app-switch__item {
    // border: 1px solid red;
    position: relative;
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    height: 22px;
    min-height: 22px;
    max-height: 22px;
    border: 2px solid $secondaryLight1;
    border-radius: 12px;
    .item__icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: $secondaryLight1;
      font-size: 11px;
      opacity: .8;
    }
    .item__icon--left {
      left: 5px;
    }
    .item__icon--right {
      right: 5px;
    }
  }
  .app-switch__item:after {
    // border: 1px solid red;
    position: absolute;
    top: 0;
    left: 2px;
    transform: translateY(calc(-50% + 9px));
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 50%;
    transition: $tr-01;
  }
  .app-switch__text {
    // border: 1px solid red;
    position: relative;
    margin-left: 12px;
    user-select: none;
    transition: $tr-01;
  }
}

.app-switch--xl {
  .app-switch__item {
    width: 60px;
    min-width: 60px;
    max-width: 60px;
    height: 30px;
    min-height: 30px;
    max-height: 30px;
    border-radius: 15px;
    .item__icon {
      font-size: 18px;
    }
    .item__icon--left {
      left: 7px;
    }
    .item__icon--right {
      right: 7px;
    }
  }
  .app-switch__item:after {
    transform: translateY(calc(-50% + 13px));
    height: 20px;
    width: 20px;
  }
  .app-switch__input + .app-switch__item:after {
    left: 4px;
  }
  .app-switch__input:checked + .app-switch__item:after {
    left: 32px;
  }
  .app-switch__text {
    font-size: 24px;
  }
}

.app-switch--lg {
  .app-switch__item {
    width: 50px;
    min-width: 50px;
    max-width: 50px;
    height: 27px;
    min-height: 27px;
    max-height: 27px;
    border-radius: 15px;
    .item__icon {
      font-size: 16px;
    }
    .item__icon--left {
      left: 5px;
    }
    .item__icon--right {
      right: 5px;
    }
  }
  .app-switch__item:after {
    transform: translateY(calc(-50% + 12px));
    height: 18px;
    width: 18px;
  }
  .app-switch__input + .app-switch__item:after {
    left: 3px;
  }
  .app-switch__input:checked + .app-switch__item:after {
    left: 25px;
  }
  .app-switch__text {
    font-size: 22px;
  }
}

// .app-switch--md {
// }

.app-switch--sm {
  .app-switch__item {
    width: 32px;
    min-width: 32px;
    max-width: 32px;
    height: 18px;
    min-height: 18px;
    max-height: 18px;
    border-radius: 15px;
    .item__icon {
      font-size: 10px;
    }
    .item__icon--left {
      left: 3px;
    }
    .item__icon--right {
      right: 3px;
    }
  }
  .app-switch__item:after {
    transform: translateY(calc(-50% + 7px));
    height: 12px;
    width: 12px;
  }
  .app-switch__input + .app-switch__item:after {
    left: 2px;
  }
  .app-switch__input:checked + .app-switch__item:after {
    left: 14px;
  }
  .app-switch__text {
    font-size: 14px;
  }
}

</style>
