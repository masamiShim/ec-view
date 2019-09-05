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
              <v-toolbar-title>商品詳細</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-row v-if="selectedImagesPath" class="justify-center">
                  <v-flex xs8>
                    <img :src="selectedImagesPath" style="width:100%; box-sizing: border-box; max-height: 300px; max-width: 300px;"/>
                  </v-flex>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="4" class="text-right black--text">
                    商品名
                  </v-col>
                  <v-col cols="8" class="text-left">
                    {{form.name}}
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="4" class="text-right black--text">
                    商品コード
                  </v-col>
                  <v-col cols="8">{{form.code}}</v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="4" class="text-right black--text">
                    金額
                  </v-col>
                  <v-col cols="8">￥{{form.price}}</v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="4" class="text-right black--text">
                    在庫
                  </v-col>
                  <v-col cols="8">{{form.quantity}}個</v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" >
                    <p>{{form.comment}}</p>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions class="pb-4">
              <div class="flex-grow-1"></div>
              <v-btn color="primary" @click="buy">購入する</v-btn>
              <v-btn color="success" @click="contact">問い合わせ</v-btn>
              <v-btn color="secondary" @click="favorite">お気に入り</v-btn>
              <v-btn color="secondary" @click="cart">カートに入れる</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>

</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import ItemRegisterForm from '../../api/ItemRegisterForm';

  @Component({
    name: 'ItemDetail',
  })
  export default class ItemDetail extends Vue {
    form: ItemRegisterForm = {
      name: 'hoge', code: 'codeHoge', price: 1000, quantity: 10, comment: 'あれま\nどうしましょう'
    };
    selectedImagesPath: string = 'data:image/png;base64,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';

    buy () {

    }

    favorite () {

    }

    cart () {

    }
    contact () {

    }
  };
</script>
<style scoped>

</style>
