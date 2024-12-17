<template>
  <div class="profile-sidebar">
    <div class="profile-image">
      <img src="/image/touxiang.jpg" alt="方佳毅" class="avatar">
    </div>
    <div class="profile-info">
      <h1 class="name">方佳毅 (Jiayi FANG)</h1>
      <p class="title">博士，副教授，硕士生导师</p>
      <p class="title-en">(Ph.D., Associate Professor, Master Supervisor)</p>

      <div class="contact-info">
        <div class="info-item">
          <el-icon class="fixed-position"><School /></el-icon>
          <span>杭州师范大学(HZNU)</span>
        </div>
        <div class="info-item">
          <el-icon class="fixed-position"><Message /></el-icon>
          <a href="mailto:jyfang@hznu.edu.cn">jyfang@hznu.edu.cn</a>
        </div>
        <div class="info-item">
          <el-icon class="fixed-position"><Collection /></el-icon>
          <a href="https://scholar.google.com/citations?hl=zh-CN&user=bnoqeUMAAAAJ" target="_blank">Google Scholar</a>
        </div>
        <div class="info-item">
          <el-icon class="fixed-position"><Connection /></el-icon>
          <a href="https://www.researchgate.net/profile/Jiayi-Fang-2" target="_blank">ResearchGate</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { School, Message, Collection, Connection } from '@element-plus/icons-vue'
</script>

<style scoped>
.profile-sidebar {
  margin-top: 5%;
  position: fixed;
  left: 1%;
  top: 100vh;
  width: 10%;
  padding: 0;
  background-color: transparent;
  border-radius: 0.75rem;
  box-shadow: none;
  z-index: 100;
}

.profile-image {
  text-align: center;
  margin-bottom: 0.5rem;
}

.avatar {
  width: 10rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: none;
  padding: 0;
}

.profile-info {
  text-align: center;
  padding: 0;
}

.name {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.title {
  font-size: 0.8125rem;
  color: #666;
  margin: 0.25rem 0;
  line-height: 1.4;
}

.title-en {
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.contact-info {
  margin-left: 0.5rem;
  text-align: left;
  margin-top: 0.5rem;
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.8125rem;
  position: relative;
}

.info-item .el-icon {
  margin-right: 0.75rem;
  color: #666;
  font-size: 1rem;
}

.info-item a,
.info-item span {
  margin-left: calc(20% + 1.75rem);
}

.info-item a {
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
}

.info-item a:hover {
  color: #409EFF;
}

.info-item .fixed-position {
  position: absolute;
  left: 20%;
}

@media (max-width: 1200px) {
  .profile-sidebar {
    width: 12%;
  }
}

@media (max-width: 992px) {
  .profile-sidebar {
    width: 14%;
  }
}

@media (max-width: 768px) {
  .profile-sidebar {
    position: relative;
    width: 90%;
    max-width: none;
    margin: 1rem auto;
    left: auto;
    top: auto;
    padding: 1rem;
  }

  .avatar {
    width: 8rem;
    height: 12rem;
  }

  .contact-info {
    margin-left: 1rem;
  }

  .info-item {
    padding-left: 35%;
  }

  .info-item .fixed-position {
    left: 15%;
  }

  .info-item a,
  .info-item span {
    margin-left: calc(15% + 1.75rem);
  }
}
</style>