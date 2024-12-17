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
  margin-top: 10vh;
  min-height: calc(100vh - 8vh);
  position: relative;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2%;
}

.sidebar {
  flex-shrink: 0;
  width: 20%;
  position: fixed;
  left: 13.8%;
  top: 8vh;
}

.page-content {
  flex: 1;
  padding: 0 3%;
  margin-left: 20%;
  max-width: 75%;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    margin-top: 6vh;
    padding: 0 2%;
  }

  .sidebar {
    position: relative;
    width: 100%;
    left: auto;
    top: auto;
    margin-bottom: 3vh;
  }

  .page-content {
    margin-left: 0;
    padding: 2%;
    max-width: 100%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 100px;
}
</style>