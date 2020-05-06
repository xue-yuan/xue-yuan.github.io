<template>
  <v-app :style="`background: ${dark? darkTheme: lightTheme}; transition-delay: 0.01s`">
    <v-app-bar
      app
      :dark="dark"
    >
      <div class="ml-auto">
        <a to="/">🧬</a>
      </div>
      <v-spacer></v-spacer>
      <div class="ml-auto my-auto pt-4 mr-2">
        <keep-alive>
          <v-switch disabled :label="`${dark ? 'Light': 'Dark'} Mode`" inset color="white" :dark="dark" v-model="dark"></v-switch>
        </keep-alive>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view :dark="dark"></router-view>
      </v-container>
    </v-content>
    <v-footer>
      
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },

  data: () => ({
    dark: false,
    darkTheme: '#212121',
    lightTheme: '#FFFFFF',
  }),
  methods: {
  },
  computed: {
  },

};
</script>
