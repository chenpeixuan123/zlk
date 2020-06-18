<template>
  <div class="content_news">
    <div class="header">
      <h5>环讯科技中标甘肃银行网络安全服务项目</h5>
      <p class="biaoshu_time">发布时间： 2020-06-12 21:05:11</p>
    </div>
    <div class="main_news">
      
      <p>近日，甘肃环讯信息科技有限公司（简称：环讯科技）与北京神州绿盟科技有限公司（简称：绿盟科技）联合中标甘肃银行网络安全服务项目。这是环讯科技在网络信息安全业务迈出的新的有力一步，也是公司开拓发展道路、实现技术进步的一次机遇。环讯科技将坚持创新发展这一核心理念，努力做好金融科技信息安全的“金管家”。</p>
      <p>银行的网络安全环境错综复杂，主要包括了操作系统与数据库、安全访问控制、网络入侵检测、防火墙与防病毒入侵、数据备份与灾难恢复等内容。环讯科技承接的甘肃银行网络安全服务就是使用当前流行的计算机技术，对软件系统进行风险评级和渗透测试；在特殊时期保障客户重点工作在安全上的技术支持，着重对于系统入侵检测、防火墙和远程安全方面进行实时监控和分析，在第一时间发现威胁并阻断攻击，并按时对甘肃银行的系统安全评估以生成安全评估报告。</p>
      <p>环讯科技作为甘肃金融科技服务领域的新兵，此次与绿盟科技合作，在按要求完成客户网络信息安全任务的同时，更有机会学习业内领先的网络安全技术与管理经验。环讯科技也将始终坚持以科技创新为使命，以创新技术服务和风险控制为手段，加大对信息安全技术探索的广度与深度。</p>
    </div>
    <p class="next" @click="toParent">下一篇：环讯科技研发预售房交易资金监管平台</p>
  </div>
</template>

<script>
export default {
  name: "newsDetail",
  methods: {
    toParent() {
      this.$emit("changeIndex", 16);
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