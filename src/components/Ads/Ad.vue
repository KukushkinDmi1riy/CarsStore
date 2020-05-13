<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img
          :src="ad.url"
          height="300px"
          > </v-img>
          <v-card-text>
            <h1>{{ad.title}}</h1>
            <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer> </v-spacer>
            <v-btn class="warning" text>Edit</v-btn>
            <v-btn dark color="deep-purple">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  props: ['id'],
  computed: {
    ...mapGetters('ads',['adById']),
    ad() {
      const id=this.id;
      console.log(id);

      return this.adById(id)
    }
  }
}
</script>

<style scoped>

</style>