<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <span>Risk and Resilience</span>
        <div class="contact-info">
          <div class="links-row">
            <a href="mailto:jyfang@hznu.edu.cn">jyfang@hznu.edu.cn</a>
            <span class="separator">|</span>
            <a href="" target="_blank" class="github-link">
              gsprs-hznu
              <el-icon class="github-icon">
                <svg t="1710400561244" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4258" width="14" height="14">
                  <path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#666666" p-id="4259"></path>
                </svg>
              </el-icon>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <span>浙江省杭州市余杭塘路2318号</span>
        <span>Copyright ©2024 Risk&Resilience, All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f8f9fa;
  padding: 1rem 0;
  border-top: 1px solid #e9ecef;
  z-index: 100;
}

.footer-content {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.contact-info {
  margin-top: 0.5rem;
}

.links-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info a {
  color: #666;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #409EFF;
}

.separator {
  color: #666;
  font-size: 0.875rem;
}

.footer-right span {
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .site-footer {
    position: relative;
  }

  .footer-left, .footer-right {
    text-align: center;
    width: 100%;
  }

  .footer-left span,
  .footer-right span {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .links-row {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.github-icon {
  margin-left: 2px;
  color: #666;
  transition: color 0.3s ease;
}

.contact-info a:hover .github-icon {
  color: #409EFF;
}
</style>