<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Snake and Ladder</template>

      <template v-slot:lead>
        This is such a simple game
      </template>

      <hr class="my-4" />

      <p>
       Go!! LogIn, release your stressed !!
      </p>
      <b-button variant="primary" href="#" id="login" v-on:click="LogIn">Log In</b-button>
      <b-button variant="success" href="#" id="register" v-on:click="Register">Register</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    LogIn () {
      this.$router.push({ path: '/login' })
    },
    Register () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style>
#login{
  margin-right : 20px;
}
</style>
