<template>
  <base-card>
    <base-button
      @click="setSelectTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored resources</base-button
    >
    <base-button @click="setSelectTab('add-resource')" :mode="addResButtonMode"
      >Add resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  name: 'TheResources',
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: '1',
          title: 'Vue.js Official Guide',
          description: 'The Official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: '2',
          title: 'Google',
          description: "Google's official website.",
          link: 'https://google.com',
        },
      ],
    }
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    }
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? '' : 'flat'
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? '' : 'flat'
    },
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab
    },
    addResource(newResource) {
      this.storedResources.unshift(newResource)
      this.setSelectTab('stored-resources')
    },
    removeResource(id) {
      const resIndex = this.storedResources.findIndex(res => res.id === id)
      this.storedResources.splice(resIndex, 1)
    },
  },
}
</script>
