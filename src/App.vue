<template>
  <v-app>
    <v-navigation-drawer
    app
    temporary
    v-model="drower">
      <v-list>
      <v-list-item

        v-for="(link, key) of links"
        :key="key"
        :to="link.url"
      >

        <v-list-item-icon>
          <v-icon>mdi-{{link.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app
     color="deep-purple accent-4"
      dense
      dark
      flat
     >
      <v-app-bar-nav-icon
      class="hidden-md-and-up"
       @click="drower=!drower"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/"
        tag="span"
        class="pointer">
        Advert apptication
        </router-link>

        </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-toolbars-item class=""> -->
        <!-- <v-toolbars-item class="d-none d-sm-none d-md-flex d-lg-flex"> -->
        <v-btn
        class="ml-1 hidden-sm-and-down"
        v-for="(link, key) in links"
        :key="key"
        :to="link.url">
          <v-icon left>mdi-{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      <!-- </v-toolbars-item> -->
    </v-app-bar>

    <v-content>

        <router-view></router-view>

    </v-content>

  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {

  },

  data: () => ({
    drower: false,
    links: [
      {title: 'Login', icon: 'lock', url: '/login'},
      {title: 'Registretion', icon: 'face', url: '/registration'},
      {title: 'Orders', icon: 'bookmark-outline', url: '/orders'},
      {title: 'New ad', icon: 'card-plus-outline', url: '/new'},
      {title: 'My ads', icon: 'format-list-bulleted', url: '/list'},
      ]
  }),
  // methods: {
  //   actived() {
  //     console.log('rer');

  //   }
  // }
};
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
</style>
