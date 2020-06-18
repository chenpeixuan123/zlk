<template>
    <div class="content_news">
        <div class="header">
            <h5>兰州高新区召开党工委（扩大）会议传达学习党中央和省、市有关会议精神安排高新区贯彻落实工作</h5>
            <p class="biaoshu_time">发布时间：  2020-05-15     22:20:19</p>
        </div>
        <div class="main_news">

            <p>5月13日，兰州高新区召开党工委（扩大）会议，同时召开区疫情联防联控领导小组会议，传达学习4月29日、5月6日中央政治局常务委员会会议精神以及省、市有关会议精神，听取疫情常态化防控和复工复产、复学复课等有关工作情况汇报，安排高新区贯彻落实工作。市委常委、高新区党工委书记、区疫情联防联控领导小组组长王方太主持会议。</p>
            <p>会议强调，当前，新冠肺炎疫情还有很大不确定性。各级各部门（单位）要认真学习领会、坚决贯彻习近平总书记重要讲话精神，全面落实党中央和省、市关于抓紧抓实抓细常态化疫情防控工作的决策部署和工作安排，毫不懈怠抓好外防输入、内防反弹各项工作，持续巩固疫情防控成果，为决战决胜脱贫攻坚、全面建成小康社会提供有力保障。要坚持预防为主，引导群众做好必要保护。要强化主体责任，突出重点人群，继续落实“四早”措施。要突出重点场所、重点机构，严格落实防控措施。要提升检测能力，加强和完善常态化疫情防控体系，加快推进经济社会秩序全面恢复。</p>
            <p> 会议要求，各级各部门（单位）要坚定信心提神鼓劲全力赶进度、补缺口，做好二季度“拓展存量、创造增量”工作。可要严格落实领导干部“包抓帮扶项目、对接帮扶企业、对接企业融资需求”工作机制，发挥联络员作用，及时掌握企业生产、融资、发展等需求，梳理问题形成台账，清单交办、闭环管理，精细帮助企业落实政策、降低成本、纾难解困。要加强项目调度管理，拿出“脱一层皮”的精神，狠抓工作落实，服务签约项目抓落地、开工项目抓进度、固投新增抓入库。要建立今明两年“四上企业”培育库、后备库，集中要素资源支撑发展。要强化举措精准施策，激发商贸消费潜力，促进商贸消费提质扩容。</p>
            <p>会议强调，各级各部门（单位）要深入学习贯彻习近平生态文明思想和习近平总书记对甘肃重要讲话和指示精神，进一步树牢绿色发展理念，高度重视环境保护工作，将绿水青山就是金山银山理念真正入脑入心入行，作为各项工作前置条件，贯穿园区开发建设全过程。要科学制定环保督察反馈问题整改方案，强化措施、强力推进。要举一反三、全面排查，建立台帐、集中整治，守住绿色发展底线。要严格落实主体责任，加强组织领导，强化跟踪督查问责，推动各项反馈意见整改到位、生态环境问题见底见效。</p>
            <p>会议传达学习了省委林铎书记调研省直单位和兰州市信访工作及座谈会会议精神，听取高新区信访工作汇报。要求各级党组织切实提高认识、牢记宗旨，落实责任、健全机制，畅通渠道、改善环境，依法办事、解决问题，推动信访工作再上新台阶。</p>

        </div>
        <p class="next" @click="toParent">下一篇：政府工作报告 ——2020年5月22日在第十三届全国人民代表大会第三次会议上</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',7)
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
        text-align: center!important;
        color: rgba(0,0,0,.9)!important;
        font-size: 15px!important;
        font-weight: bold;
    }
    .title_describe{
        color: rgba(0,0,0,.9)!important;
        font-size: 14px!important;
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
        span{
            color: #000;
            font-weight: bold;
        }
        img{
            display: block;
            margin: 0 auto 35px;
        }
    }
</style>