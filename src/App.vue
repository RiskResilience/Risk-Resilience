<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <Introduce class="sidebar"/>
      <div class="page-content">
        <router-view/>
      </div>
    </div>
    <Foot />
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Introduce from "@/components/Introduce.vue";
import Foot from '@/components/Foot.vue';
export default {
  name: 'App',
  components: {
    Foot,
    Introduce,
    Header,
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  margin-top: 100px;
  min-height: calc(100vh - 80px);
  position: relative;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.sidebar {
  flex-shrink: 0;
  width: 300px;
  position: fixed;
  left: 13.8%;
  top: 80px;
}

.page-content {
  flex: 1;
  padding: 0 40px;
  margin-left: 350px;
  max-width: 800px;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    margin-top: 60px;
    padding: 0 15px;
  }

  .sidebar {
    position: relative;
    width: 100%;
    left: auto;
    top: auto;
    margin-bottom: 30px;
  }

  .page-content {
    margin-left: 0;
    padding: 20px;
    max-width: 100%;
  }
}
</style>