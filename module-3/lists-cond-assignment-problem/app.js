const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      taskList: [],
      showList: true
    };
  },
  methods: {
    addTask() {
      this.taskList.push(this.userInput);
    },
    removeTask(index) {
      this.taskList.splice(index, 1);
    },
    toggleListView() {
      this.showList = !this.showList
    }
  }
});

app.mount('#assignment')
