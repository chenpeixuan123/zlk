<template>
  <div class="content_news">
    <div class="header">
      <h5>环讯科技正式开通400服务热线</h5>
      <p class="biaoshu_time">发布时间： 2020-04-29 07:05:11</p>
    </div>
    <div class="main_news">
     
      <p>5月29日，甘肃环讯信息科技有限公司（简称：环讯科技）正式开通全国400服务热线：400-883-0931。开通400热线是环讯科技提升服务质量的一项重要举措，该举措不仅保障了对客户需求的随时反馈与及时解决，更加彰显了环讯科技认真负责的企业品牌形象，增强了客户信任感。</p>
      <p>环讯科技开通400热线有如下优点：绑定了多人手机和固话，保证24小时不占线，客户可以随时了解公司的产品情况；语音导航找人更方便，能迅速定位公司负责部门和员工，保证客户信息反馈更高效，为客户提供的技术咨询更及时；迅速的故障响应是高效的售后服务保障措施，做到不漏接一个电话和不错失一个客户，真正实现“7*24小时”优质服务不间断。</p>
      <p>环讯科技立足“以客户为中心”的发展原则，始终坚持“用户体验至上”的服务理念，不断改进企业服务意识，努力提升自身的服务质量。开通400热线是环讯科技优质服务的一个缩影，也是企业长期、稳固发展的一个象征，环讯科技定会以更高的要求和标准，为广大客户提供更专业、更优质、更高效的技术服务。</p>
    </div>
    <p class="next" @click="toParent">下一篇：环讯科技中标甘肃银行网络安全服务项目</p>
  </div>
</template>

<script>
export default {
  name: "newsDetail",
  methods: {
    toParent() {
      this.$emit("changeIndex", 15);
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