<template>
  <button @click="confirm">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../users/UserItem.vue'

export default {
  data() {
    return {
      changesSaved: false,
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirm() {
      console.log('Confirmed!')
      this.$router.push('/teams')
    },
    saveChanges() {
      this.changesSaved = true
    },
  },
  beforeRouteEnter(_, _2, next) {
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    if (this.changesSaved) {
      next()
    } else {
      const confirmed = window.confirm('Are you sure you want to leave?')
      if (confirmed) {
        next()
      } else {
        next(false)
      }
    }
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
