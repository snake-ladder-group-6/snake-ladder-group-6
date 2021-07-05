<template>
  <div>
    <b-jumbotron header="Snake Ladder" lead="This app created by Group 6">
    <p>Role your dice and win it!</p>
    <b-button variant="primary" href="#" @click="login">Log In</b-button><br>
    <b-button variant="primary" href="#" @click="register">Register</b-button>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    login () { this.$router.push({ path: '/login' }) },
    register () { this.$router.push({ path: '/register' }) }
  }
}
</script>

<style>
</style>
