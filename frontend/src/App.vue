<template>
<NavBar/>

    <router-view />
    
</template>

<script>
import Home from './components/Home.vue'
import VideoStream from './components/VideoStream.vue'
import Post from './components/Post.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    Home,VideoStream,Post,NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
