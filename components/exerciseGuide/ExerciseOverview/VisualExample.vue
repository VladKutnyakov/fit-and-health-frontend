<template>
  <div class="visual-example">
    <iframe width="400px" height="600px" src="https://www.youtube.com/embed/FntGgrPurFA"></iframe>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.visual-example {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-left: 1px solid $blockBorder;
  iframe {
    border-radius: 6px;
  }
}

</style>