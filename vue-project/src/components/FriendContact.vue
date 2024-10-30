<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === true ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible === true ? 'Hide' : 'Show' }} details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite
    },
  },
}
</script>
