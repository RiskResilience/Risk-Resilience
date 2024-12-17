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
<<<<<<< HEAD
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
=======
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
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
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
<<<<<<< HEAD
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
=======
  position: fixed;  /* 改为固定定位 */
  left: 13.8%;
  top: 80px;      /* 调整顶部距离，根据header高度 */
  width: 300px;
  padding: 25px;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: none;
  z-index: 100;   /* 确保在其他内容之上 */
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

.profile-image {
  text-align: center;
<<<<<<< HEAD
  margin-bottom: 0.5rem;
}

.avatar {
  width: 10rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: none;
  padding: 0;
=======
  margin-bottom: 25px;
}

.avatar {
  width: 150px;
  height: 225px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: none;
  padding: 0px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

.profile-info {
  text-align: center;
<<<<<<< HEAD
  padding: 0;
}

.name {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
=======
}

.name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  color: #333;
}

.title {
<<<<<<< HEAD
  font-size: 0.8125rem;
  color: #666;
  margin: 0.25rem 0;
=======
  font-size: 13px;
  color: #666;
  margin: 5px 0;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  line-height: 1.4;
}

.title-en {
<<<<<<< HEAD
  font-size: 0.75rem;
  color: #888;
  margin-bottom: 1rem;
=======
  font-size: 12px;
  color: #888;
  margin-bottom: 25px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  line-height: 1.4;
}

.contact-info {
<<<<<<< HEAD
  margin-left: 0.5rem;
  text-align: left;
  margin-top: 0.5rem;
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
=======
  margin-left: 35px;
  text-align: left;
  margin-top: 25px;
  border-top: 1px solid #eee;
  padding-top: 20px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

.info-item {
  display: flex;
  align-items: center;
<<<<<<< HEAD
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
=======
  margin: 12px 0;
  color: #666;
  font-size: 13px;
}

.info-item .el-icon {
  margin-right: 12px;
  color: #666;
  font-size: 16px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

.info-item a {
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
}

.info-item a:hover {
  color: #409EFF;
<<<<<<< HEAD
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
=======
  text-decoration: none;
}

.info-item span {
  line-height: 1.4;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

@media (max-width: 768px) {
  .profile-sidebar {
<<<<<<< HEAD
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
=======
    position: relative; /* 在移动端取消固定定位 */
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    left: auto;
    top: auto;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  }
}
</style>