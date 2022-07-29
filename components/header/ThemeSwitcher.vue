<template>
  <div class="theme-switcher" title="Переключение темы приложения">
    <app-switch
      :value="appTheme === 'DARK' ? true: false"
      iconLeft="ti-light-bulb"
      iconRight="ti-shine"
      @change="setAppTheme()"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppSwitch from '@/components/basic/AppSwitch'

export default {
  components: {
    AppSwitch
  },
  computed: {
    ...mapState({
      appTheme: state => state.settings.appTheme,
    })
  },
  methods: {
    setAppTheme () {
      const payload = {
        browserTheme: this.appTheme === 'LIGHT' ? 'DARK' : 'LIGHT',
      }

      this.$store.dispatch('settings/setAppTheme', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.theme-switcher {
  margin-left: 20px;
  margin-right: auto;
  padding: 5px;
  cursor: pointer;
}

</style>
