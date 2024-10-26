const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      if (this.name === '') {
        return '';
      }
      else {
        return this.name + ' ' + 'Doe';
      }
    },
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      else {
        return this.name + ' ' + 'Doe';
      }
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
