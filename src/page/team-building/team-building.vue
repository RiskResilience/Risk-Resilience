<template>
  <div class="team-building-page">
    <div class="section">
      <h3>团建活动</h3>
      <div class="activity-content">
        <div class="activity-item">
          <div class="activity-text">
            <p>团建活动内容整理中，敬请期待...</p>
          </div>
          <div class="activity-images">
            <!-- 图片将在后续添加 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-building-page {
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

.activity-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
}

.activity-item {
  margin-bottom: 30px;
}

.activity-item:last-child {
  margin-bottom: 0;
}

.activity-text {
  margin-bottom: 20px;
}

.activity-text p {
  text-indent: 2em;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1em;
}

.activity-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.activity-images img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 4/3;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.activity-images img:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
  .team-building-page {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
  }

  .activity-images {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style> 