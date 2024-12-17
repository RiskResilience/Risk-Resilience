<template>
  <div class="page-container">
    <div class="section">
      <h3>共享资源</h3>
      <div class="content-wrapper">
        <div class="resource-content">
          <div class="resource-placeholder">
            <el-icon class="placeholder-icon"><Document /></el-icon>
            <p>资源整理中，敬请期待...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Document } from '@element-plus/icons-vue'
</script>

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

.content-wrapper {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
  padding: 20px;
}

.resource-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.resource-placeholder {
  color: #909399;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.resource-placeholder p {
  font-size: 1.1rem;
  margin: 0;
}

@media (max-width: 768px) {
  .page-container {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
  }

  .resource-content {
    padding: 1.5rem;
  }

  .placeholder-icon {
    font-size: 2.5rem;
  }

  .resource-placeholder p {
    font-size: 1rem;
  }
}
</style> 