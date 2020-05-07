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
        <v-tab :dark="dark">Article</v-tab>
          <v-tab-item background-color="primary">
            <v-container :dark="dark">
              <v-card-text :dark="dark">
                <p class="display-1 teal--text">Denon⚡️</p>
                <p class="grey--text">I code, therefore I am.</p>
                <div class="text-center">
                  <v-row justify="center">
                    <v-col cols="auto">
                      <v-btn min-width="150" color="pink lighten-2" dark to="https://github.com/xue-yuan">
                        GITHUB
                        <v-icon dark right>fab fa-github</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn min-width="150" color="amber lighten-3" dark to="http://linkedin.com/in/denon9527">
                        LINKEDIN
                        <v-icon dark right>fab fa-linkedin</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn min-width="150" color="green lighten-3" dark to="https://instagram.com/__xueyuan">
                        INSTAGRAM
                        <v-icon dark right>fab fa-instagram</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn min-width="150" color="indigo lighten-2" dark to="https://open.spotify.com/user/uisuell">
                        SPOTIFY
                        <v-icon dark right>fab fa-spotify</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn min-width="150" color="purple lighten-3" dark to="https://medium.com/@denon.d">
                        MEDIUM
                        <v-icon dark right>fab fa-medium</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn min-width="150" color="red lighten-3" dark to="https://blog.xueyuan.dev">
                        BLOG
                        <v-icon dark right>fas fa-mug-hot</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="auto">
                      <v-btn min-width="150" color="blue lighten-2" dark to="mailto://denon@xueyuan.dev">
                        MAIL ME
                        <v-icon dark right>fas fa-envelope</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
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