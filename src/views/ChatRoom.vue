<template>
  <v-container>
    <v-row style="height: 5vh; min-height: 50px;" >
      <v-col cols="7" offset-md="2">
        <h2>syouhin</h2>
      </v-col>
      <v-col cols="2">
        <v-btn text color="primary" class="mr-2" @click="routing('/login/owner')">商品ページへ</v-btn>
      </v-col>
    </v-row>
    <v-container style="height: 45vh;" class="overflow-y-auto mt-2">
      <v-row class="justify-center" >
        <v-col cols="10">
          <v-timeline>
            <v-timeline-item
              v-for="n in 10"
              :key="n"
              hideDot
              :left="n % 2 === 0"
              :right="n % 2 !== 0"
              small
              style="padding-bottom: 0px"
            >
              <v-card class="elevation-2 light-green">

                <v-card-text class="white--text" style="padding: 8px;">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                  convenire
                </v-card-text>
              </v-card>
              {{n % 2 === 0 ? 'you' : 'owner'}}
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="justify-center mt-2" style="height: 4vh">
      <v-col cols="7">
        <v-textarea label="input message" outlined :rows="2"></v-textarea>
      </v-col>
      <v-col cols="2">
        <v-btn color="success" @click="routing('/login/owner')">送信</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    name: 'ChatRoom',
  })
  export default class ChatRoom extends Vue {

  };
</script>

<style scoped>

</style>
