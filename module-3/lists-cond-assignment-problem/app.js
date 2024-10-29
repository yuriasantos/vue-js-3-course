const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      taskList: [],
      showList: true
    };
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.taskList.push(this.userInput);
    },
    toggleListView() {
      this.showList = !this.showList
    }
  }
});

app.mount('#assignment')
