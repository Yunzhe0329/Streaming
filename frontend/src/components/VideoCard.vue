<template>
    <div class="video-card">
      <img :src="thumbnail" alt="Video Thumbnail" />
      <div class="info">
        <h4>{{ title }}</h4>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      thumbnail: String,
    },
  };
  </script>
  
  <style scoped>
  .video-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  .video-card:hover {
    transform: scale(1.05);
  }
  .video-card img {
    width: 100%;
    height: auto;
  }
  .video-card .info {
    padding: 10px;
  }
  </style>
  