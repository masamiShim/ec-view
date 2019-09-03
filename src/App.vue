<template>
  <v-app>
    <v-app-bar app>
      <v-flex>
        <v-toolbar-title class="headline text-uppercase">
          <a @click="routing('/home')" class="black--text">
            <span>EC</span>
            <span class="font-weight-light">DEMO</span>
          </a>
        </v-toolbar-title>
      </v-flex>
      <v-flex class="text-right">
        <v-btn text color="primary" class="mr-2" @click="routing('/login/owner')">出品者の方はこちら</v-btn>
        <v-btn text color="primary" class="mr-2" @click="routing('/login/user')">購入の方はこちら</v-btn>
        <v-btn small color="error" @click="routing('/register')">新規登録</v-btn>
      </v-flex>
    </v-app-bar>

    <v-content>
      <RouterView/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({ name: 'App' })
  export default class App extends Vue {

    routing (path: string): void {
      this.$router.push(path);
    }
  }
</script>
