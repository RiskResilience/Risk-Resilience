<template>
  <div class="members-page">
    <div class="current-members">
      <h2>课题组成员</h2>
      <div class="section">
        <h3>在读研究生:</h3>
        <ul class="students-list">
          <li>边万超</li>
          <li>杨洋央</li>
          <li>戴泽浩</li>
          <li>谢鹏</li>
          <li>黄炯豪</li>
        </ul>
      </div>
    </div>

    <div class="join-us">
      <h2>欢迎加入我们(Risk & Resilience)</h2>
      <div class="join-content">
        <p>欢迎有志青年（本科生+研究生）加入团队，参与以国家需求为主要导向的科研工作中来，主题围绕：</p>
        <ul class="research-areas">
          <li>灾害风险评估与管理</li>
          <li>气候变化治理</li>
          <li>碳中和碳达峰</li>
          <li>生态减灾</li>
          <li>人工智能在地学中应用等热点问题</li>
        </ul>

        <h3>要求：</h3>
        <ul class="requirements">
          <li>三观正、有上进心</li>
          <li>有一定自律能力和规划能力</li>
          <li>有团队意识、动手能力强</li>
          <li>专业基础扎实</li>
          <li>英语水平过关</li>
          <li>对上述研究方向充满热诚</li>
        </ul>

        <h3>培养目标：</h3>
        <p>培养学生独立的思考问题能力和批判性思考能力，支持鼓励学生申请创新挑战杯等竞赛，支持学生赴国内外知名大学深造，教学相长。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.members-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f5f5f5;
}

h3 {
  font-size: 18px;
  color: #444;
  margin: 20px 0 15px 0;
}

.section {
  margin-bottom: 40px;
}

.students-list {
  list-style-type: disc;
  padding-left: 20px;
}

.students-list li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #333;
}

.join-us {
  margin-top: 40px;
}

.research-areas, .requirements {
  list-style-type: disc;
  padding-left: 20px;
  margin: 15px 0;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #333;
}

p {
  line-height: 1.8;
  color: #333;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .members-page {
    padding: 15px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }
}
</style>