<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>利用者ログイン</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  name="login"
                  prepend-icon="person"
                  type="text"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" @click="doLogin">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import {
    VApp, VContent, VCard, VBtn, VForm, VTextField, VToolbar,
  } from 'vuetify/lib';

  @Component({
    name: 'UserLogin', components: {
      VApp, VContent, VCard, VBtn, VForm, VTextField, VToolbar,
    },
  })
  export default class UserLogin extends Vue {
    public doLogin () {
      console.log('do Login');
    }
  }
</script>

<style scoped>

</style>
