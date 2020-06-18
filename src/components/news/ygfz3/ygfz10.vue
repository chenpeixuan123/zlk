<template>
    <div class="content_news">
        <div class="header">
            <h5>环讯科技与农业银行签订技术服务协议，联合建设住宅维修资金云管理平台</h5>
            <p class="biaoshu_time">发布时间：  2020-04-20     20:20:18</p>
        </div>
        <div class="main_news">
<!--            <img src="@/assets/images/news/wxzj.jpg" style="width: 100%">-->
            <p>2020年4月20日，甘肃环讯信息科技有限公司（简称“环讯科技”）与农业银行庆阳市分行签订了技术服务协议，就《住宅维修资金云管理平台》的建设方案达成了具体的合作意向。这标志着环讯科技的金融信息化产品不仅得到省内多家金融机构的认可，也说明环讯科技在为金融机构提供定制化软件开发的服务能力上迈出了重要的一步。</p>
            <p>住宅维修资金云管理平台是环讯科技针对甘肃省各级房管局单位住宅维修资金管理的现状，根据政府出台的住宅维修资金管理制度，结合银行专业规范的账务处理机制，研发的资金云管理平台。该平台接入房管局、业主、开发商及物业公司等多应用场景，采用金融IT业先进的F5集群技术，为用户提供持续、快速、稳定的线上服务，为维修资金管理提供清晰、简洁的财务数据、丰富的统计报表，规范并简化维修资金的管理流程，从而既保障业主的计息权益，又大大提高了工作效率。</p>
            <p>环讯科技始终秉持“用户体验至上”的服务理念，在软件研发过程中针对数据有效性、资金风险控制和用户数据保密性做了相对深度有效的预案，避免在今后的运营过程中出现流量拥堵、数据失传、信息丢失和资金安全等各类风险，并依靠专业的金融信息化团队，不断进行技术创新，研发的软件产品不但安全、稳定，而且易于操作维护，成为省内同行业的标杆产品。随着公司的不断精进与卓越，环讯科技相信未来的各类产品将更加符合客户要求，更加贴合用户需要，更加具有专业高效的性能。</p>
        </div>
        <p class="next" @click="toParent">下一篇：环讯科技与建设银行共同建设长庆油田职工食堂电子缴费系统</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',11)
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