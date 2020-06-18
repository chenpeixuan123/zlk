<template>
    <div class="content_news">
        <div class="header">
            <h5>环讯科技与建设银行共同建设长庆油田职工食堂电子缴费系统</h5>
            <p class="biaoshu_time">发布时间：  2020-04-27     10:20:19</p>
        </div>
        <div class="main_news">
<!--            <img src="@/assets/images/news/kjcx.jpg" style="width: 100%">-->
            <p>4月26日，甘肃环讯信息科技有限公司（简称：环讯科技）与建设银行庆阳分行共建的长庆油田职工食堂电子缴费系统上线运行。此项目优化了食堂缴费流程、提升了职工使用体验，并引入了建设银行专业规范的账务处理机制，获得了长庆油田与建设银行领导的充分肯定和高度评价。</p>
            <p>针对客户单位食堂充值手段单一、缴费步骤繁琐与结算系统落后的现状，环讯科技采取和建设银行“悦生活”业务对接的方式，通过使用小程序接入支付接口就能完成饭卡充值，实现对饭卡充值的流程设计与管理。此外，还增加了与金融机构对账、查询和统计等功能，实现了客户与银行之间的数据对接，架起了企业与金融机构合作的桥梁。</p>
            <p>环讯科技始终以科技创新为使命，致力于打造稳固、开放、和谐的金融科技生态。在服务好金融机构和对接用户的基础上，树立起金融信息化建设的新标杆。</p>
        </div>
        <p class="next" @click="toParent">下一篇：赵克斌副总经理赴庆阳推进住宅维修资金项目</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',12)
            }
        }
    }
</script>

<style scoped lang="scss">
    .image_describe{
        text-align: center;
        margin:10px 0;
        padding-left: 137px;
        color: rgba(0,0,0,.8)!important;
    }
    .new_title{
        color: rgba(0,0,0,.9)!important;
        font-size: 15px!important;
        font-weight: bold;
    }
    .next{
        cursor: pointer;
        color: #095793;
        font-size: 14px;
        text-align: right;
        margin-bottom: 86px;
    }
    .header{
        margin-bottom: 35px;
        h5{
            color: rgba(1,1,1,.9);
            font-size: 20px;
            text-align: center;
            margin: 33px 0 12px;
        }
        .biaoshu_time{
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