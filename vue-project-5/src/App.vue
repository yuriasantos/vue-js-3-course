<template>
  <the-header :Title="'Learning Resources'"></the-header>
  <the-resources />
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/learning-resource/TheResources.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheResources
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
