<template>
  <app-modal
    :isActive="value"
    width="300px"
    @close="dismiss()"
  >
    <template v-slot:modalContent>
      <div class="content__confirm">
        <i class="ti-help-alt confirm__icon"></i>
        <p class="confirm__message">{{ confirmMessage }}</p>
      </div>
    </template>
    <template v-slot:modalFooter>
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
    </template>
  </app-modal>
</template>

<script>
import AppModal from "@/components/basic/AppModal"
import AppButton from "@/components/basic/AppButton"

export default {
  props: {
    value: Boolean,
    confirmMessage: String,
  },
  components: {
    AppModal,
    AppButton
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

.content__confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  .confirm__icon {
    color: $warning;
    font-size: 60px;
  }
  .confirm__message {
    margin-top: 40px;
    text-align: center;
    font-size: 18px;
  }
}

</style>
