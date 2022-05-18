<template>
  <app-modal
    :isActive="value"
    width="400px"
    @close="dismiss()"
  >
    <template v-slot:modalContent>
      <div class="auth__form">
        <p v-if="condition === 'login'" class="form__title">Авторизация</p>
        <p v-if="condition === 'register'" class="form__title">Регистрация</p>

        <i
          class="form__icon"
          :class="[
            { 'ti-unlock': condition === 'login' },
            { 'ti-user': condition === 'register' }
          ]"
        />

        <form class="form">
          <p class="form__input-title">E-mail</p>
          <app-input-text
            :value="email"
            @input="email = $event"
          />

          <p v-if="condition === 'register'" class="form__input-title">Телефон</p>
          <app-input-text
            v-if="condition === 'register'"
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
          size16px
          uppercase
          center
          @click.native.prevent="login()"
        >Войти</app-button>

        <p class="question">
          Забыли пароль?
          <span
            class="question__action-btn"
            @click="forgotPassword()"
          >Восстановить.</span>
        </p>

        <p class="question">
          Нет аккаунта?
          <span
            class="question__action-btn"
            @click="changeForm()"
          >Зарегистрироваться.</span>
        </p>
      </div>
    </template>
    <!-- <template v-slot:modalFooter>
      <app-button
        successBtn
        uppercase
        class="modal-action-btn mr-auto"
        @click.native="confirm()"
      >Да</app-button>

      <app-button
        dangerBtn
        uppercase
        @click.native="dismiss()"
      >Нет</app-button>
    </template> -->
  </app-modal>
</template>

<script>
import AppModal from '@/components/basic/AppModal'
import AppInputText from '@/components/basic/AppInputText'
import AppButton from "@/components/basic/AppButton"

export default {
  props: {
    value: Boolean,
    condition: String,
  },
  components: {
    AppModal,
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
  methods: {
    confirm () {
      this.$emit('confirm')
    },
    dismiss () {
      this.$emit('dismiss')
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
    // border: 1px solid red;
    text-align: center;
    font-size: 26px;
  }
  .form__icon {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 60px;
  }
  .form {
    // border: 1px solid red;
    padding: 0 10px;
    width: 100%;
    .form__input-title {
      padding: 10px 10px 5px 10px;
      font-size: 14px;
    }
  }
  .question {
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
