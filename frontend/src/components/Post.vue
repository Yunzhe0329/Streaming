<template>
  <div class="post-container">
    <main class="post-list">
      <!-- 貼文卡片 -->
      <div class="post-card">
        <div class="post-header">
          <div class="user-avatar"></div>
          <div class="user-info">
            <p class="user-name">Doe</p>
            <p class="post-time">1個月前</p>
          </div>
        </div>
        <div class="post-content">
          <p>今天休息一天!!! 大家明天見!!!</p>
          <div class="image-placeholder"></div>
        </div>
        <div class="post-footer">
          <span>100</span>
          <span>50</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Post", // 修改為符合多詞命名規範
};
</script>

<style scoped>
.post-container {
  font-family: Arial, sans-serif;
}

.post-list {
  padding: 20px;
}

.post-card {
  background-color: #f9f9f9;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  
}

.post-header {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee; /* 添加分隔線 */
}

.user-avatar {
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info {
  font-size: 14px;
}

.user-name {
  font-weight: bold;
  margin: 0;
}

.post-time {
  color: #888;
  margin: 0;
  font-size: 12px; /* 調整字體大小 */
}

.post-content {
  padding: 10px;
}

.image-placeholder {
  width: 100%;
  height: 200px;
  background-color: #ddd;
  margin-top: 10px;
  border-radius: 5px; /* 圖片圓角 */
}

.post-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
  color: #555;
  border-top: 1px solid #eee; /* 添加分隔線 */
}
</style>