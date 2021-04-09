<template>
  <div class="users-raiting">
    <app-block-title>Рейтинг пользователей</app-block-title>

    <div class="users-raiting__content">
      <div class="users-raiting__actions">
        <i class="ti-arrow-up action-btn"></i>
        <i class="ti-arrow-down action-btn"></i>
        <i class="ti-reload action-btn"></i>
      </div>
      <ul class="users-raiting__list">
        <li class="list__item">
          <user-card v-for="(item, index) in 6" :key="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppBlockTitle from "@/components/basic/AppBlockTitle"
import UserCard from "@/components/challenges/AdditionalInfo/UsersRaiting/UserCard"

export default {
  components: {
    AppBlockTitle,
    UserCard
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

  .users-raiting {
    margin-bottom: 20px;
    .users-raiting__content {
      display: flex;
      flex-direction: column;
      background: $white;
      border: 1px solid $blockBorder;
      border-radius: 6px;
      .users-raiting__actions {
        display: flex;
        align-items: center;
        padding: 10px;
        background: $hiddenBlockBG;
        .action-btn {
          padding: 5px;
          font-size: 20px;
        }
        .action-btn:last-child {
          margin-left: auto;
        }
      }
      .users-raiting__list {
        // border: 1px solid red;
        padding: 10px;
        .list__item {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
