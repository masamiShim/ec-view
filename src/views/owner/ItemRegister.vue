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
          md="6"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>アイテム登録</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Name"
                  name="name"
                  :error-messages="nameErrors"
                  v-model="form.name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label="Code"
                  name="code"
                  v-model="form.code"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label="Price"
                  name="price"
                  v-model="form.price"
                  type="number"
                ></v-text-field>
                <v-text-field
                  label="Quantity"
                  name="quantity"
                  v-model="form.quantity"
                  type="number"
                ></v-text-field>
                <v-text-field
                  label="Comment"
                  name="comment"
                  v-model="form.comment"
                  type="text"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="pb-4">
              <div class="flex-grow-1"></div>
              <v-btn color="primary" @click="doRegister">登録する</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">

  import {Vue, Component} from 'vue-property-decorator';
  import ItemRegisterForm from "../../api/ItemRegisterForm";
  import {required} from "vuelidate/lib/validators";


  @Component({
    validations: {
      form: {
        name: { required }
      }
    },
    name: "ItemRegister"
  })
  export default class ItemRegister extends Vue {
    form: ItemRegisterForm = {
      name: '',
      code: '',
      price: 0,
      quantity: 0,
      comment: ''
    }

    doRegister() {
      console.log('register');
    }

    get nameErrors() {
      const errors = [];
      !(this as any).$v.form.name.required && errors.push( "名前な必須です。" );
      return errors;
    };
  }
</script>

<style scoped>

</style>
