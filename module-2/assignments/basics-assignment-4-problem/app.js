const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
      classArray: ['', ''],
      clicked: false,
      userColor: '',
    };
  },

  computed: {
    output() {
      if (this.confirmedInput === 'user1') {
        this.classArray[0] = 'user1';
      } else if (this.confirmedInput === 'user2') {
        this.classArray[0] = 'user2';
      } else {
        this.classArray[0] = '';
      }
      return this.classArray;
    }
  },

  methods: {
    getInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
    toggle() {
      this.clicked ? this.classArray[1] = 'visible' : this.classArray[1] = 'hidden';
      this.clicked = !this.clicked;
    }
  }
});

app.mount('#assignment');
