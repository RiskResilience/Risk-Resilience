<template>
  <div class="advertisement-page">
    <div class="section">
      <h3>科研项目助理招募公告</h3>
      <div class="ad-content">
        <h4 class="project-title">项目组名称</h4>
        <p class="project-name">基于多尺度下垫面特征的暴雨时空演变特征与灾损评估模型研究</p>

        <h4 class="section-title">项目简介</h4>
        <div class="project-intro">
          <p>随着全球气候的持续变暖与以城市化发展为主要标志的高强度人类活动的不断加剧，直接影响了水循环要素的时空分布特征，增加了极端气象水文事件的发生概率，其中极端暴雨现象尤为显著。近年来2012年北京721特大暴雨、2021年郑州特大暴雨等极端事件带来的洪涝致灾过程，造成了巨大的经济损失与人员伤亡，对区域的水安全和城市可持续发展构成了严重威胁。</p>
          <p>变化环境下极端气象水文研究及其社会影响成为气候变化研究的热点问题。浙江省地形复杂，有"七山一水二分田"之说，省内气候差异较大，深受暴雨灾害的影响，不仅受到热带低压系统和西风带系统带来的持续性暴雨影响，还因快速城市化引发的局地热岛效应而面临短时强降雨的挑战。</p>
          <p>鉴于变化环境及暴雨灾害的严峻挑战，本研究团队在前期调研，以及与气象部门相关领域专家深入探讨业务需求后，明确这一选题，聚焦于浙江省多尺度下垫面特征下暴雨时空演变分析与灾损评估模型研究，是《"十四五"国家综合防灾减灾规划》《国家适应气候变化战略2035》《浙江省应对气候变化"十四五"规划》等文件提出的行动要求。</p>
          <p>本研究遵循"理解机理—发展模型—实践应用"的研究思路，基于浙江省国家和高密度区域气象台站的逐小时降水数据，协同卫星监测降雨相关数据集，开展基于多尺度下垫面特征的暴雨致灾强度演化规律研究，实现暴雨非平稳性诊断以及暴雨重现期评估，研发基于机器学习的暴雨灾损评估模型，结合环境要素开展归因分析，实现暴雨致灾阈值划定等研究。</p>
          <p>本项目是方佳毅老师主持的浙江省基金重点项目，与省气象局联合。依托本项目，支持本科生申请校星光项目，新苗项目，本创与国家级大学生创新创业训练计划项目等。</p>
        </div>

        <h4 class="section-title">项目需求</h4>
        <ul class="requirements">
          <li>良好的英语读写能力，熟悉办公软件的操作；</li>
          <li>对科学研究感兴趣，有志于在本科期间发表科研论文；</li>
          <li>愿意学习气象统计分析，GIS与python相关软件，且学习自主性高；</li>
          <li>若信息学院地信本科与哈尔科夫地信专业本科学生通过后，指导老师会自动成为综合导师并指导本科毕业论文；</li>
          <li>欢迎生态、公共管理等背景同学组成交叉学科团队一起开展研究。</li>
        </ul>

        <div class="apply-info">
          <h4 class="section-title">投递方式</h4>
          <p>投递个人简历至：<a href="mailto:jyfang@hznu.edu.cn">jyfang@hznu.edu.cn</a></p>

          <h4 class="section-title">截止时间</h4>
          <p>本团队长期招募并欢迎对研究方向感兴趣的同学</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.advertisement-page {
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

.ad-content {
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
}

.project-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
}

.project-name {
  color: #333;
  font-weight: 500;
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  color: #333;
  margin: 25px 0 15px;
  padding-left: 10px;
  border-left: 3px solid #333;
}

.project-intro p {
  text-indent: 2em;
  line-height: 1.8;
  margin-bottom: 1em;
  color: #444;
}

.requirements {
  list-style-type: decimal;
  padding-left: 1.5em;
  margin: 15px 0;
}

.requirements li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #444;
}

.apply-info {
  margin-top: 25px;
}

.apply-info p {
  color: #444;
  line-height: 1.6;
}

.apply-info a {
  color: #333;
  text-decoration: none;
}

.apply-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .advertisement-page {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
  }

  .project-title {
    font-size: 16px;
  }

  .section-title {
    font-size: 15px;
  }
}
</style>