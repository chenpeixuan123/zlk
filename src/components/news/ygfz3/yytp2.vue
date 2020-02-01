<template>
    <div class="content_news">
        <div class="header">
            <h5>勇于突破，开拓进取，积极投身于甘肃省信息化建设</h5>
            <p>发布时间：  2020-03-01     16:50:18</p>
        </div>
        <div class="main_news">
            <p>2019年6月1日，甘肃环讯信息科技有限公司（简称“甘肃环讯”）正式通过CMMI3级评估认证，标志着甘肃环讯的软件项目研发能力迈上了一个新的台阶。 </p>
            <p>能力成熟度模型集成（CMMI，Capability Maturity Model Integration）是目前世界公认软件企业工程开发能力评估标准。通过CMMI3评估认证，标志着企业不仅能够对项目的实施有一整套的管理措施，并保障项目的完成，而且能够根据自身的标准流程，将管理体系与流程予以制度化。</p>
            <p>“用户体验是我们唯一的工作方向，科技创新是我们唯一的服务标准”，这是甘肃环讯2018年6月成立时的初心。公司成立一年多来，始终坚守初心，以强大技术团队为支撑，以科技创新为指引，不断研发推出新产品，积极投身于甘肃省信息化建设。本次CMMI3级评估认证的通过，进一步证实了甘肃环讯勇于突破的信心和开拓进取的能力。公司相关负责人介绍：“我们会以更高的要求和标准，严格要求自己，不断提升产品研发及客户服务的能力，稳步快速向前发展。”</p>
            <img src="http://images.gshxkj.com.cn/news/gsfz.png" alt="">
        </div>
        <p class="next" @click="toParent">下一篇：兰州高新区孵化企业通过ISO系列认证，为可持续创新研发奠定基础。</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',3)
            }
        }
    }
</script>

<style scoped lang="scss">
    .next{
        cursor: pointer;
        color: #095793;
        font-size: 14px;
        text-align: right;
        margin-bottom: 86px;
    }
    .header{
        margin-bottom: 25px;
        h5{
            color: rgba(1,1,1,.9);
            font-size: 20px;
            text-align: center;
            margin: 33px 0 12px;
        }
        p{
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            color:rgba(1,1,1,.9);
            background: rgba(1,1,1,.05);
        }
    }
    .main_news{
        p{
            color: #666666;
            font-size: 14px;
            line-height: 31px;
            text-indent: 2em;
            margin-bottom: 25px;
        }
        img{
            display: block;
            margin: 0 auto 35px;
        }
    }
</style>