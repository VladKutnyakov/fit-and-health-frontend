<template>
  <div class="actions">
    <i class="ti-control-play action-btn"></i>
    <nuxt-link to="training-programs/program-123" class="action-btn">
      <i class="ti-pencil"></i>
    </nuxt-link>
    <i class="ti-check-box action-btn"></i>
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
  background: $hiddenBlockBG;
  .action-btn {
    margin-bottom: 20px;
    padding: 5px;
    font-size: 20px;
  }
  .action-btn:last-child {
    margin-top: auto;
    margin-bottom: 0;
  }
}

</style>
