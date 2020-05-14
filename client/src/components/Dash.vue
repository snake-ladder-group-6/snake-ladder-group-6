<template>
<div id="dash">
<b-button variant="outline-primary" v-on:click="addRoom">Create Room</b-button>
<b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>Room1</b-dropdown-item>
    <b-dropdown-item>Room2</b-dropdown-item>
    <b-dropdown-item>Room3</b-dropdown-item>
  </b-dropdown>
<b-button variant="success" v-on:click="joint">Joint</b-button>
<b-button variant="danger" id="logout" v-on:click="logOut">Log Out</b-button>
</div>
</template>

<script>
export default {
  name: 'Dash',
  methods: {
    addRoom () {
      this.$router.push({ path: '/add-room' })
    },
    joint () {
      this.$router.push({ path: '/main' })
    },
    logOut () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
#dash{
display: flex;
justify-content: center;
align-items: center;
}
#logout{
margin-left: 10px;
}
</style>
