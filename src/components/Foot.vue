<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <span>Risk and Resilience</span>
        <div class="contact-info">
          <a href="mailto:jyfang@hznu.edu.cn">jyfang@hznu.edu.cn</a>
          <a href="" target="_blank" class="github-link">
            gsprs-hznu
            <el-icon class="github-icon"><svg t="1710400561244" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4258" width="14" height="14"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#666666" p-id="4259"></path></svg></el-icon>
          </a>
        </div>
      </div>
      <div class="footer-right">
        <span>浙江省杭州市余杭塘路2318号</span>
        <span>Copyright ©2024 Risk&Resilience, All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  padding: 25px 0;
  margin-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 600px 0 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
}

.footer-left {
  text-align: left;
  flex: 1.9;
}

.footer-right {
  text-align: right;
  flex: 2.3;
}

.footer-left span {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
}

.contact-info {
  display: flex;
  gap: 15px;
}

.contact-info a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.contact-info a:hover {
  color: #409EFF;
}

.contact-info a:hover .github-icon {
  color: #409EFF;
}

.github-link {
  position: relative;
}

.github-link::before {
  content: '|';
  position: absolute;
  left: -9px;
  color: #666;
}

.github-icon {
  margin-left: 2px;
  color: #666;
  transition: color 0.3s ease;
}

.footer-right span {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    padding: 0 15px;
    gap: 15px;
  }

  .footer-left, .footer-right {
    text-align: center;
    width: 100%;
  }

  .contact-info {
    justify-content: center;
  }
}
</style>