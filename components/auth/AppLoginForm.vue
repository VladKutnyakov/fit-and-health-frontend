<template>
  <div class="login__form-wrapper">
    <p class="login__form-title">Авторизация</p>
    <i class="login__form-icon ti-unlock"></i>

    <form class="login__form">
      <p class="form__input-title">E-mail</p>
      <app-input-text
        :value="email"
        @input="email = $event"
      />

      <!-- <p class="form__input-title">Телефон</p>
      <app-input-text
        :value="phone"
        @input="email = $event"
      /> -->

      <p class="form__input-title">Пароль</p>
      <app-input-text
        :value="password"
        @input="password = $event"
      />
    </form>

    <app-button size16px uppercase center mt20 mb20 @click.native.prevent="login()">Войти</app-button>
    <p class="login__question">
      Забыли пароль?
      <span
        class="question__action-btn"
        @click="forgotPassword()"
      >Восстановить.</span>
    </p>

    <p class="login__question">Нет аккаунта?<span
      class="question__action-btn"
      @click="changeForm()"
    >Зарегистрироваться.</span>
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
      email: 'string',
      phone: 'string',
      password: 'string'
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
    async login () {
      // добавить валидацию перед диспатчем
      try {
        const formData = {
          email: this.email,
          phone: this.phone,
          password: this.password
        }
        if (formData.email.length > 0 && formData.password.length > 0 && formData.phone.length > 0) {
          await this.$store.dispatch('auth/login', formData)
        } else {
          // выводим сообщение об ошибке для пользователя
          const notice = {
            id: Date.now(),
            type: 'alert',
            message: 'Заполните все поля.',
            timeToShow: 5000,
          }
          this.$store.commit('notifications/addNewNotice', notice)
        }

        if (this.token) {
          this.$router.push('/profile')
        }
      } catch (e) {
        console.log(e)
      }
    },
    forgotPassword () {
      console.log('forgotPassword')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.login__form-wrapper {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  .login__form-title {
    // border: 1px solid red;
    text-align: center;
    font-size: 26px;
  }
  .login__form-icon {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }
  .login__form {
    // border: 1px solid red;
    width: 100%;
    .form__input-title {
      padding: 10px 10px 5px 10px;
      font-size: 14px;
    }
  }
  .login__question {
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
