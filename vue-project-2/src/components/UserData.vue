<template>
  <label for="username">Username: </label>
  <input type="text" id="username" v-model="username">
  <br>
  <label for="age">Age: </label>
  <input type="text" id="age" v-model="age">
  <br>
  <button @click="createUser">Submit</button>
</template>

<script>
export default {
  name: 'UserData',
  emits: ['create-user'],
  data() {
    return {
      username: '',
      age: ''
    }
  },
  methods: {
    createUser() {
      this.$emit('create-user', {
        username: this.username,
        age: +this.age
      });
      this.username = '';
      this.age = '';
    }
  }
}
</script>
