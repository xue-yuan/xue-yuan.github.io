<template>
  <div class="profile py-12">
    <v-card hover shaped max-width="900" class="mx-auto" :dark="dark">
      <v-card-text class="pb-0 px-10 pt-5">
          <p>xueyuan.dev</p>
      </v-card-text>
      <v-tabs
        color="teal lighten-1"
        slider-color="teal lighten-1"
        class="px-5 pb-10"
        right
        :dark="dark"
      >
        <v-tab :dark="dark">About</v-tab>
        <v-tab :dark="dark">Project</v-tab>
        <v-tab :dark="dark">Blog</v-tab>
          <v-tab-item background-color="primary">
            <v-container :dark="dark">
              <v-card-text :dark="dark">
                <p class="display-1 teal--text">Denon⚡️</p>
                <p class="grey--text">I code, therefore I am.</p>
                <div class="text-center">
                  <v-btn-toggle
                    :dark="dark"
                    borderless
                    group
                    class="p-10"
                  >
                    <v-btn to="https://github.com/xue-yuan">
                      <v-icon color="pink lighten-2" x-large>fab fa-github-square</v-icon>
                    </v-btn>
                    <v-btn to="https://open.spotify.com/user/uisuell">
                      <v-icon color="indigo lighten-2" x-large>fab fa-spotify</v-icon>
                    </v-btn>
                    <v-btn to="https://instagram.com/__xueyuan">
                      <v-icon color="green lighten-3" x-large>fab fa-instagram-square</v-icon>
                    </v-btn>
                    <v-btn to="mailto://denon@xueyuan.dev">
                      <v-icon color="amber lighten-3" x-large>fas fa-envelope</v-icon>
                    </v-btn>
                    <v-btn to="https://blog.xueyuan.dev">
                      <v-icon color="red lighten-3" x-large>fas fa-coffee</v-icon>
                    </v-btn>
                    <v-btn to="https://medium.com/@denon.d">
                      <v-icon color="purple lighten-3" x-large>fab fa-medium</v-icon>
                    </v-btn>
                    <v-btn to="http://linkedin.com/in/denon9527">
                      <v-icon color="orange lighten-3" x-large>fab fa-linkedin</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </div>
                <!-- <p>{{ dark }}</p> -->
              </v-card-text>
            </v-container>
          </v-tab-item>
          <v-tab-item class="text-center" :style="`background: ${dark? darkTheme: lightTheme};`">
              

          </v-tab-item>
          <v-tab-item :style="`background: ${dark? darkTheme: lightTheme};`"></v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['dark'],
  data() {
    return {
      darkTheme: '#212121',
      lightTheme: '#FAFAFA',
    }
  },
  methods: {

  },
}
</script>