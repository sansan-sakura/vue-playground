const app = Vue.createApp({
  data() {
    return {
      title: "Harry Potter",
      age: 0,
      showbooks: false,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Narnia";
    },
    toggleBooks() {
      this.showbooks = !this.showbooks;
    },
  },
});
app.mount("#app");
