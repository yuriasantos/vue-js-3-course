<template>
  <ul>
    <li :class="{ active: modelValue == 'poor' }">
      <button type="button" @click="setActive('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue == 'average' }">
      <button type="button" @click="setActive('average')">Average</button>
    </li>
    <li :class="{ active: modelValue == 'great' }">
      <button type="button" @click="setActive('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RatingControl',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     active: this.modelValue,
  //   }
  // },
  // computed: {
  //   active() {
  //     return this.modelValue
  //   },
  // },
  methods: {
    setActive(option) {
      this.$emit('update:modelValue', option)
    },
  },
}
</script>

<style scoped>
.active {
  border-color: #cb88ff;
}

.active button {
  color: #cb88ff;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 0.5rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
}
</style>
