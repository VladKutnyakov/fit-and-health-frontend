<template>
  <div class="current-page-info">
    <app-page-info
      :infoElements="pageInfo"
      btnTitle="Создать альбом"
      @btnAction="openModal()"
    />

    <app-modal :isActive="modalActive" @close="closeModal()">
      <template v-slot:modalHeader>
        <p class="header__title">Создать альбом</p>
        <div class="header__description">
          <p class="description__text">Заполните форму и нажмите "Создать альбом", что бы добавить новый альбом свой список.</p>
        </div>
      </template>
      <template v-slot:modalContent>
        <div class="content__add-product-form">
          Настроки для создания нового альбома
        </div>
      </template>
      <template v-slot:modalButton>
        <app-button uppercase size14px @click.native="closeModal()">Отмена</app-button>
        <app-button
          uppercase
          size14px
          class="modal-action-btn"
          @click.native="saveNewAlbum()"
        >Создать альбом</app-button>
      </template>
    </app-modal>
  </div>
</template>

<script>
import AppPageInfo from '@/components/basic/AppPageInfo'
import AppModal from "@/components/basic/AppModal"
import AppButton from "@/components/basic/AppButton"

export default {
  components: {
    AppPageInfo,
    AppModal,
    AppButton
  },
  data () {
    return {
      pageInfo: [
        {
          title: 'Всего альбомов',
          value: 10
        },
        {
          title: 'Избранные альбомы',
          value: 0
        }
      ],
      modalActive: false
    }
  },
  methods: {
    openModal () {
      this.modalActive = true
    },
    closeModal () {
      this.modalActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.current-page-info {
  flex: 1 1 auto;
}

</style>
