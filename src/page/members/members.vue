<template>
  <div class="page-container">
    <div class="section">
      <h3>课题组成员</h3>
      <div class="content-wrapper">
        <div class="current-members">
          <div class="members-container">
            <div class="member-section">
              <h3>在读研究生</h3>
              <ul class="member-list">
                <li>边万超</li>
                <li>杨丰央</li>
                <li>戴泽浩</li>
                <li>谢鹏</li>
                <li>黄炯豪</li>
              </ul>
            </div>

            <div class="member-section">
              <h3>本科生</h3>
              <div class="grade-section">
                <div class="grade">
                  <span class="grade-year">2025届：</span>
                  <span class="students">秦亚会、项金卓</span>
                </div>
                <div class="grade">
                  <span class="grade-year">2026届：</span>
                  <span class="students">朱思颖、杨思茹、莫芷慧</span>
                </div>
                <div class="grade">
                  <span class="grade-year">2027届：</span>
                  <span class="students">李思宁、刘本榕、葛磊、邱振力、龚许立、秦佳禾、文谈心</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>欢迎加入我们(Risk & Resilience)</h3>
      <div class="content-wrapper">
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
  </div>
</template>

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

.undergrad-section {
  margin-top: 15px;
}

.grade-group {
  margin-bottom: 20px;
}

.grade-group h4 {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  padding-left: 10px;
  border-left: 3px solid #409EFF;
}

.grade-group:last-child {
  margin-bottom: 0;
}

.members-container {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}

.member-section {
  margin-bottom: 30px;
}

.member-section:last-child {
  margin-bottom: 0;
}

.member-section h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
}

.member-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding-left: 0;
}

.member-list li {
  margin: 0;
  color: #444;
}

.grade-section {
  padding-left: 0;
}

.grade {
  margin-bottom: 12px;
  line-height: 1.6;
}

.grade:last-child {
  margin-bottom: 0;
}

.grade-year {
  color: #666;
  font-weight: 500;
}

.students {
  color: #444;
}

@media (max-width: 768px) {
  .page-container {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
  }

  h3 {
    font-size: 16px;
  }

  .grade-group h4 {
    font-size: 15px;
  }

  .members-container {
    padding: 15px;
  }

  .member-list {
    gap: 15px;
  }

  .grade {
    margin-bottom: 10px;
  }
}
</style>