<template>
  <ul class="objects-tree">
    <tree-item
      v-for="(item, index) in treeList"
      :key="index"
      :item="item"
    />
  </ul>
</template>

<script>
import TreeItem from '@/components/basic/AppObjectsTree/TreeItem'

export default {
  name: 'ObjectsTree',
  components: {
    TreeItem
  },
  props: {
    treeList: Array,
  },
  methods: {
    checkParentActive (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.objects-tree {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}

</style>
