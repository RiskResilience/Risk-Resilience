<template>
  <div class="page-container">
    <div class="section">
      <h3>进展动态</h3>
      <div class="content-wrapper">
        <ul class="news-list">
          <li class="news-item">
            <div class="news-date">2024-10-30</div>
            <div class="news-title">边万超赴上海师范大学参加第十八届"都市文化"研究生学术论坛并获奖</div>
            <div class="news-content">
              <p>2024年10月30日，课题组硕士生边万超赴上海师范大学徐汇校区参加第十八届"都市文化"研究生学术论坛。本次论坛由上海师范大学研究生院、研工部主办，上海师范大学环境与地理科学学院、上海市应急管理局韧性城市综合风险防控重点实验室共同承办，主题为"都市文化与韧性安全城市"。本届论坛共收到来自浙江大学、同济大学、兰州大学、中国科学院成都山地灾害与环境研究所、中国地震局工程力学研究所等全国各地高校和科研机构研究生约110余篇论文稿件，涉及地理学、社会学、人口学、建筑学、规划学等多学科领域。</p>
              <p>课题组硕士生边万超在"城市环境与风险"分论坛作题为《评估沿海新围垦区域相对海平面上升背景下的海岸洪水风险——以温州龙港市为例》的口头报告并获二等奖，结合高分辨率InSAR地面沉降数据，考虑海堤设防水平，选用二维水动力模型探究了相对海平面变化背景下的海岸洪水风险变化。</p>
            </div>
            <div class="news-images">
              <img src="/image/progress/shnu1.png" alt="论坛现场">
              <img src="/image/progress/shnu2.png" alt="获奖证书">
            </div>
          </li>
          <li class="news-item">
            <div class="news-date">2024-10-25</div>
            <div class="news-title">课题组赴福建师范大学参加2024年中国地理学会自然灾害风险与综合减灾专业委员会学术年会</div>
            <div class="news-content">
              <p>2024年10月25日至27日，课题组方佳毅老师和研究生边万超、本科生朱思颖、杨思茹、莫芷慧赴福建福州参加2024年中国地理学会自然灾害风险与综合减灾专业委员会学术年会。</p>
              <p>本次学术年会由自然灾害风险与综合减灾专业委员会主办，福建师范大学地理科学学院碳中和未来技术学院、应急管理部-教育减灾与应急管理研究院（北京师范大学）所承办。"全球气候变化下的自然灾害防治韧性与系统风险防范"为本次会议主题。本次大会日程分为大会开幕式和特邀报告、十个分会场日程和青年学者优秀报告三大部分，共包含了4个大会主旨报告、97个分会场报告、34个青年学者优秀报告。来自国内95所各大高校、科研院所的400余名代表参加会议。</p>
              <p>课题组师生在本次会议参加了多个主题的学术交流。其中，方佳毅老师在"复合极端气候水文灾害风险"专题作题为《沿海城市地面沉降与相对海平面变化影响研究进展》的口头报告，系统阐述了沿海城市地面沉降与相对海平面上升的叠加效应对沿海城市造成影响的研究大致进展，还对相关前沿论文进行了深入分析。研究生边万超作题为《Assessing Multiple Drivers of Coastal Flooding Risks and Land Subsidence Impacts in Newly Reclaimed Areas: Implications For Sustainable Coast Habitats》的口头报告，评估了新开垦地区的沿海洪水风险和土地沉降影响的多重驱动因素对可持续海岸栖息地的影响。本科生朱思颖依托自身的国创项目，作题为《基于物理脆弱性的极端台风浪对海水养殖业定量风险评估研究》的口头报告，报告了网笼的物理脆弱性与分析极端台风的危险性的计算、海水养殖业的定量风险评估模型的建立和未来的期望损失的预测。本科生杨思茹作题为《沿海极值水位非平稳性拟合及致灾效应分析》的口头报告，报告了海平面上升影响下对极值水位重现期和重现水平的影响，并探讨非平稳条件下极值水位的不确定性。</p>
              <p>课题组这次在福州这座古城，参加了中国地理学会盛会。同学们既被自然美景和文化深蕴所吸引，也对研究课题有了更深的理解。在与来自全国的专家学者进行深入交流的过程中，同学们意识到了自己研究中的短板和改进空间，这为同学们的研究工作提供了新的动力。因此，课题组成员将继续不懈努力，积极投身学术交流，致力于在气候变化适应和区域可持续发展领域深入研究，贡献自己的智慧和力量。</p>
            </div>
            <div class="news-images">
              <img src="/image/progress/fjnu1.png" alt="会议现场1">
              <img src="/image/progress/fjnu2.png" alt="会议现场2">
              <img src="/image/progress/fjnu3.png" alt="会议现场3">
              <img src="/image/progress/fjnu4.png" alt="会议现场4">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Document } from '@element-plus/icons-vue'

const getImageUrl = (name) => {
  return new URL(`/image/progress/${name}`, import.meta.url).href
}
</script>

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

.news-list {
  list-style: none;
  padding: 0;
}

.news-item {
  margin-bottom: 30px;
  padding: 20px;
  border-left: 3px solid #fff;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 0 8px 8px 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.03);
}

.news-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.news-date {
  color: #666;
  font-size: 15px;
  margin-bottom: 8px;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.news-content {
  white-space: pre-line;
  text-align: justify;
  line-height: 1.8;
  color: #444;
  font-size: 15px;
  text-indent: 2em;
}

.news-content p {
  text-indent: 2em;
  margin-bottom: 1em;
}

.news-images {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* 第一个新闻项的图片布局（2张图） */
.news-item:first-child .news-images {
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* 第二个新闻项的图片布局（4张图） */
.news-item:nth-child(2) .news-images {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
}

.news-images img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  aspect-ratio: 4/3;  /* 调整图片比例 */
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  image-rendering: crisp-edges;
}

.news-images img:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

@media (max-width: 768px) {
  .page-container {
    width: 90%;
    margin: 1rem auto;
    padding: 1rem;
  }

  h3 {
    font-size: 18px;
  }

  .news-item {
    padding: 15px;
  }

  .news-images {
    gap: 1rem;
  }
  
  /* 移动端时所有图片都单列显示 */
  .news-item:first-child .news-images,
  .news-item:nth-child(2) .news-images {
    grid-template-columns: 1fr;
  }
  
  .news-title {
    font-size: 16px;
  }
  
  .news-content {
    font-size: 14px;
  }
}
</style> 