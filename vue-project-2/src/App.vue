<template>
  <div class="flex-container">
    <div class="flex-child">
      <user-data @create-user="createUser"></user-data>
    </div>
    <div class="flex-child">
      <active-user
      v-for="user in users"
      :key="user.username"
      v-bind="user"
      ></active-user>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: [],
    }
  },
  methods: {
    createUser(user) {
      this.users.push(user)
    },
  },
}
</script>

<style>
.flex-container {
    display: flex;
}
.flex-child {
    flex: 1;
    border: 2px solid red;
}
.flex-child:first-child {
    margin-right: 20px;
}
</style>
