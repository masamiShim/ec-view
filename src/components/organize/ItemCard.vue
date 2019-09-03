<template>
  <v-row class="ml-auto mr-auto">
    <v-col lg="2" md="3" sm="4" xs="12" v-for="item in items" :key="item.id">
      <v-card class="mx-auto">
        <v-img :src="item.src" height="200px" dark>

        </v-img>
        <v-list two-line>
          <template>
            <v-list-item :key="item.title">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" class="deep-purple--text"></v-list-item-title>
                  <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    name: 'ItemCard'
  })
  export default class ItemCard extends Vue {
    items: any[] = [{
      id: 1,
      src: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
      action: '15 min',
      headline: 'Brunch this weekend?',
      title: 'Ali Connors',
      subtitle: '￥2,000',
    }, {
      id: 2,
      src: '',
      action: '2 hr',
      headline: 'Summer BBQ',
      title: 'me, Scrott, Jennifer',
      subtitle: '￥2,000',
    },{
      id: 3,
      src: '',
      action: '2 hr',
      headline: 'Summer BBQ',
      title: 'me, Scrott, Jennifer',
      subtitle: '￥2,000',
    },{
      id: 4,
      src: '',
      action: '2 hr',
      headline: 'Summer BBQ',
      title: 'me, Scrott, Jennifer',
      subtitle: '￥2,000',
    },{
      id: 5,
      src: '',
      action: '2 hr',
      headline: 'Summer BBQ',
      title: 'me, Scrott, Jennifer',
      subtitle: '￥2,000',
    },];
  };
</script>

<style scoped>

</style>
