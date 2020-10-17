<template>
  <div class="container">
    <form class="row" @submit.prevent="signup">
      <input v-model="form.email" type="text" class="col-6 p-2" placeholder="email">
      <input v-model="form.password" type="text" class="col-6 p-2" placeholder="password">
      <button class="btn-block btn-secondary p-2">submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      form: {},
      returned : {}
    }
  },
  methods: {
    async signup() {
      const res = await axios.post('https://dayjoi8tle.execute-api.us-east-1.amazonaws.com/dev/users/create', this.form)
      console.log('res==>>', res)
      this.returned = {}
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
