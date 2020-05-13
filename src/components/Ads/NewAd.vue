<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 >
        <h1 class="text--secondary mb-3"> Create new Ad</h1>
         <v-form ref="form"
                  class="mb-3"
                  v-model="valid"
                  validation>
                  <v-text-field
                    label="Title"
                    name="title"
                    type="text"
                    v-model="title"
                    required
                    :rules="[v=> !!v || 'Title is required']"
                  ></v-text-field>
                  <v-textarea
                    name="description"
                    label="Description"
                    type="text"
                    auto-grow
                    placeholder="Enter description, please"
                    v-model="description"
                    :rules="[v=> !!v || 'Description is required']"
                  ></v-textarea>
                </v-form>
                <v-layout row class="mb-3">
                  <v-flex>
                    <v-btn
                      color="#FDED48"
                      class="ma-2 deep-purple--text"
                    >
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex>
                    <img src="" height="100">
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-switch
                    color="deep-purple"
                    v-model="promo"
                    label="Add to promo?"
                  ></v-switch>
                </v-layout>

                <v-layout row>
                  <v-flex>
                    <v-spacer> </v-spacer>
                    <v-btn
                      :disabled="!valid"
                      class="success"
                      @click="createAd"
                      > Create ad </v-btn>
                  </v-flex>
                </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  data() {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
    }
  },
  methods: {
    ...mapActions('aps', ['createAd']),
    createAd(){
      if (this.$refs.form.validate()){

        const newAd = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          url: 'https://i.morioh.com/7bba791a17.png'
        }
        console.log(newAd);
        // this.$store.dispatch('newAd', newAd)  //не определяет newAd
        this.createAd(newAd)
      }
    }
  }
}
</script>

<style scoped>

</style>