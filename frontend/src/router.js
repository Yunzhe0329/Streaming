import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import VideoStream from "./components/VideoStream.vue";
import Post from "./components/Post.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
import ViewVideo from "./components/ViewVideo.vue";

const routes = [
  { path: "/", component: Home }, // 預設首頁
  { path: "/video", component: VideoStream }, // 上傳影片
  { path: "/post", component: Post },
  { path: "/video/:id", component: VideoPlayer }, 
  { path: "/ViewVideo", component: ViewVideo },
  { path: "/Home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
