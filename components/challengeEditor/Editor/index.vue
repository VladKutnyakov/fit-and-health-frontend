<template>
  <div class="editor">
    <app-block-title>Редактор</app-block-title>
    <div class="editor__content">
      constructor editor
    </div>
  </div>
</template>

<script>
import AppBlockTitle from '@/components/basic/AppBlockTitle'

export default {
  components: {
    AppBlockTitle
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.editor {
  flex: 1 1 auto;
  .editor__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: $hiddenBlockBG;
    border-radius: 6px;
    box-shadow: $boxShadow;
  }
}
</style>