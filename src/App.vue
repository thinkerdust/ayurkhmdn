<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import 'regenerator-runtime'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import '../src/assets/js/index.js'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
 @import './assets/css/style.css';
</style>