<template>
  <v-container>
    <div class="title">
      新着
    </div>
    <v-flex xs-12>
      <ItemCard />
    </v-flex>
    <div class="title mt-12">
      カテゴリ別
    </div>
    <v-flex>
      <ItemCard />
    </v-flex>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ItemCard from '@/components/organize/ItemCard.vue';

  @Component({
    name: 'Home', components: { ItemCard }
  })
  export default class Home extends Vue {
  };
</script>

<style scoped>

</style>
