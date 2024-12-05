<template>
    <div class="video-container">
      <div class="video-player">
        <iframe
          v-if="video.url"
          :src="video.url"
          frameborder="0"
          allowfullscreen
          class="player"
        ></iframe>
      </div>
      <div class="video-details">
        <h1 class="title">{{ video.title }}</h1>
        <p class="description">{{ video.description }}</p>
      </div>
    </div>
  </template>
  
  
  
  
  
  
  <script>
export default {
  data() {
    return {
      video: {},
    };
  },
  created() {
    const videoId = this.$route.params.id; // 獲取路由參數中的影片 ID
    const videos = [
      {
        id: 1,
        title: "Title 1",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "This is a description for Video 1. It's a great video!",
      },
      {
        id: 2,
        title: "Title 2",
        url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        description: "This is a description for Video 2. Don't miss it!",
      },
    ];
    this.video = videos.find((v) => v.id === parseInt(videoId)) || {};
  },
  methods: {
    goBack() {
      this.$router.push("/"); // 返回影片列表頁
    },
  },
};
</script>

  
<style scoped>
.video-container {
  display: flex; 
  flex-direction: row; 
  gap: 20px; 
  padding: 20px;
}

.video-player {
  flex: 2; 
}

.player {
  width: 100%; 
  height: 400px; 
  border-radius: 8px;
}

.video-details {
  flex: 1; 
  text-align: left; 
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.description {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
}
</style>



