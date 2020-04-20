<template>
    <div class="content_news">
        <div class="header">
            <h5>兰州高新区孵化企业通过ISO系列认证，为可持续创新研发奠定基础。</h5>
            <p>发布时间：  2020-03-01     16:50:18</p>
        </div>
        <div class="main_news">
           
            <p>2019年，兰州高新区创业服务中心在孵企业甘肃环讯信息科技有限公司（简称“甘肃环讯”），在通过CMMI3级评估认证后，又相继取得ISO9001、ISO27001及ISO22301认证，标志着甘肃环讯不仅可向客户提供预期和满意的合格产品，同时，其风险防控能力也达到了一定标准，为公司可持续创新研发奠定基础。</p>
            <p>ISO9001认证表明公司在各项管理系统整合上已达到了国际标准，能够持续稳定地向顾客提供预期和满意的合格产品； ISO27001认证从预防控制的角度出发，保障信息系统与业务的安全与正常运作；ISO22301认证使公司认识到潜在的危机和相关影响，从而制订响应、业务和连续性的恢复计划，以提高风险防范能力。</p>
            <p>甘肃环讯负责人介绍，“欲乎上者得乎中，欲乎中者得乎下。公司自成立以来，既重发展，又重内控，在快速提升产品研发及客户服务能力的同时，多措并举提升自身及产品的风险防控能力。比如，近期ISO系列认证的获取也是公司重视风控的表现，这也为下一步公司的可持续创新研发奠定了基础”。</p>
            <p>企业要发展，风控要先行。只有风险防控做到位，才能在我省信息化建设浪潮中持久发力。甘肃环讯在管理及风险防控工作上“高标准、严要求”的做法，为高新区孵化企业树立了标杆，也值得我省中小科技企业学习借鉴。</p>
            <img src="http://images.gshxkj.com.cn/news/tszs/zzrz2.png" style="width: 100%">
            <img src="http://images.gshxkj.com.cn/news/tszs/zzrz3.png" style="width: 100%">
        </div>
        <p class="next" @click="toParent">下一篇：喜报传来开门红，再接重任显壮志</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',4)
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
        margin-bottom: 35px;
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