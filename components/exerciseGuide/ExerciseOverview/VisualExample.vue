<template>
  <div class="visual-example">
    <iframe width="750px" height="420px" src="https://www.youtube.com/embed/FntGgrPurFA"></iframe>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.visual-example {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 10px;
  border-top: 1px dashed $blockBorder;
  border-bottom: 1px dashed $blockBorder;
  iframe {
    border-radius: 6px;
  }
}

</style>
