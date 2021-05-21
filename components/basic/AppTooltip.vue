<template>
  <div
    class="tooltip"
    :class="[
      { 'tooltip--success': success },
      { 'tooltip--warning': warning },
      { 'tooltip--info': info },
      { 'tooltip--alert': alert },
      { 'tooltip--center': textAlignCenter },
    ]"
    @mouseenter="setPosition()"
  >
    <slot name="tooltipElement"></slot>
    <div
      ref="tooltipHiddenContent"
      class="tooltip__hidden-content"
      :style="{ width: width }"
    >
      <slot name="tooltipText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top: Boolean,
    bottom: Boolean,
    left: Boolean,
    right: Boolean,
    width: String,
    success: Boolean,
    warning: Boolean,
    info: Boolean,
    alert: Boolean,
    textAlignCenter: Boolean,
  },
  methods: {
    setPosition () {
      const TooltipHiddenContent = this.$refs.tooltipHiddenContent
      const TooltipHiddenContentRect = TooltipHiddenContent.getBoundingClientRect()

      if (this.top) {
        
        TooltipHiddenContent.style.top = `-${TooltipHiddenContentRect.height + 10}px`
        console.log(TooltipHiddenContentRect.top);
        if (TooltipHiddenContentRect.top < 0) {
          TooltipHiddenContent.style.top = 0
        }
        TooltipHiddenContent.style.left = '50%'
        TooltipHiddenContent.style.transform = 'translateX(-50%)'
      }
    }
  },
  mounted () {
    this.setPosition()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.tooltip {
  // border: 1px solid red;
  position: relative;
  display: flex;
  align-items: center;
  .tooltip__hidden-content {
    position: absolute;
    padding: 10px 20px;
    background: $white;
    border: 1px solid $blockBorder;
    border-radius: 6px;
    box-shadow: $boxShadow;
    font-size: 14px;
    transition: $tr-02;
    opacity: 0;
    visibility: hidden;
    z-index: 8000;
  }
}

.tooltip:hover .tooltip__hidden-content {
  opacity: 1;
  visibility: visible;
}

.tooltip--success {
  .tooltip__hidden-content {
    background: $green;
    color: $white;
    border: 1px solid transparent;
  }
}
.tooltip--warning {
  .tooltip__hidden-content {
    background: $yellow;
    color: $black;
    border: 1px solid transparent;
  }
}
.tooltip--info {
  .tooltip__hidden-content {
    background: $blue;
    color: $white;
    border: 1px solid transparent;
  }
}
.tooltip--alert {
  .tooltip__hidden-content {
    background: $red;
    color: $white;
    border: 1px solid transparent;
  }
}

.tooltip--center {
  .tooltip__hidden-content {
    text-align: center;
  }
}

</style>