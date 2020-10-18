<template>
  <div class="container mt-5">
    <form class="row" @submit.prevent="signup">
      <input v-model="form.email" type="text" class="col-6 p-2" placeholder="email">
      <input v-model="form.password" type="text" class="col-6 p-2" placeholder="password">
      <button class="btn-block btn-secondary p-2">submit</button>
    </form>
    <div class="mt-5" v-if="returned">
      <div class="container">
          <p>Email: {{ returned.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      form: {},
      returned : ''
    }
  },
  methods: {
    async signup() {
      const { data } = await axios.post('https://dayjoi8tle.execute-api.us-east-1.amazonaws.com/dev/users/create', this.form)
      // const {data} = await axios.post('http://localhost:4000/dev/users/create', this.form)
      this.returned = data.response
    }
  }
}
</script>

<style>


.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
