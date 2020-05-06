<template>
  <div class="home">
    <v-container>
      <div class="text-center">
        <img class="mx-auto" alt="Vue logo" src="../assets/logo.png">
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
