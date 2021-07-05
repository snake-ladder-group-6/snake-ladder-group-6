<template>
  <b-button variant="outline-danger" @click="logout">Log Out</b-button>
</template>

<script>
export default {
  name: 'LogOut',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
