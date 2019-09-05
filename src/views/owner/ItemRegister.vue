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
              <v-toolbar-title>商品登録</v-toolbar-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="商品名"
                  name="name"
                  :error-messages="nameErrors"
                  v-model="form.name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label="商品コード"
                  :error-messages="codeErrors"
                  name="code"
                  v-model="form.code"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label="金額"
                  :error-messages="priceErrors"
                  name="price"
                  v-model="form.price"
                  type="number"
                ></v-text-field>
                <v-text-field
                  label="数量"
                  name="quantity"
                  :error-messages="quantityErrors"
                  v-model="form.quantity"
                  type="number"
                ></v-text-field>
                <v-text-field
                  label="コメント"
                  name="comment"
                  :error-messages="commentErrors"
                  v-model="form.comment"
                  type="text"
                ></v-text-field>
                <v-file-input label="商品画像" show-size chips multiple accept="image/*" @change="onFileChange"/>
                <v-row v-if="selectedImagesPath" class="d-inline-flex">
                  <v-flex v-for="path in selectedImagesPath" :key="path" xs6>
                    <img :src="path" style="width:100%; box-sizing: border-box"/>
                  </v-flex>
                </v-row>
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
  import ItemRegisterForm from '../../api/ItemRegisterForm';
  import {between, maxLength, required} from 'vuelidate/lib/validators';

  @Component({
    validations: {
      form: {
        name: {required, maxLength: maxLength(80)},
        code: {maxLength: maxLength(20)},
        price: {required, between: between(0, 100000000)},
        quantity: {required, between: between(1, 100000000)},
        comment: {maxLength: maxLength(1000)}
      }
    }, name: 'ItemRegister'
  })
  export default class ItemRegister extends Vue {
    form: ItemRegisterForm = {
      name: '', code: '', price: 0, quantity: 0, comment: ''
    };

    selectedImages: File[] = [];
    selectedImagesPath: any[] = [];

    doRegister() {
      (this as any).$v.$touch();
      console.log('register');
    }

    onFileChange(files: File[]) {

      for (let i = 0, file: File; file = files[i]; i++) {
        const reader: FileReader = new FileReader();

        reader.onload = ((ev: ProgressEvent<FileReader>) => {
          const f = ev.target.result;
          if (!f) {
            return;
          }

          this.selectedImages.push(file);
          this.selectedImagesPath.push(f);
        });

        reader.readAsDataURL(file);
      }
    }

    get nameErrors() {
      const errors = [];
      !(this as any).$v.form.name.required && errors.push('名前は必須です。');
      return errors;
    };

    get codeErrors() {
      const errors = [];
      !(this as any).$v.form.code.maxLength && errors.push('コードは20文字以内で入力してください');
      return errors;
    };

    get priceErrors() {
      const errors = [];
      !(this as any).$v.form.price.between && errors.push('金額は0～100,000,000の間で設定してください。');
      return errors;
    };

    get quantityErrors() {
      const errors = [];
      !(this as any).$v.form.quantity.between && errors.push('数量は1～100,000,000の間で設定してください。');
      return errors;
    };

    get commentErrors() {
      const errors = [];
      !(this as any).$v.form.comment.maxLength && errors.push('コメントは1,000文字以内で入力してください。');
      return errors;
    };
  }
</script>

<style scoped>

</style>
