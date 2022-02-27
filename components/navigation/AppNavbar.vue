<template>
  <nav class="navbar" :class="[{ 'navbar--active': menuIsOpen }]">
    <div class="navbar__group" v-for="(group, index) in navbarGroups" :key="index">
      <p class="group__title">{{ group.title }}</p>
      <ul class="group__menu-list">
        <li class="menu-list__item" v-for="(linkItem, linkIndex) in group.links" :key="linkIndex">
          <nuxt-link
            :to="linkItem.link"
            :exact="linkItem.exact"
            no-prefetch
            active-class="item__link--active"
            :title="linkItem.title"
            class="item__link"
          >
            <i class="link__icon" :class="linkItem.icon"></i>
            <span class="link__text">{{ linkItem.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      navbarGroups: [
        {
          title: 'Профиль',
          links: [
            {
              title: 'Моя страница',
              link: '/profile',
              icon: 'ti-home',
              exact: true,
            },
            {
              title: 'Сообщения',
              link: '/profile/messages',
              icon: 'ti-comments',
              exact: true
            },
            {
              title: 'Фото и видео',
              link: '/profile/media',
              icon: 'ti-gallery',
              exact: false
            },
            {
              title: 'Интересные страницы',
              link: '/profile/subscriptions',
              icon: 'ti-crown',
              exact: true
            },
            {
              title: 'Статистика и замеры',
              link: '/profile/measurements',
              icon: 'ti-bar-chart',
              exact: true
            },
          ],
        },
        {
          title: 'Тренировки',
          links: [
            {
              title: 'Дневник тренировок',
              link: '/training-diary',
              icon: 'ti-timer',
              exact: true,
            },
            {
              title: 'Новая тренировка',
              link: '/training-diary/training-in-progress',
              icon: 'ti-bolt',
              exact: false
            },
            {
              title: 'Программы тренировок',
              link: '/training-programs',
              icon: 'ti-clipboard',
              exact: false
            },
            {
              title: 'Справочник по упражнениям',
              link: '/exercise-guide',
              icon: 'ti-headphone-alt',
              exact: false
            },
          ],
        },
        {
          title: 'Питание',
          links: [
            {
              title: 'Дневник питания',
              link: '/meal-planer',
              icon: 'ti-agenda',
              exact: true,
            },
            {
              title: 'Сохраненные рационы',
              link: '/meal-plans',
              icon: 'ti-write',
              exact: false
            },
            {
              title: 'Книга рецептов',
              link: '/recipes-book',
              icon: 'ti-book',
              exact: false
            },
            {
              title: 'Таблица калорийности продуктов',
              link: '/food-calorie-table',
              icon: 'ti-view-list-alt',
              exact: false
            }
          ],
        },
        {
          title: 'Вызовы',
          links: [
            {
              title: 'Вызовы недели',
              link: '/challenges',
              icon: 'ti-cup',
              exact: true,
            },
            {
              title: 'Поиск вызывов',
              link: '/challenges/challenges-book',
              icon: 'ti-book',
              exact: true
            },
            {
              title: 'Конструктор вызывов',
              link: '/challenges/challenges-book/challenge-editor',
              icon: 'ti-layout',
              exact: true
            },
            {
              title: 'Статистика по вызовам',
              link: '/challenges/challenge-in-progress',
              icon: 'ti-bolt',
              exact: true
            },
          ],
        },
        {
          title: 'Справочник',
          links: [
            {
              title: 'Основные разделы',
              link: '/handbook',
              icon: 'ti-bookmark-alt',
              exact: true,
            }
          ],
        },
      ],
    }
  },
  computed: {
    ...mapState({
      menuIsOpen: state => state.appSettings.menuIsOpen,
    })
  },
  watch: {
    $route(to, from) {
      //
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.navbar {
  // border: 1px solid red;
  position: fixed;
  top: 60px;
  left: -260px;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: calc(100vh - 60px);
  padding-bottom: 20px;
  background: $white;
  box-shadow: 0 4px 24px 0 rgba(34,41,47,.1);
  transition: $tr-02;
  z-index: 9000;
  overflow-y: auto;
  .navbar__group {
    display: flex;
    flex-direction: column;
    .group__title {
      align-self: flex-start;
      margin: 20px 20px 10px 20px;
      text-transform: uppercase;
      color: #a6a4b0;
      // font-weight: 300;
      font-size: 12px;
    }
    .group__menu-list {
      display: flex;
      flex-direction: column;
      .menu-list__item {
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        border-radius: 6px;
        .item__link {
          display: flex;
          align-items: flex-start;
          margin-bottom: 5px;
          padding: 10px;
          background: $white;
          border-radius: 6px;
          .link__icon {
            margin-top: 1px;
            margin-right: 10px;
            font-size: 18px;
          }
          .link__text {}
        }
        .item__link:hover {
          background: $primaryLight5;
          .link__icon {
            color: $primary;
          }
          .link__text {
            color: $primary;
          }
        }
        .item__link--active {
          background: $primaryGradient;
          box-shadow: 0 0 5px 1px rgba(115,103,240,.7);
          z-index: 10;
          .link__icon {
            color: $white;
          }
          .link__text {
            color: $white;
          }
        }
        .item__link--active:hover {
          background: $primaryGradient;
          .link__icon {
            color: $white;
          }
          .link__text {
            color: $white;
          }
        }
      }
    }
  }
}
.navbar--active {
  left: 0;
}

.navbar::-webkit-scrollbar {
  width: 4px;
}
.navbar::-webkit-scrollbar-thumb {
  background: $primaryLight4;
  border-radius: 50px;
}
.navbar::-webkit-scrollbar-track {
  background: $black10;
}

</style>
