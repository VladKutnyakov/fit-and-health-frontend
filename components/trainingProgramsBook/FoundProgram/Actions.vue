<template>
  <div class="actions">
    <i class="ti-control-play action-btn"></i>
    <nuxt-link to="training-programs/program-123" class="action-btn">
      <i class="ti-search"></i>
    </nuxt-link>
    <i class="ti-trash action-btn"></i>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: $black15;
  .action-btn {
    margin-bottom: 10px;
    padding: 5px;
    color: $text;
    font-size: 20px;
    cursor: pointer;
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
  .action-btn:hover {
    color: $primary;
  }
}

body.dark {
  .actions {
    .action-btn {
      color: $textLight;
    }
  }
}

</style>
