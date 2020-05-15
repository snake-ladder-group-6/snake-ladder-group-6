<template>
  <div>
  <div v-if="success">
    <b-alert variant="success" show>Success Alert</b-alert>
  </div>
  <h1>Create New Room</h1>
  <div>
    <b-form @submit.stop.prevent>
      <label for="text-password">Create Room</label>
      <b-input id="text-password" aria-describedby="password-help-block" v-model="roomName"></b-input>
      <b-form-text id="password-help-block">
        Make sure your room's name is unique
      </b-form-text><br><br>
      <div ></div>
      <b-button variant="success" @click="onSubmit">Create</b-button>
    </b-form>
  </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'FormRoom',
  data () {
    return {
      success: false,
      roomName: ''
    }
  },
  methods: {
    successCreated () { this.success = true },
    onSubmit () {
      socket.emit('add-room', {
        roomName: this.roomName,
        access_token: localStorage.access_token
      })
      // io.on('roomCreated', room)
      this.roomName = ''
      this.$router.push({ path: '/boarding' })
    }
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}
</style>
