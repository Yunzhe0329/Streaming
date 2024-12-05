<template>
  <div class="navbar">
      <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
       
       <div id="videologo"> VideoStream</div>
        <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/video" class="nav-link">上傳影片</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/post" class="nav-link">貼文</router-link>
            </li>
            </ul>
        </div>
    </nav>
  </div>
</template>
 
<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  },
}
</script>
 
<style scoped lang="scss">
  @media (min-width: 992px) { 
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: white !important;
      border-color: block;
      border: solid;
    }
   }
   #videologo{
   font-size:30px;
   }
</style>