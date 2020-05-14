<template>
  <div>
  <div v-if="success">
    <b-alert variant="success" show>Success Alert</b-alert>
  </div>
  <div>
    <b-form @submit.stop.prevent>
      <label for="text-password">Create Room</label>
      <b-input id="text-password" aria-describedby="password-help-block"></b-input>
      <b-form-text id="password-help-block">
        Make sure your room's name is unique
      </b-form-text><br><br>
      <b-button variant="success">Create</b-button>
    </b-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FormRoom',
  data () {
    return {
      success: false
    }
  },
  methods: {
    successCreated () {
      this.success = true
      // setTimeout(
      //   (this.success = false),
      //   2000
      // )
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
