<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" id="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" />
    </div>

    <button>Add friend</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      isFavorite: false,
    }
  },
  methods: {
    submitData() {
      this.$emit('add-friend', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        favorite: this.isFavorite,
      })
      this.name = ''
      this.phone = ''
      this.email = ''
    },
  },
}
</script>
