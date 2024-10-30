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
          <el-icon><School /></el-icon>
          <span>杭州师范大学(HZNU)</span>
        </div>
        <div class="info-item">
          <el-icon><Message /></el-icon>
          <a href="mailto:jyfang@hznu.edu.cn">jyfang@hznu.edu.cn</a>
        </div>
        <div class="info-item">
          <el-icon><Collection /></el-icon>
          <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank">Google Scholar</a>
        </div>
        <div class="info-item">
          <el-icon><Connection /></el-icon>
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
  position: fixed;  /* 改为固定定位 */
  left: 13.8%;
  top: 80px;      /* 调整顶部距离，根据header高度 */
  width: 300px;
  padding: 25px;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: none;
  z-index: 100;   /* 确保在其他内容之上 */
}

.profile-image {
  text-align: center;
  margin-bottom: 25px;
}

.avatar {
  width: 150px;
  height: 225px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: none;
  padding: 0px;
}

.profile-info {
  text-align: center;
}

.name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}

.title {
  font-size: 13px;
  color: #666;
  margin: 5px 0;
  line-height: 1.4;
}

.title-en {
  font-size: 12px;
  color: #888;
  margin-bottom: 25px;
  line-height: 1.4;
}

.contact-info {
  margin-left: 35px;
  text-align: left;
  margin-top: 25px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin: 12px 0;
  color: #666;
  font-size: 13px;
}

.info-item .el-icon {
  margin-right: 12px;
  color: #666;
  font-size: 16px;
}

.info-item a {
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
}

.info-item a:hover {
  color: #409EFF;
  text-decoration: none;
}

.info-item span {
  line-height: 1.4;
}

@media (max-width: 768px) {
  .profile-sidebar {
    position: relative; /* 在移动端取消固定定位 */
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    left: auto;
    top: auto;
  }
}
</style>