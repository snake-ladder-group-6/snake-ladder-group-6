<template>
  <div>
    <b-container class="mb-3">
      <b-form  @submit.stop.prevent>
        <label for="feedback-user">password</label>
        <b-input v-model="username" :state="usernameStatus" id="feedback-user"></b-input>
        <b-form-invalid-feedback class="remainder" :state="usernameStatus">
          Your user ID must be 5 - 12 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback class="remainder" :state="usernameStatus">
          Looks Good.
        </b-form-valid-feedback><br> <!-- line  -->
        <label for="feedback-user">password</label>
        <b-input type="password" v-model="password" :state="passwordStatus" id="feedback-user"></b-input>
        <b-form-invalid-feedback class="remainder" :state="passwordStatus">
          Your user ID must be 5 - 12 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback class="remainder" :state="passwordStatus">
          Looks Good.
        </b-form-valid-feedback><br>
        <b-button type="submit" variant="success">submit</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'FormRegister',
  data () {
    return {
      username: '',
      password: '',
      usernameStatus: null,
      passwordStatus: null
    }
  },
  computed: {
    validationUsername () { return this.username.length > 4 && this.username.length < 13 },
    validationPassword () { return this.password.length > 4 && this.password.length < 13 }
  },
  watch: {
    username () { this.usernameStatus = this.validationUsername },
    password () { this.passwordStatus = this.validationPassword }
  }
}
</script>

<style>
* {
  margin-left: auto;
  margin-right: 2.5vw;
  margin-top: 2vw;
  text-align: center;
}
.remainder {
  margin-left: auto;
}
</style>
