import { setForm, clearForm, setFormFieldValue, setFormFieldError } from '@/utils/formManager'

export default {

  setPageInfo (state, payload) {
    state.pageInfo = payload
  },

  setSearchFiltersParam (state, ctx) {
    state.searchFilters[ctx.param] = ctx.newValue
  },

  setProductCategories (state, payload) {
    state.productCategories = payload
  },

  setProductsList (state, payload) {
    payload.forEach(element => {
      if (element.pinned) {
        state.pinnedProducts.push(element)
      } else {
        state.notPinnedProducts.push(element)
      }
    })
  },
  cleanProductsList (state) {
    state.pinnedProducts = []
    state.notPinnedProducts = []
  },

  changeProductWeight (state, { item, newWeight }) {
    if (item.pinned) {
      for (let i = 0; i < state.pinnedProducts.length; i++) {
        if (state.pinnedProducts[i].id === item.id) {
          state.pinnedProducts[i].weight = newWeight
          break
        }
      }
    } else {
      for (let i = 0; i < state.notPinnedProducts.length; i++) {
        if (state.notPinnedProducts[i].id === item.id) {
          state.notPinnedProducts[i].weight = newWeight
          break
        }
      }
    }
  },

  setProductForm (state, payload) {
    setForm(state.productForm, payload)
  },
  clearProductForm (state) {
    clearForm(state.productForm)
  },

  setProductFormFieldValue (state, ctx) {
    setFormFieldValue(state.productForm, ctx)
  },
  setProductFormFieldError (state, ctx) {
    setFormFieldError(state.productForm, ctx)
  },

  setModalCondition (state, condition) {
    state.modalCondition = condition
  },

  setWaiteProductsListUpdate (state, condition) {
    state.waiteProductsListUpdate = condition
  },

  toggleModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
