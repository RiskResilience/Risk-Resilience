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
<<<<<<< HEAD
  margin-top: 10vh;
  min-height: calc(100vh - 8vh);
  position: relative;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2%;
=======
  margin-top: 100px;
  min-height: calc(100vh - 80px);
  position: relative;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

.sidebar {
  flex-shrink: 0;
<<<<<<< HEAD
  width: 20%;
  position: fixed;
  left: 13.8%;
  top: 8vh;
=======
  width: 300px;
  position: fixed;
  left: 13.8%;
  top: 80px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

.page-content {
  flex: 1;
<<<<<<< HEAD
  padding: 0 3%;
  margin-left: 20%;
  max-width: 75%;
=======
  padding: 0 40px;
  margin-left: 350px;
  max-width: 800px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
<<<<<<< HEAD
    margin-top: 6vh;
    padding: 0 2%;
=======
    margin-top: 60px;
    padding: 0 15px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  }

  .sidebar {
    position: relative;
    width: 100%;
    left: auto;
    top: auto;
<<<<<<< HEAD
    margin-bottom: 3vh;
=======
    margin-bottom: 30px;
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
  }

  .page-content {
    margin-left: 0;
<<<<<<< HEAD
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
=======
    padding: 20px;
    max-width: 100%;
  }
}
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
</style>