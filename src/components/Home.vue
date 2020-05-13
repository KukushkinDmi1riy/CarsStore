<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(ad, key) in promoAds"
              :key="key"
              :src="ad.url"
            >
            <div class="carusel-link">
              <v-btn class="error" :to="/ad/+ad.id"> {{ad.title}} </v-btn>
            </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
        xs12
        sm6
        md3
        v-for="(ad, key) in ads"
        :key="key"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.url"
            >
              <v-card-title>{{ad.title}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

            <div>{{ad.description}}s</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer> </v-spacer>
              <v-btn text :to="'/ad/'+ad.id">
                Open
              </v-btn>

              <v-btn raised color="deep-purple"
              dark>
                Buy
              </v-btn>

            </v-card-actions>
           </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters('ads', ['promoAds', 'ads'])
  }
}
</script>

<style scoped>
  .carusel-link{
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, 0.3);
    transform: translate(-50%,0);
    padding: 5px 15px;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
  }

</style>