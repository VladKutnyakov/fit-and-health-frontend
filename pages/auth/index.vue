<template>
  <div class="auth-page">
    <p>auth page</p>
    <hr>
    <p>{{ token }}</p>
    <hr>
    
    <form action="" @submit.prevent="login({userLogin, userPassword})">
      <input type="text" v-model="userLogin">
      <input type="text" v-model="userPassword">
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'default',
  middleware: ['userAuth'],
  data () {
    return {
      userLogin: 'john',
      userPassword: 'changeme',
    }
  },
  computed: {
    ...mapState({
      token: state => state.auth.token
    }),
  },
  methods: {
    async login () {
      // добавить валидацию перед диспатчем
      try {
        const formData = {
          userLogin: this.userLogin,
          userPassword: this.userPassword,
        }
        await this.$store.dispatch('auth/login', formData)
        if (this.token) {
          this.$router.push('/profile')
        }
      } catch (err) {
        console.log(err)
      }
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

</style>
