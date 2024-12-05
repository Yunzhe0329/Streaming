<template>
  <div class="search-container">
      <div class="search-bar">
        <input type="text" placeholder="Search..." v-model="query" />
        <button class="search-button" @click="handleSearch">
          <i class="fas fa-search"></i> <!-- Font Awesome Icon -->
        </button>
      </div>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"
/>
  </div>
    
  </template>
  <style scoped>
    .search-container {
      display: flex;
      justify-content: center; 
      margin-top: 20px; 
    }


    .search-bar {
      position: relative; 
      width: 800px; 
      border: 1px solid #ccc;
      border-radius: 16px;
      background-color: #fff;
      display: flex;
      align-items: center;
    }


  .search-bar input {
    flex: 1;
    padding: 10px 40px 10px 16px; 
    font-size: 16px;
    border: none;
    border-radius: 16px;
    outline: none;
  }


  .search-bar .search-button {
    position: absolute;
    right: 10px; 
    background: none; 
    border: none; 
    cursor: pointer;
    font-size: 16px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%; /* 圓形按鈕 */
    transition: background-color 0.3s ease;
  }

  /* 按鈕的 hover 效果 */
  .search-bar .search-button:hover {
    background-color: rgba(0, 123, 255, 0.1); /* 輕微背景變化 */
  }

  /* 引入 Font Awesome 圖標 */
  .search-bar .search-button i {
    font-size: 16px;
  }


</style>
  
  <script>


  export default {
    name: "SearchBar",
    data() {
      return {
        query: "",
      };
    },
    methods: {
      handleSearch() {
        if(!this.query.trim()){
          console.warn("搜尋內容不能為空");
          return;
        }
        console.log(`Searching for: ${this.query}`);
      },
      
    },
  };
  </script>
  
  
  
  