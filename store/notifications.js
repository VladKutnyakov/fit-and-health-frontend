export const state = () => ({
  notices: []
})

export const getters = {}

export const mutations = {
  addNewNotice (state, notice) {
    state.notices.push(notice)
  },
  removeNotice (state, noticeId) {
    for (let i = 0; i < state.notices.length; i++) {
      if (state.notices[i].id === noticeId) {
        state.notices.splice(i, 1)
        break
      }
    }
  }
}

export const actions = {}
