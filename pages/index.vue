<template>
  <div class="container mt-5">
    <form class="row" @submit.prevent="signup">
      <input
        v-model="form.email"
        type="text"
        class="col-6 p-2"
        placeholder="email"
      />
      <input
        v-model="form.name"
        type="text"
        class="col-6 p-2"
        placeholder="name"
      />
      <button class="btn-block btn-secondary p-2">submit</button>
    </form>
    <div class="mt-5">
      <div class="container">
        <p v-if="user.email">Email: {{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {}
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async signup() {
      if (this.form.email && this.form.name) {
        const data = await axios.post(
          "https://dayjoi8tle.execute-api.us-east-1.amazonaws.com/dev/users/create",
          // "http://localhost:4000/dev/users/create",
          this.form
        );
        console.log("data==>>", data);
        this.$store.dispatch("setUser", { user: data.response });
      }
    }
  },
  async mounted() {
    await this.signup();
    console.log("user==>>", this.user);
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
