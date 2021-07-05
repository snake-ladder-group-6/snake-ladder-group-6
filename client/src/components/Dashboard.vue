<template>
<div>
    <div>
      <nav><LogOut></LogOut></nav>
      <b-jumbotron header="Snake Ladder" lead="This app created by group 6 ">
      <p>Find your room and win it!</p>
      <form>
        <select variant="primary">
          <option  value=null>SELECT</option>
          <option  v-for="(room, i) in rooms" :key="i" :v-model="room">{{ room.name }}</option>
        </select><br><br>
        <b-button variant="outline-primary" @click="join">Join</b-button><br><br>
        <b-button variant="outline-primary" @click="addRoom">Create new room</b-button>
      </form>
      </b-jumbotron>
    </div>
</div>
</template>

<script>
import LogOut from './LogOut'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Dashboard',
  data () {
    return {
      rooms: [],
      room: []
    }
  },
  components: {
    LogOut
  },
  methods: {
    join () {
      socket.emit('join-room', {
        access_token: localStorage.access_token,
        RoomId: this.room.id
      })
      this.$router.push({ path: '/boarding' })
    },
    addRoom () {
      this.$router.push({ path: '/add-room' })
    }
  },
  created () {
    if (localStorage.access_token) {
      socket.emit('showAllRoom')
      socket.on('rooms', (rooms) => {
        this.rooms = rooms
      })
    } else {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
</style>

// login -> username, password client
// login -> username, password server
// generate token server
