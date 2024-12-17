<template>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 1.25rem;
  width: 70%;
  margin-left: 20%;
}

.section {
  margin-bottom: 30px;
}

h3 {
  font-size: 20px;
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
  line-height: 1.6;
  color: #333;
}

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