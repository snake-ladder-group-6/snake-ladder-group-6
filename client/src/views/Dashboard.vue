<template>
  <Dashboard></Dashboard>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'DashboardViews',
  components: {
    Dashboard
  },
  created () {
    // if (!localStorage.access_token) {
    //   this.$router.push({ path: '/' })
    // }
  }
}
</script>

<style>
</style>
