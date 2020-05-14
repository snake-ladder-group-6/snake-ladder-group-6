<template>
  <div>
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
    <p>For more information visit website</p>
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
