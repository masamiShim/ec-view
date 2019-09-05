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
                <v-row v-if="selectedImagesPath" class="justify-center">
                  <v-flex v-for="path in selectedImagesPath"  :key="path" xs8>
                    <img :src="path" style="width:100%; box-sizing: border-box; max-height: 300px; max-width: 300px;"/>
                  </v-flex>
                </v-row>
                <v-file-input label="商品画像" show-size chips accept="image/*" @change="onFileChange"
                              :error-messages="fileErrors"
                />
                <v-text-field
                  label="商品名"
                  name="name"
                  :error-messages="nameErrors"
                  :counter="30"
                  v-model="form.name"
                  type="text"
                ></v-text-field>
                <v-text-field
                  label="商品コード"
                  :counter="20"
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
                <v-textarea
                  name="input-7-4"
                  label="コメント"
                  :counter="1000"
                  :error-messages="commentErrors"
                  v-model="form.comment"
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions class="pb-4">
              <div class="flex-grow-1"></div>
              <v-btn color="primary" @click="doRegister" :disabled="inValid">登録する</v-btn>
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
        name: {required, maxLength: maxLength(30)},
        code: {maxLength: maxLength(20)},
        price: {required, between: between(0, 100000000)},
        quantity: {required, between: between(1, 100000000)},
        comment: {maxLength: maxLength(1000)}
      },
      selectedImages: { required }
    }, name: 'ItemRegister'
  })
  export default class ItemRegister extends Vue {
    form: ItemRegisterForm = {
      name: '', code: '', price: 0, quantity: 1, comment: ''
    };

    selectedImages: File[] = [];
    selectedImagesPath: any[] = [];

    doRegister() {
      (this as any).$v.$touch();
      console.log('register');
    }

    get inValid(): boolean {
      return this.$v.$invalid;
    }

    // multipleついてないと入ってくるのは配列ではない
    onFileChange(file: File) {
      this.selectedImages = [];
      this.selectedImagesPath = [];

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

/*
    // multiple=trueだと配列で入ってくる
    onFileChange(files: File[]) {
      this.selectedImages = [];
      this.selectedImagesPath = [];

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
*/
    get nameErrors() {
      const errors = [];
      !(this as any).$v.form.name.required && errors.push('名前は必須です');
      !(this as any).$v.form.name.maxLength && errors.push('名前は30文字以内で入力してください');
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

    get fileErrors() {
      const errors = [];
      !(this as any).$v.selectedImages.required && errors.push('商品画像は必須です。');
      return errors;
    };
  }
</script>

<style scoped>

</style>
