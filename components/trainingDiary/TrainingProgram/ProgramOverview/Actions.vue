<template>
  <div class="actions">
    <app-tooltip width="200px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn">
          <i class="ti-control-play"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Начать тренировку</p>
      </template>
    </app-tooltip>

    <app-tooltip width="150px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn">
          <i class="ti-search"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Подробнее</p>
      </template>
    </app-tooltip>

    <app-tooltip class="mt-auto" width="120px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn action-btn--social action-btn--social-like">
          <i class="ti-heart"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Нравится</p>
      </template>
    </app-tooltip>

    <app-tooltip width="140px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn action-btn--social action-btn--social-dislike">
          <i class="ti-heart-broken"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Не нравится</p>
      </template>
    </app-tooltip>

    <app-tooltip width="140px" right info textAlignCenter >
      <template v-slot:tooltipElement>
        <div class="action-btn action-btn--social action-btn--social-share action-btn--last">
          <i class="ti-share"></i>
        </div>
      </template>
      <template v-slot:tooltipText>
        <p>Поделиться</p>
      </template>
    </app-tooltip>
  </div>
</template>

<script>
import AppTooltip from '@/components/basic/AppTooltip'

export default {
  components: {
    AppTooltip
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.actions {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: $hiddenBlockBG;
  .action-btn {
    margin-bottom: 10px;
    padding: 5px;
    font-size: 20px;
    transition: $tr-02;
    cursor: pointer;
  }
  .action-btn:hover {
    color: $green;
  }
  .action-btn--remove:hover {
    color: $red;
  }
  .action-btn--social {
    color: $black40;
  }

  .action-btn--social-like:hover {
    color: $green;
  }
  .action-btn--social-dislike:hover {
    color: $red;
  }
  .action-btn--social-share:hover {
    color: $black;
  }

  .action-btn--social-like-active {
    color: $green;
  }
  .action-btn--social-dislike-active {
    color: $red;
  }
  .action-btn--social-share-active {
    color: $black;
  }
  .action-btn--last {
    margin-bottom: 0;
  }
}

</style>
