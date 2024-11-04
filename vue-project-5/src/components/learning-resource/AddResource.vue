<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please try again.</p>
    </template>
    <!-- <template #actions>
      <base-button @click="confirmError">OK</base-button>
    </template> -->
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  name: 'AddResource',
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      inputIsInvalid: false,
    }
  },
  methods: {
    submitData() {
      this.title = this.$refs.title.value
      this.description = this.$refs.description.value
      this.link = this.$refs.link.value
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.inputIsInvalid = true
        return
      } else {
        this.addResource({
          id: new Date().toISOString(),
          title: this.title,
          description: this.description,
          link: this.link,
        })
      }
    },
    confirmError() {
      this.inputIsInvalid = false
    },
  },
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
