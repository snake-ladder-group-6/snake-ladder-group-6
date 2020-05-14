<template>
<div>
    <div>
          <b-button variant="outline-danger">Sign Out</b-button>
  <b-jumbotron header="Snake Ladder" lead="This app created by group 6 ">
    <p>Find your room and win it!</p>
    <form>
        <select variant="primary">
          <option value="abu nawas">abu nawas</option>
          <option value="abu">abu</option>
          <option value="abu hijrah">abu hijrah</option>
        </select><br><br>
        <div class="button">
          <b-button variant="outline-primary" @click="join">Join</b-button>
        </div>
    </form>
  </b-jumbotron>
</div>
</div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Dashboard',
  methods: {
    join () {
      socket.emit('join', {
        userToken: localStorage.access_token
      })
    }
  }
}
</script>

<style>
.button {
    display: flex;
    justify-content: center;
}
</style>
