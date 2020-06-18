<template>
  <div class="content_news">
    <div class="header">
      <h5>环讯科技研发预售房交易资金监管平台</h5>
      <p class="biaoshu_time">发布时间： 2020-06-12 21:15:11</p>
    </div>
    <div class="main_news">
    
      <p>近日，甘肃环讯信息科技有限公司（简称：环讯科技）通过深入调研用户需求，充分吃透国家政策的基础上，研发“预售房交易资金监管平台”。该平台是对房屋预售人和预购人之间交易行为和资金使用监管的平台，也是环讯科技实现技术进步和市场开拓的重要体现。</p>
      <p>预售房交易资金监管平台是针对我国房地产市场发展历程短、相关法规不够完善的现状，研发的用于保证用户资金安全、房产安全和信息安全的监管平台，此平台还可在扩大客户交易规模的同时，提高资金交易业务的处理能力，有效制约了开发商的违规行为。</p>
      <p>未来，环讯科技还将继续深入调研客户需求，追求研发技术进步和市场开拓，坚持以客户为中心的发展原则努力提升用户体验，利用自身金融科技业务的优势，为客户提供精准的业务需求解决方案，提供可持续的技术支持与售后服务，为客户量身打造符合自身业务发展的系统软件，用优异的产品、过硬的技术、周到的服务赢得客户的好评与认可。</p>
    </div>
    <p class="next" @click="toParent">下一篇：感谢信</p>
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