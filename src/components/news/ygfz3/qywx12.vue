<template>
    <div class="content_news">
        <div class="header">
            <h5>赵克斌副总经理赴庆阳推进住宅维修资金项目</h5>
            <p class="biaoshu_time">发布时间： 2020-04-15 10:05:11</p>
        </div>
        <div class="main_news">
            <!--            <img src="@/assets/images/news/kjcx.jpg" style="width: 100%">-->
            <p>5月12日至5月14日，环讯科技副总经理赵克斌带领住宅维修资金项目组前往庆阳地区，推进环县、宁县住宅维修资金云管理平台建设工作。</p>
            <p>5月12日，公司项目组与环县房产服务中心、环县农业银行的负责人及业务骨干，就“环县房产服务中心住宅维修资金云管理平台”项目座谈，座谈中对项目当前进度、存在问题及解决方法进行了深入讨论，并制定了下一步推进计划，三方领导就系统上线后的工作进行了具体部署。公司产品经理在维修资金业务办理点，进一步了解目前维修资金交存业务办理流程，并与业务人员沟通业务细节。5月13日，赵总与环县农业银行行长进行了会谈，就后续与农行环县支行生活缴费类项目及“三资平台”的合作深入交流了意见，农行领导给予环讯科技充分的肯定，并表示将扩大与我公司在金融信息化领域的合作规模。5月14日，赵总与宁县房管局负责人及宁县农业银行行长分别进行了会谈，从客户和用户的角度分析解决现有问题，并介绍我公司住宅维修资金云管理平台优势，获得宁县房产服务中心和宁县农业银行领导的认可，均表达了共同建设宁县住宅维修资金云管理平台的意愿。 </p>
            <p>本次庆阳之行，有效推进了环县住宅维修资金项目实施上线进度与宁县住宅维修资金项目的启动，同时项目组沉入一线与两县住宅维修资金业务经办人员沟通业务流程，打磨产品，紧紧围绕环讯科技“以用户为中心”的发展策略来提升用户体验，为项目后期推广打下了坚实的基础。</p>
        </div>
        <p class="next" @click="toParent">下一篇：环讯科技正式开通400服务热线</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods: {
            toParent() {
                this.$emit('changeIndex', 14)
            }
        }
    }
</script>

<style scoped lang="scss">
    .image_describe {
        text-align: center;
        margin: 10px 0;
        padding-left: 137px;
        color: rgba(0, 0, 0, .8) !important;
    }

    .new_title {
        color: rgba(0, 0, 0, .9) !important;
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
            color: rgba(1, 1, 1, .9);
            font-size: 20px;
            text-align: center;
            margin: 33px 0 12px;
        }

        .biaoshu_time {
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            color: rgba(1, 1, 1, .9);
            background: rgba(1, 1, 1, .05);
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