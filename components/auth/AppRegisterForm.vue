<template>
  <div class="register__form-wrapper">
    <p class="register__form-title">Регистрация</p>
    <i class="register__form-icon ti-user"></i>

    <form class="register__form" @submit.prevent>
      <p class="form__input-title">E-mail</p>
      <app-input-text
        :value="email"
        @input="email = $event"
      />

      <p class="form__input-title">Телефон</p>
      <app-input-text
        :value="phone"
        @input="phone = $event"
      />

      <p class="form__input-title">Password</p>
      <app-input-text
        :value="password"
        @input="password = $event"
      />
    </form>

    <app-button
      size16px
      uppercase
      center
      mt20
      mb20
      @click.native="createUser()"
    >Создать аккаунт</app-button>

    <p class="register__question">
      Уже есть аккаунт?
      <span
        class="question__action-btn"
        @click="changeForm()"
      >Войти.</span>
    </p>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppInputText from '@/components/basic/AppInputText'
import AppButton from '@/components/basic/AppButton'

export default {
  components: {
    AppInputText,
    AppButton
  },
  data () {
    return {
      email: '',
      phone: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      token: state => state.auth.token,
    })
  },
  methods: {
    changeForm () {
      this.$emit('changeForm')
    },
    async createUser () {
      try {
        const newUser = {
          email: this.email,
          phone: this.phone,
          password: this.password
        }
        if (newUser.email.length > 0 && newUser.password.length > 0 && newUser.phone.length > 0) {
          await this.$store.dispatch('auth/createUser', newUser)
        } else {
          // выводим сообщение об ошибке для пользователя
          const notice = {
            id: Date.now(),
            type: 'alert',
            message: 'Заполните все поля.',
            timeToShow: 5000,
            active: true
          }
          this.$store.commit('notifications/addNewNotice', notice)
        }

        if (this.token) {
          this.$router.push('/profile')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.register__form-wrapper {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  .register__form-title {
    // border: 1px solid red;
    text-align: center;
    font-size: 26px;
  }
  .register__form-icon {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }
  .register__form {
    // border: 1px solid red;
    width: 100%;
    .form__input-title {
      padding: 10px 10px 5px 10px;
      font-size: 14px;
    }
  }
  .register__question {
    margin-top: 10px;
    align-self: center;
    font-size: 14px;
    user-select: none;
    .question__action-btn {
      margin-left: 10px;
      color: $green;
      cursor: pointer;
    }
  }
}

</style>
