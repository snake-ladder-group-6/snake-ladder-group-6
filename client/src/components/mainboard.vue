<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div id="top">
                        <div id="logo">
                            <h2 class="display-3"
                            id="logoTitle"
                            >
                                Snake Ladder
                            </h2>
                        </div>
                        <div class="subtitle">
                            <h3 id="sub" > Role your dice and win it! </h3>
                        </div> <br>
                        <div
                        v-for="(user,i) in roomData" :key="i"
                        >
                        <h5> Player {{ i + 1 }} : {{ user }}</h5>
                        </div>
                    </div>
                    <div id="middle">
                        <div class="dicebox">
                            <div id="dice">
                                <h1 class="display-2">
                                    {{ diceNum }}
                                </h1>
                            </div>
                        </div>
                        <div class="btnRole">
                            <h4 v-if="turn<=roomData.length"> Player {{turn}} Turn </h4>
                            <h4 v-if="turn>roomData.length"> Player 1 Turn </h4>
                            <b-btn class="btn btn-light btn-block" @click.prevent="roleDice" v-if="!u1.win && u1.turn === true">
                                ROLE
                            </b-btn>
                            <b-btn class="btn btn-light btn-block" @click.prevent="roleDice" v-if="!u2.win && u2.turn === true">
                                ROLE
                            </b-btn>
                            <b-btn class="btn btn-light btn-block" @click.prevent="roleDice" v-if="!u3.win && u3.turn === true">
                                ROLE
                            </b-btn>
                            <b-btn class="btn btn-light btn-block" @click.prevent="roleDice" v-if="!u4.win && u4.turn === true">
                                ROLE
                            </b-btn>
                        </div>
                    </div>
                    <!-- <div id="bottom">
                        <div>
                            <h3 class="display-4">
                                Players
                            </h3>
                        </div>
                        <div id="playerbox">
                            player box
                        </div>
                    </div> -->
                </div>
                <div class="col-8">
                    <div
                    id="board"
                    v-for="(number,i) in board" :key="i"
                    >
                        <div
                        v-for="(val,j) in number" :key="j"
                        >
                            <box
                            :val="val"
                            :u1="u1"
                            :u2="u2"
                            :u3="u3"
                            :u4="u4"
                            ></box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import board from './script/board'
import box from './main_comp/box'
import socket from './config/socket.js'
export default {
  name: 'mainboard',
  components: {
    box
  },
  data () {
    return {
      board,
      u1: {
        player: 1,
        pos: 0,
        win: false,
        turn: true
      },
      u2: {
        player: 2,
        pos: 0,
        win: false,
        turn: false
      },
      u3: {
        player: 3,
        pos: 0,
        win: false,
        turn: false
      },
      u4: {
        player: 4,
        pos: 0,
        win: false,
        turn: false
      },
      diceNum: 0,
      turn: 1,
      placement: []
    }
  },
  computed: {
    roomData () {
      return this.$store.state.listPlayer
    }
  },
  methods: {
    roleDice () {
      let user = ''
      if (this.turn > this.roomData.length) {
        user = this.u1
        this.turn = 1
        this.u2.turn = false
        this.u3.turn = false
        this.u4.turn = false
        this.u1.turn = true
        this.turn++
      } else if (this.turn === 1) {
        user = this.u1
        this.u1.turn = true
        this.turn++
      } else if (this.turn === 2) {
        user = this.u2
        this.u1.turn = false
        this.u2.turn = true
        this.turn++
      } else if (this.turn === 3) {
        user = this.u3
        this.u1.turn = false
        this.u2.turn = false
        this.u3.turn = true
        this.turn++
      } else if (this.turn === 4) {
        user = this.u4
        this.u1.turn = false
        this.u2.turn = false
        this.u3.turn = false
        this.u4.turn = true
        this.turn++
      }

      const random = Math.ceil(Math.random() * 6)
      const delay = random * 600
      this.diceNum = 0
      this.diceNum = random
      let step = 0
      let forward = true
      const newPosition = this.diceNum + user.pos
      socket.emit('sendDiceNum', newPosition, user.player)
      // movo forward
      var move = setInterval(() => {
        if (forward) {
          user.pos++
          if (user.pos > 99) {
            forward = false
          }
        } else {
          user.pos--
        }
        step++

        if (step === this.diceNum) {
          console.log(user.pos)
          socket.on('newPos', (position, id) => {
            // console.log(position)
            // user.pos = position
          })
          clearInterval(move)
        }
      }, 600)
      setTimeout(() => {
      // winner flag
        if (user.pos > 100) {
          const sisa = user.pos - 100
          user.pos = 100 - sisa
        } else if (user.pos === 100) {
          user.win = true
        }
      }, delay)
    }
  },
  created () {
    // this.roomData = [
    //     { username  }
    // ]
  //  socket.on('sendRoomData',(data)=>{
  //      this.roomData = data
  //  })
  }
}
</script>

<style scoped>

.container-fluid {
  height: 100%;
  width: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
}

#ui {
    height: 700px;
    width: 100%;

}

#board {
    background: yellow;
    background-image: url('./assets/img/bg.png');
    height: 700px;
    width: 705px;
    display: flex;
    flex-wrap: wrap;
    border: 2.5px solid yellow;

}

#top, #middle , #bottom {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.dicebox {
    width: 100px;
    height: 120px;
    background:transparent;
    margin-bottom: 20px;
    margin-top: 50px;
    text-align: center;
}

.btnRole {
    width: 200px;
    height: 60px;
}

#playerbox {
    height: 100px;
    width: 300px;
    background: yellow;
}

#dice {
    text-align: center;
}

div {
  margin: 0;
  padding: 0;
}

#logoTitle , #sub , #dice , .dicebox , .btnRole {
  color: yellow;
}

</style>
