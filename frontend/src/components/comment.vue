<template>
    <div class="comments-section">
      <!-- 留言輸入區 -->
      <div class="comment-input">
        <textarea
          v-model="newComment"
          placeholder="Add a public comment..."
          @keydown.enter="addComment"
        ></textarea>
        <button @click="addComment">Comment</button>
      </div>
  
      <!-- 留言列表 -->
      <div class="comments-list">
        <div class="comment" v-for="(comment, index) in comments" :key="index">
          <div class="avatar">
            <img src="https://via.placeholder.com/40" alt="User Avatar" />
          </div>
          <div class="content">
            <div class="info">
              <span class="username">{{ comment.username }}</span>
              <span class="timestamp">{{ formatTimestamp(comment.timestamp) }}</span>
            </div>
            <p class="text">{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        newComment: "", // 新留言的內容
        comments: [
          // 假數據模擬留言
          {
            username: "John Doe",
            text: "This is an amazing video!",
            timestamp: new Date(),
          },
          {
            username: "Jane Smith",
            text: "Thanks for sharing this.",
            timestamp: new Date(),
          },
        ],
      };
    },
    methods: {
      addComment() {
        const trimmedComment = this.newComment.trim();
        if (!trimmedComment) {
          alert("Comment cannot be empty!");
          return;
        }
  
        // 新增留言到列表頂部
        this.comments.unshift({
          username: "Current User", // 模擬當前用戶
          text: trimmedComment,
          timestamp: new Date(),
        });
  
        // 清空輸入框
        this.newComment = "";
      },
      formatTimestamp(timestamp) {
        const options = { hour: "2-digit", minute: "2-digit", year: "numeric", month: "short", day: "numeric" };
        return new Intl.DateTimeFormat("en-US", options).format(timestamp);
      },
    },
  };
  </script>
  
  <style scoped>
  .comments-section {
    margin-top: 20px;
    padding: 20px;
    border-top: 1px solid #ddd;
    text-align: left;
  }
  
  .comment-input {
    display: flex;
    align-items: center; /* 垂直對齊輸入框和按鈕 */
    margin-bottom: 20px;
  }
  
  .comment-input textarea {
    flex: 1; /* 占據剩餘空間 */
    height: 40px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
    margin-right: 10px; /* 為按鈕留出間距 */
    text-align: left; /* 確保文字從左對齊 */
  }
  
  .comment-input button {
    padding: 10px 16px;
    font-size: 14px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 40px; /* 與輸入框高度一致 */
  }
  
  .comment-input button:hover {
    background-color: #0056b3;
  }
  
  .comments-list {
    display: flex;
    flex-direction: column;
  }
  
  .comment {
    display: flex;
    margin-bottom: 15px;
  }
  
  .avatar img {
    border-radius: 50%;
  }
  
  .content {
    margin-left: 10px;
    flex: 1;
    text-align: left;
  }
  
  .content .info {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .content .info .username {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .content .info .timestamp {
    color: #777;
    font-size: 12px;
  }
  
  .content .text {
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
  }
  </style>