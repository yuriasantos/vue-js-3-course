const app = Vue.createApp({
  data() {
    return {
      alertMessage: 'Alert!',
      userInput1: '',
      userInput2: '',
      confirmedInput: ''
    }
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    getInput1(event) {
      this.userInput1 = event.target.value;
    },
    getInput2(event) {
      this.userInput2 = event.target.value;
    },
    showInput() {
      this.confirmedInput = this.userInput2;
    }
  }
});

app.mount('#assignment');
