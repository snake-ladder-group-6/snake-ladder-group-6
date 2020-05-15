<template>
  <div>
    <b-jumbotron header="Waiting Room" lead="Please wait a second ..."><br><br>
    <div>
      <p v-for="(player, i) in listPlayer" :key="i">{{ player }}</p>
    </div><br><br>
    <b-button type="submit" variant="success" @click="main">Start</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
// import io from 'socket.io-client'
// const socket = io.connect('http://localhost:3000')

export default {
  name: 'boarding',
  methods: {
    main () {
      this.$router.push({ path: '/main-page' })
    }
  },
  computed: {
    listPlayer () { return this.$store.state.listPlayer }
  },
  created () {
    if (!localStorage.access_token) {
      // socket.emit('showAllRoom')
      // socket.on('rooms', (rooms) => {
      //   this.rooms = rooms
      // })
      // this.$router.push({ path: '/login' })
    }
    // else {
    // }
  }
}
</script>

<style>
</style>
