<template>
  <header class="site-header" role="banner">
    <div class="header-border-top"></div>
    <div class="wrapper">
      <nav class="header-nav">
        <router-link class="site-title" to="/">方佳毅学术主页</router-link>
        <div class="nav-links">
          <router-link to="/academic">学术成果</router-link>
          <router-link to="/honors">项目奖励</router-link>
          <router-link to="/members">课题组成员</router-link>
          <router-link to="/research">科研项目</router-link>
          <router-link to="/progress">进展动态</router-link>
          <router-link to="/team-building">团建活动</router-link>
          <router-link to="/advertisement">广告</router-link>
          <router-link to="/resources">共享资源</router-link>
          <router-link to="/" @click="handleLanguageChange" class="lang-switch">EN/CH</router-link>
        </div>
      </nav>
    </div>
    <div class="header-border-bottom"></div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const handleLanguageChange = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  if (window.location.hash !== '#/') {
    window.location.hash = '#/'
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  margin-left: 0px;
}

.wrapper {
  max-width: 80%;
  margin: 0 auto;
  padding: 0 5%;
}

.header-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5vh 0;
}

.nav-links {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.nav-links a {
  color: #666;
  text-decoration: none;
  font-size: 1.125rem;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #333;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links a:hover {
  color: #333;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

.site-title {
  margin-right: 6rem;
  font-size: 1.375rem;
  color: #666;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  padding: 0.5rem 0;
}

.header-border-top,
.header-border-bottom {
  height: 1px;
  background-color: #e0e0e0;
  width: 100%;
}

.header-border-bottom {
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.site-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #333;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.site-title:hover {
  color: #333;
}

.site-title:hover::after {
  transform: scaleX(1);
}

.nav-links a.router-link-active {
  color: #333;
}

.nav-links a.router-link-active::after {
  transform: scaleX(1);
  height: 3px;
}

@media (max-width: 768px) {
  .wrapper {
    padding: 0 1rem;
    max-width: 100%;
  }

  .nav-links {
    gap: 0.8rem;
  }

  .site-title {
    margin-right: 1rem;
    font-size: 1rem;
  }

  .nav-links a {
    font-size: 0.875rem;
    padding: 0.25rem 0;
  }
}

@media (max-width: 576px) {
  .header-nav {
    flex-direction: column;
    padding: 0.5vh 0;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
  }

  .site-title {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>