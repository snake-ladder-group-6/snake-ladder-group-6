<template>
  <div id="box">
      <h4 class="num">
          {{ val }}
      </h4>
      <div class="charwarp" v-if="u1.pos==val">
        <img src="../assets/img/red.png" alt="" class="char" >
      </div>
      <div class="charwarp" v-if="u2.pos==val">
        <img src="../assets/img/blue.png" alt="" class="char" >
      </div>
      <div class="charwarp" v-if="u3.pos==val">
        <img src="../assets/img/yellow.png" alt="" class="char" >
      </div>
      <div class="charwarp" v-if="u4.pos==val">
        <img src="../assets/img/purple.png" alt="" class="char" >
      </div>
      <div class="charwarp" v-if="u5.pos==val">
        <img src="../assets/img/cyan.png" alt="" class="char" >
      </div>
      <div class="charwarp" v-if="u6.pos==val">
        <img src="../assets/img/green.png" alt="" class="char" >
      </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['val', 'u1', 'u2', 'u3', 'u4', 'u5', 'u6'],
  created () {
  }
}
</script>

<style scoped>

#box {
    width: 70px;
    height: 70px;
    background: transparent;
    border: 2.5px solid yellow;
}

.num {
    color: yellow;
    /* margin: 2px 5px; */
}

.char {
    width: 70%;
    height: 70%;
    z-index: 1;
    margin-top: -50px;
}
.charwarp {
    display: flex;

}

</style>
