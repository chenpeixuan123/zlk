<template>
  <div class="content_news">
    <div class="header">
      <h5>表扬信——致玉门市住宅维修资金数据迁移小组</h5>
      <p class="biaoshu_time">发布时间： 2020-04-22 09:05:11</p>
    </div>
    <div class="main_news">
 
      <p>为完成玉门市房管局对住宅维修资金管理系统上线进度要求，环讯科技抽调多部门员工组成数据迁移小组，在一周内完成了上万条重要数据的录入、复核、迁移工作，在此公司对小组成员提出表扬，并于5月给予绩效奖励。</p>
      <p>此次迁移工作，时间紧，任务重。小组成员勇于担当，加班加点完成数据迁移工作，按时交付迁移数据，展现出了极高的团队协作精神。</p>
      <p>环讯科技正是因这样的团队奋斗精神，才能在众多企业中生存发展并成长壮大，也正是因这样的精神内涵，从而获得客户的认可，为公司进一步发展积累良好的市场口碑。</p>
      <p>千里之行，始于足下。环讯科技将继续秉持“以客户为中心，以奋斗者为本，长期坚持艰苦奋斗”的发展理念，众志成城、精益求精，为员工发展搭建广阔平台，并将精湛的专业技术和服务带给更多的客户。</p>
      <p>附小组成员：<p>
      <p>技术部——技术服务组：马恒远、孟小强、王旭东</p>
      <p>技术部——运维支持组：王茜钰、刘振邦、朱纹纹</p>
      <p>市场部：李文斌</p>
      <p>综合部：王宁、赵克平</p>
    </div>
    <p class="next" @click="toParent">下一篇：战胜疫情，匹夫有责--甘肃环讯复工纪实</p>
  </div>
</template>

<script>
export default {
  name: "newsDetail",
  methods: {
    toParent() {
      this.$emit("changeIndex", 1);
    }
  }
};
</script>

<style scoped lang="scss">
.image_describe {
  text-align: center;
  margin: 10px 0;
  padding-left: 137px;
  color: rgba(0, 0, 0, 0.8) !important;
}

.new_title {
  color: rgba(0, 0, 0, 0.9) !important;
  font-size: 15px !important;
  font-weight: bold;
}

.next {
  cursor: pointer;
  color: #095793;
  font-size: 14px;
  text-align: right;
  margin-bottom: 86px;
}

.header {
  margin-bottom: 35px;

  h5 {
    color: rgba(1, 1, 1, 0.9);
    font-size: 20px;
    text-align: center;
    margin: 33px 0 12px;
  }

  .biaoshu_time {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: rgba(1, 1, 1, 0.9);
    background: rgba(1, 1, 1, 0.05);
  }
}

.main_news {
  p {
    color: #666666;
    font-size: 14px;
    line-height: 31px;
    text-indent: 2em;
    margin-bottom: 25px;
  }

  img {
    display: block;
    margin: 0 auto 35px;
  }
}
</style>