export const state = () => {
  return {
    products: [],
    categories: [],
  }
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchProducts(ctx) {
    const { data } = await this.$axios.$get(
      `https://trayvonnorthern.com/Edgewood-API/public/api/products`
    )

    ctx.commit('SET_PRODUCTS', data)
    const uniqueCategories = []

    data.forEach((product) => {
      !uniqueCategories.includes(product.category) &&
        uniqueCategories.push(product.category)
    })
    ctx.commit('SET_CATEGORIES', uniqueCategories)
  },
}
