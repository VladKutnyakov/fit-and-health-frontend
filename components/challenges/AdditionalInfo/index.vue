<template>
  <div class="additional-info">
    <users-raiting />
    <useful-pages />
  </div>
</template>

<script>
import UsersRaiting from '@/components/challenges/AdditionalInfo/UsersRaiting/index'
import UsefulPages from '@/components/challenges/AdditionalInfo/UsefulPages'

export default {
  components: {
    UsersRaiting,
    UsefulPages
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.additional-info {
  // border: 1px solid red;
  margin-left: 40px;
  width: 400px;
  min-width: 400px;
  max-width: 400px;
}
</style>