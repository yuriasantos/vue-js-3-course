<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <!-- <router-link :to="'/teams/t2'">Go to Teams 2</router-link> -->
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue'

export default {
  inject: ['users', 'teams'],
  props: {
    teamId: {
      type: String,
      required: true,
    },
  },
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    }
  },
  methods: {
    fetchData(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId)
      const selectedMembers = selectedTeam.members.map((memberId) => {
        return this.users.find((user) => user.id === memberId)
      })
      this.members = selectedMembers
      this.teamName = selectedTeam.name
    },
  },
  created() {
    this.fetchData(this.teamId)
  },
  watch: {
    teamId(newId) {
      this.fetchData(newId)
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
}
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
