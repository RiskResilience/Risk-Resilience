<template>
  <header class="site-header" role="banner">
    <div class="header-border-top"></div>
    <div class="wrapper">
      <nav class="header-nav">
        <router-link class="site-title" to="/">{{ $t('nav.home') }}</router-link>
        <div class="nav-links">
          <router-link to="/academic">{{ $t('nav.academic') }}</router-link>
          <router-link to="/honors">{{ $t('nav.honors') }}</router-link>
          <router-link to="/members">{{ $t('nav.members') }}</router-link>
          <router-link to="/research">{{ $t('nav.research') }}</router-link>
          <a @click="handleLanguageChange" class="lang-switch">EN/CH</a>
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 200px 0 360px;
}

.header-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
}

.nav-links {
  display: flex;
  gap: 50px;
  align-items: center;
}

.nav-links a {
  color: #666;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 0;
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
  margin-right: 100px;
  font-size: 22px;
  color: #666;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  padding: 8px 0;
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
    padding: 0 20px;
  }

  .nav-links {
    gap: 20px;
  }

  .site-title {
    margin-right: 30px;
    font-size: 18px;
  }

  .nav-links a {
    font-size: 14px;
  }
}
</style>