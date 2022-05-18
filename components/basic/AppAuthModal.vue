<template>
  <app-modal
    :isActive="value"
    width="400px"
    @close="close()"
  >
    <template v-slot:modalContent>
      <div class="auth__form">
        <p v-if="modalCondition === 'LOGIN'" class="form__title">Авторизация</p>
        <p v-if="modalCondition === 'REGISTER'" class="form__title">Регистрация</p>

        <i
          class="form__icon"
          :class="[
            { 'ti-unlock': modalCondition === 'LOGIN' },
            { 'ti-user': modalCondition === 'REGISTER' }
          ]"
        />

        <form class="form">
          <p class="form__input-title">E-mail</p>
          <app-input-text
            :value="email"
            @input="email = $event"
          />

          <p v-if="modalCondition === 'REGISTER'" class="form__input-title">Телефон</p>
          <app-input-text
            v-if="modalCondition === 'REGISTER'"
            :value="phone"
            @input="phone = $event"
          />

          <p class="form__input-title">Пароль</p>
          <app-input-text
            :value="password"
            @input="password = $event"
          />
        </form>

        <app-button
          class="mt-20"
          uppercase
          center
          @click.native.prevent="login()"
        >{{ modalCondition === 'LOGIN' ? 'Войти' : 'Создать аккаунт' }}</app-button>

        <div class="questions">
          <div v-if="modalCondition === 'LOGIN'" class="question">
            <p class="question__text">Забыли пароль?</p>
            <p class="question__action-btn" @click="forgotPassword()">Восстановить.</p>
          </div>

          <div v-if="modalCondition === 'LOGIN'" class="question">
            <p class="question__text">Нет аккаунта?</p>
            <p class="question__action-btn" @click="changeForm()">Зарегистрироваться.</p>
          </div>

          <div v-if="modalCondition === 'REGISTER'" class="question">
            <p class="question__text">Уже есть аккаунт?</p>
            <p class="question__action-btn" @click="changeForm()">Войти.</p>
          </div>
        </div>
      </div>
    </template>
  </app-modal>
</template>

<script>
import AppModal from '@/components/basic/AppModal'
import AppInputText from '@/components/basic/AppInputText'
import AppButton from "@/components/basic/AppButton"

export default {
  props: {
    value: Boolean,
  },
  components: {
    AppModal,
    AppInputText,
    AppButton
  },
  data () {
    return {
      modalCondition: 'LOGIN',
      email: null,
      phone: null,
      password: null,
    }
  },
  methods: {
    changeForm () {
      this.email = null,
      this.phone = null,
      this.password = null,

      this.modalCondition === 'LOGIN' ? this.modalCondition = 'REGISTER' : this.modalCondition = 'LOGIN'
    },
    confirm () {
      // Авторизовать пользователя
    },
    close () {
      this.$emit('close')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.auth__form {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  .form__title {
    text-align: center;
    font-size: 28px;
  }
  .form__icon {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 50px;
  }
  .form {
    padding: 0 10px;
    width: 100%;
    .form__input-title {
      padding: 10px 10px 5px 15px;
    }
  }
  .questions {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    .question {
      display: flex;
      align-items: center;
      margin-top: 10px;
      align-self: center;
      user-select: none;
      .question__action-btn {
        margin-left: 5px;
        color: $primary;
        cursor: pointer;
      }
    }
  }
}

</style>
