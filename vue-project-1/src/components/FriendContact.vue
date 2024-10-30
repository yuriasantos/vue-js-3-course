<template>
  <li>
    <h2>{{ name }} {{ isFavorite === true ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible === true ? 'Hide' : 'Show' }} details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>{{ phoneNumber }}</li>
      <li>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return typeof value === 'boolean'
      },
    },
  },
  emits: {
    'toggle-favorite': function (id) {
      if (id) {
        return true
      } else {
        console.warn('No id provided. Cannot toggle favorite status.')
        return false
      }
    },
    'delete-friend': function (id) {
      if (id) {
        return true
      } else {
        console.warn('No id provided. Cannot toggle favorite status.')
        return false
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
  },
}
</script>
