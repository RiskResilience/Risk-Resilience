<template>
<<<<<<< HEAD
  <div class="page-container">
    <div class="section">
      <h3>科研项目</h3>
      <div class="content-wrapper">
        <h4>主持项目</h4>
        <ul>
          <li>
            <div class="project-title">国家自然科学基金青年基金项目，主持，结题</div>
          </li>
          <li>
            <div class="project-title">浙江省自然科学基金重点项目（联合项目），主持，在研</div>
          </li>
          <li>
            <div class="project-title">博士后科学基金面上资助，主持，结题</div>
          </li>
          <li>
            <div class="project-title">上海市青年英才扬帆计划，主持，结题</div>
          </li>
        </ul>

        <h4>参与项目</h4>
        <ul>
          <li>作为项目骨干，参与国家重点研发"大都市区多灾种重大自然灾害风险综合防范关键技术研究与示范"，"金砖国家城市公共安全的地理大数据应用研究"等项目。</li>
        </ul>
=======
  <div class="projects-page">
    <h2>科研项目</h2>

    <div class="section">
      <h3>主持项目</h3>
      <ol class="project-list">
        <li>
          <div class="project-title">国家自然科学基金青年基金项目</div>
          <div class="project-content">
            <span class="project-name">基于海平面上升和水动力学模型的海岸洪水危险性模拟及响应规律研究</span>
            <div class="project-info">
              <span class="time">2021-2023</span>
              <span class="level">（国家级）</span>
              <span class="role">主持</span>
            </div>
          </div>
        </li>
        <li>
          <div class="project-title">博士后科学基金面上资助</div>
          <div class="project-content">
            <span class="project-name">台风多灾种联合概率模型构建及风险评估</span>
            <div class="project-info">
              <span class="time">2019-2021</span>
              <span class="level">（省部级）</span>
              <span class="role">主持</span>
            </div>
          </div>
        </li>
        <li>
          <div class="project-title">上海市青年英才扬帆人才计划</div>
          <div class="project-content">
            <span class="project-name">海平面上升情景下中国沿海地区海岸洪水灾害风险评估</span>
            <div class="project-info">
              <span class="time">2019-2022</span>
              <span class="level">（省部级）</span>
              <span class="role">主持</span>
            </div>
          </div>
        </li>
      </ol>
    </div>

    <div class="section">
      <h3>参与项目</h3>
      <div class="participation">
        <p>作为项目骨干，参与国家重点研发"大都市区多灾种重大自然灾害风险综合防范关键技术研究与示范"，"金砖国家城市公共安全的地理大数据应用研究"等项目。</p>
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
      </div>
    </div>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
.page-container {
  padding: 1.25rem;
  width: 70%;
  margin-left: 20%;
}

.section {
  margin-bottom: 30px;
=======
.projects-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f5f5f5;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

h3 {
  font-size: 20px;
<<<<<<< HEAD
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #efecec;
}

h4 {
  font-size: 18px;
  color: #333;
  margin: 25px 0 15px;
}

.content-wrapper {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
  padding: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 15px;
=======
  color: #444;
  margin: 25px 0 20px 0;
}

.section {
  margin-bottom: 40px;
}

.project-list {
  list-style-type: decimal;
  padding-left: 20px;
}

.project-list li {
  margin-bottom: 25px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  line-height: 1.6;
  color: #333;
}

<<<<<<< HEAD
@media (max-width: 768px) {
  .page-container {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
  }
}
</style>
<script setup lang="ts">
</script>
=======
.project-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.project-content {
  padding-left: 5px;
}

.project-name {
  display: block;
  margin-bottom: 5px;
}

.project-info {
  color: #666;
  font-size: 14px;
}

.project-info span {
  margin-right: 15px;
}

.participation {
  line-height: 1.8;
  color: #333;
}

@media (max-width: 768px) {
  .projects-page {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  .project-list li {
    margin-bottom: 20px;
  }
}
</style>
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
