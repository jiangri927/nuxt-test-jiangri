<template>
  <div class="container mx-auto text-center xl:px-20 py-10">
    <h1 class="p-10 text-red-900 text-lg">Products</h1>
    <select
      v-model="activeCategory"
      name="activeCategory"
      class="w-6/12 mb-8 rounded border"
    >
      <option value="-1">Asll</option>
      <option
        v-for="(category, index) in categories"
        :key="index"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
    <div
      class="
        grid
        lg:grid-cols-4
        md:grid-cols-3
        sm:grid-cols-2
        grid-cols-1
        gap-5
      "
    >
      <div v-for="(product, index) in products" :key="index">
        <div class="w-4/6 md:w-full sm:w-5/6 mx-auto rounded">
          <nuxt-img :src="product.image" class="md:h-52 h-80 sm:h-64 w-full" />
          <div class="bg-gray-500 mix-blend-difference">
            <p class="text-sm">{{ product.name }}</p>
            <h6>${{ product.price }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeCategory: '-1',
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    products() {
      if (this.activeCategory === '-1') return this.$store.state.products
      else
        return this.$store.state.products.filter(
          (product) => product.category === this.activeCategory
        )
    },
  },
  watch: {
    activeCategory(val) {
      this.activeCategory = val
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  },
}
</script>
