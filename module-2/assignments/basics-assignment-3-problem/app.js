const app = Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  watch: {
    output() {
      const that = this;
      setTimeout(() => {
        that.result = 0;
      }, 5000);
    }
  },
  computed: {
    output() {
      if (this.result < 37) {
        return 'Not there yet';
      } else if (this.result === 37) {
        return this.result;
      } else {
        return 'Too much!';
      }
    }
  },
  methods: {
    add(value) {
      this.result += value
    }
  }
});

app.mount('#assignment');
