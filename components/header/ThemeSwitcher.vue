<template>
  <div
    class="theme-switcher"
    @click="setAppTheme()"
  >
    <i
      class="ti-shine theme-switcher__icon"
      :class="[{ 'ti-light-bulb': appTheme !== 'DARK' }]"
    ></i>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      appTheme: state => state.appSettings.appTheme,
    })
  },
  methods: {
    setAppTheme () {
      const payload = {
        browserTheme: this.appTheme === 'LIGHT' ? 'DARK' : 'LIGHT',
      }

      this.$store.dispatch('appSettings/setAppTheme', payload)
    }
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
