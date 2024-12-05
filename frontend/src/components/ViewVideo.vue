<template>
  <div class="main-content" @scroll="handleScroll">
    <div v-if="!videos.length && !loading" class="no-data">No videos available</div>
    <div class="video-grid">
      <VideoCard
        v-for="video in videos"
        :key="video.id"
        :title="video.title"
        :thumbnail="video.thumbnail"
        @click="goToVideo(video.id)"
      />
    </div>
    <div v-if="loading" class="loading">Loading more videos...</div>
  </div>
</template>

<script>
import VideoCard from './VideoCard.vue';

export default {
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [
        { id: 1, title: "Title 1", thumbnail: "https://via.placeholder.com/300x200" },
        { id: 2, title: "Title 2", thumbnail: "https://via.placeholder.com/300x200" },
        // 初始的影片數據
      ],
      loading: false, // 加載狀態
      page: 1, // 當前分頁
    };
  },
  methods: {
    async handleScroll() {
      const container = this.$el;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        await this.loadMoreVideos();
      }
    },
    async loadMoreVideos() {
      if (this.loading) return;
      this.loading = true;

      // 模擬 API 請求
      setTimeout(() => {
        const newVideos = [
          { id: this.videos.length + 1, title: `Title ${this.videos.length + 1}`, thumbnail: "https://via.placeholder.com/300x200" },
          { id: this.videos.length + 2, title: `Title ${this.videos.length + 2}`, thumbnail: "https://via.placeholder.com/300x200" },
        ];
        this.videos = [...this.videos, ...newVideos];
        this.page += 1;
        this.loading = false;
      }, 1000);
    },
    goToVideo(id) {
      this.$router.push(`/video/${id}`);
    },
  },
};
</script>

<style scoped>
.main-content {
  flex: 1;
  padding: 20px;
  margin-top: 20px;
  background-color: #f1f1f1;
  overflow-y: auto;
  height: 100vh; /* 設置容器高度，讓其可滾動 */
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 減少最小寬度 */
  gap: 15px; /* 減小間距 */
}


.loading {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #007bff;
}
</style>

  