<template>
  <div class="container">
    <div class="content-wrapper">
      <!-- 个人简介 -->
      <section class="section">
        <div class="section-title">
          <el-icon><User /></el-icon>
          <span>{{ currentLanguage.titles.profile }}</span>
        </div>
        <div class="section-content">
          {{ currentLanguage.profile }}
        </div>
      </section>

      <!-- 教育背景 -->
      <section class="section">
        <div class="section-title">
          <el-icon><School /></el-icon>
          <span>{{ currentLanguage.titles.education }}</span>
        </div>
        <div class="section-content">
          <ul class="education-list">
            <li v-for="(item, index) in currentLanguage.education" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- 研究方向 -->
      <section class="section">
        <div class="section-title">
          <el-icon><Aim /></el-icon>
          <span>{{ currentLanguage.titles.research }}</span>
        </div>
        <div class="section-content">
          <ul class="research-list">
            <li v-for="(item, index) in currentLanguage.research" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- 工作经历 -->
      <section class="section">
        <div class="section-title">
          <el-icon><Briefcase /></el-icon>
          <span>{{ currentLanguage.titles.work }}</span>
        </div>
        <div class="section-content">
          <ul class="work-list">
            <li v-for="(item, index) in currentLanguage.work" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- 联系方式 -->
      <section class="section">
        <div class="section-title">
          <el-icon><Message /></el-icon>
          <span>{{ currentLanguage.titles.contact }}</span>
        </div>
        <div class="section-content">
          <ul class="contact-list">
            <li v-for="(item, index) in currentLanguage.contact" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { User, School, Aim, Briefcase, Message } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = {
  zh: {
    titles: {
      profile: "个人简介",
      education: "教育背景",
      research: "研究方向",
      work: "工作经历",
      contact: "联系方式"
    },
    profile: "方佳毅，博士，副教授，硕士生导师。中国海洋大学物理海洋学士，北京师范大学自然灾害学博士，华东师范大学博士后，上海市青年英才扬帆人才，国际应用系统分析研究所（IIASA）和英国南安普顿大学访问学者。主要从事气候变化自然灾害致灾机理、灾害风险评估和可持续发展等研究。主持国家自然科学基金、博士后面上基金等项目，作为项目骨干参与多项国家重点研发项目。在《Science》《Nature Climate Change》《Nature Communications》等期刊发表论文40余篇。担任中国地理学会自然灾害风险与综合减灾专业委员会委员。获得了浙江省地理学会先进工作者称号，研究成果入选了\"2023年度浙江省青年科技工作者优秀论文\"。",
    education: [
      "2016.1-2017.7 英国南安普顿大学/英国国家海洋研究中心 公派出国",
      "2015.5-2015.8 奥地利维也纳国际应用分析研究所 YSSP交流访学",
      "2013.9-2018.6 北京师范大学 减灾与应急管理研究院 自然灾害学 保送直博",
      "2009.9-2013.6 中国海洋大学 海洋环境学院 物理海洋学（人才基地班）本科"
    ],
    research: [
      "气候变化下自然灾害致灾机理研究：海平面上升，海岸洪水，多灾种及灾害链复合效应",
      "沿海城市自然灾害风险评估与适应：脆弱性、恢复性、适应措施及风险评估",
      "海岸带人-环境系统可持续发展研究：海岸带生态系统服务、生态减灾及可持续发展"
    ],
    work: [
      "2022.8-至今  杭州师范大学 信息科学与技术学院 遥感与地球科学研究院 副教授",
      "2018.7-2022.8 华东师范大学 地理科学学院 博士后/助理研究员"
    ],
    contact: [
      "电子邮箱：jyfang@hznu.edu.cn",
      "办公地址：杭州师范大学勤园23号楼"
    ]
  },
  en: {
    titles: {
      profile: "Profile",
      education: "Education",
      research: "Research Interests",
      work: "Work Experience",
      contact: "Contact"
    },
    profile: "Jiayi FANG,Ph.D., Associate Professor, Master Supervisor.Dr. Fang specializes in research on the mechanisms of natural disasters, disaster risk assessment, and sustainable development. She visited International Institute for Applied Systems Analysis (IIASA) and the University of Southampton, UK for nearly two years. Dr. Fang has published over 40 papers in renowned journals such as Science, Nature Climate Change, and Nature Communications. Additionally, Dr. Fang serves as a member of the Natural Disaster Risk and Integrated Disaster Reduction Professional Committee of the China Geographical Society, has been recognized with the title of \"Sailing Talent\" in Shanghai and the designation of Advanced Worker by the Zhejiang Geographical Society. Her research was also honored with the inclusion of \"Outstanding Paper by Young Science and Technology Workers in Zhejiang Province for the year 2023.\"",
    education: [
      "2016.01~2017.08   Visiting Postgraduate Research Student\nUniversity of Southampton/National Oceanography Centre, Southampton, UK\nEngineering and the Environment\nSupervisors: Prof. Robert Nicholls, Dr. Sally Brown, Dr. Thomas Wahl\nMajor: Coastal engineering\nResearch Proposal: Risk assessment of sea level changes and storm surge in coastal China",

      "2015.06~2015.08   Research assistant\nInternational Institute for Applied Systems Analysis (IIASA), Vienna, Austria\nRisk, Policy, and Vulnerability (RPV) program\nYoung Scientist Summer Program (YSSP)\nResearch Proposal: Coastal disasters and risk in China: Impacts and resilience",

      "2013.09~2018.6   Ph.D Student\nMajor: Natural Disaster\nBeijing Normal University (BNU), Beijing, China\nAcademy of Disaster Reduction and Emergency Management (ADREM); State Key Laboratory of Earth Surface Processes and Resource Ecology\nSupervisor: Prof. Peijun SHI",

      "2009.09~2013.06   Bachelor of Science\nMajor: Marine Science (Physical oceanography)\nOcean University of China (OUC), Qingdao, China\nCollege of Physical and Environmental Oceanography; Key Laboratory of Physical Oceanography. MOE."
    ],
    research: [
      "Coastal processes and hydrodynamics: sea level rise, coastal flood, multi-hazards and their impacts",
      "Climate adaptation and resilience for coastal cities: vulnerability, resilience, adaptation and risk assessment",
      "Sustainability of human-natural systems in coastal zones: coastal ecosystem services, Integrated Coastal Zone Management"
    ],
    work: [
      "2022.09~now   Associate Professor\nInstitute of Remote Sensing and Earth Sciences, Hangzhou Normal University, Zhejiang, China",

      "2018.07~2022.8   Post Doc/Assistant researcher\nSchool of Geographic Sciences, Faculty of Earth Sciences, East China Normal University, Shanghai, China"
    ],
    contact: [
      "Email: jyfang@hznu.edu.cn",
      "Office: Building 23, Qinyuan Campus, Hangzhou Normal University"
    ]
  }
}

const currentLanguage = computed(() => languages[locale.value])
</script>

<style scoped>
.container {
  margin-top: 30px;
  padding: 20px;
  max-width: 800px;
  margin: 20px 0 0 0%;
}
.content-wrapper {
  background: none;
  padding: 0;
  box-shadow: none;
}

.section {
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 2px solid #efecec; /* 标题下方添加蓝色横线 */
}

.section-title .el-icon {
  margin-right: 8px;
  font-size: 20px;
  color: #000000;
}

.section-content {
  color: #666;
  line-height: 1.8;
  font-size: 14px;
  padding: 0 10px; /* 添加内容左右间距 */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 12px;
  line-height: 1.8;
}

.education-list li,
.research-list li {
  padding-left: 20px;
  position: relative;
}

.education-list li::before,
.research-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #000000;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .section-content {
    padding: 0 5px;
  }
}
</style>