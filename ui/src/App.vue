<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple accent-2"
      dark
    >
      <v-spacer></v-spacer>
      <v-toolbar-title>Remoku</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Roku/>
    </v-content>
  </v-app>
</template>

<script>
import Roku from './components/Roku';

export default {
  name: 'App',

  components: {
    Roku,
  },

  data: () => ({
    //
  }),
};
</script>
