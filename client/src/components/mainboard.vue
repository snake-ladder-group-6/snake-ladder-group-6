<template>
    <b-container fluid id="outside">
        <b-container>
            <b-row>
                <b-col cols="4">
                    <div id="top">
                        <div id="logo">
                            <h1 class="display-1">
                                logo
                            </h1>
                        </div>
                        <div class="subtitle">
                            <h3>this is game subtitle</h3>
                        </div>
                    </div>
                    <div id="middle">
                        <!-- <div>
                        <label for=""> user 1 : </label>
                        <input type="text" v-model="u1.pos"> <br>
                        <label for=""> user 2 : </label>
                        <input type="text" v-model="u2.pos"> <br>
                        <label for=""> user 3 : </label>
                        <input type="text" v-model="u3.pos"> <br>
                        <label for=""> user 4 : </label>
                        <input type="text" v-model="u4.pos"> <br>
                        <label for=""> user 5 : </label>
                        <input type="text" v-model="u5.pos"> <br>
                        <label for=""> user 6 : </label>
                        <input type="text" v-model="u6.pos"> <br>
                        </div> -->
                        <div class="dicebox">
                            <div id="dice">
                                <h1 class="display-2">
                                    {{ diceNum }}
                                </h1>
                            </div>
                        </div>
                        <div class="btnRole">
                            <h6 v-if="turn<=roomData.length"> Player {{turn}} Turn </h6>
                            <h6 v-if="turn>roomData.length"> Player 1 Turn </h6>
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
                            <b-btn class="btn btn-light btn-block" @click.prevent="roleDice" v-if="!u5.win && u5.turn === true">
                                ROLE
                            </b-btn>
                            <b-btn class="btn btn-light btn-block" @click.prevent="roleDice" v-if="!u6.win && u6.turn === true">
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
                </b-col>
                <b-col cols="8">
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
                            :u5="u5"
                            :u6="u6"
                            ></box>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>

<script>
import board from './script/board'
import box from './main_comp/box'
// import socket from './config/socket.js'
export default {
  name: 'mainboard',
  components: {
    box
  },
  data () {
    return {
      board,
      u1: {
        pos: 0,
        win: false,
        turn: true
      },
      u2: {
        pos: 0,
        win: false,
        turn: false
      },
      u3: {
        pos: 0,
        win: false,
        turn: false
      },
      u4: {
        pos: 0,
        win: false,
        turn: false
      },
      u5: {
        pos: 0,
        win: false,
        turn: false
      },
      u6: {
        pos: 0,
        win: false,
        turn: false
      },
      diceNum: 0,
      roomData: ['user1', 'user2', 'user3', 'user4'],
      turn: 1,
      placement: []
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
        this.u5.turn = false
        this.u6.turn = false
        this.u1.turn = true
        this.turn++
      } else if (this.turn === 1) {
        user = this.u1
        this.u1.turn = true
        this.turn++
      } else if (this.turn === 2) {
        this.turn++
        user = this.u2
        this.u1.turn = false
        this.u2.turn = true
      } else if (this.turn === 3) {
        this.turn++
        user = this.u3
        this.u1.turn = false
        this.u2.turn = false
        this.u3.turn = true
      } else if (this.turn === 4) {
        this.turn++
        user = this.u4
        this.u1.turn = false
        this.u2.turn = false
        this.u3.turn = false
        this.u4.turn = true
      }
      // else if ( this.turn === 5) {
      //     this.turn++
      //     user = this.u5
      //     this.u1.turn = false
      //     this.u2.turn = false
      //     this.u3.turn = false
      //     this.u4.turn = false
      //     this.u5.turn = true
      // } else if ( this.turn === 6) {
      //     this.turn++
      //     user = this.u6
      //     this.u1.turn = false
      //     this.u2.turn = false
      //     this.u3.turn = false
      //     this.u4.turn = false
      //     this.u5.turn = false
      //     this.u6.turn = true
      // }

      setTimeout(() => {
        const random = Math.ceil(Math.random() * 6)
        const delay = random * 600
        this.diceNum = 0
        this.diceNum = random
        let step = 0
        let forward = true
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
      }, 1)
      // this.u1.pos+=this.diceNum
      // socket.emit('sendDiceNum',this.diceNum)
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
  height: 100vh;
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

/* #top, #middle , #bottom {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
} */

.dicebox {
    width: 100px;
    height: 120px;
    background: whitesmoke;
    margin-bottom: 20px;
    margin-top: 50px;
}

.btnRole {
    width: 100px;
    height: 60px;
}

#playerbox {
    height: 100px;
    width: 200px;
    background: yellow;
}

#dice {
    text-align: center;
}

</style>
