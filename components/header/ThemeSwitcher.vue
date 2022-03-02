<template>
  <div
    class="theme-switcher"
    @click="toggleAppTheme()"
  >
    <i
      class="ti-shine theme-switcher__icon"
      :class="[{ 'ti-light-bulb': appTheme !== 'DARK' }]"
    ></i>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      appTheme: state => state.appSettings.appTheme,
    })
  },
  methods: {
    ...mapMutations({
      toggleAppTheme: 'appSettings/toggleAppTheme',
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.theme-switcher {
  margin-left: auto;
  padding: 5px;
  cursor: pointer;
  .theme-switcher__icon {
    font-size: 20px;
  }
}

</style>
