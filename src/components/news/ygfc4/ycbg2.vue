<template>
    <div class="content_news">
        <div class="header">
            <h5>远程办公，同心战疫情 </h5>
            <p>发布时间：  2020-03-07     12:15:30</p>
        </div>
        <div class="main_news">
            <p>在新型冠状病毒感染的肺炎疫情全国蔓延之际，在疫情防护的关键时期，我公司员工响应“非必须不出门”的号召，积极配合客户单位提出的在家远程办公要求，听从指挥尽己所能，通过客户单位开通的VPN账号实现在家远程办公，用务实有效的行动为疫情防护贡献了一份力量。</p>

            <p>疫情发生后，公司领导及时转变工作管理思路，改变传统的工作模式，利用自身科技力量的优势，安排员工采取远程办公的方式进行在家办公，给员工更充分的工作自由，这样不但没有降低每位员工的工作效率，反而使每位员工都有了更好的工作质量，增加了员工在家办公的趣味性，甚至有员工调侃道：“这种科技改变工作方式的场景我爸爸还第一次见，他甚至不敢相信我待在家里抱着一台电脑就能完成工作。”</p>

            <div class="ygfc_img">
                <img src="http://images.gshxkj.com.cn:8090/news/tszs/ygfc1.png" style="margin-left: 166px">
                <img src="http://images.gshxkj.com.cn:8090/news/tszs/ygfc2.png" alt="">
            </div>
            
            <p>听在家远程办公的同事说，有规律的在家远程办公另有一番乐趣：早上起来洗漱完毕，吃一顿自己喜欢的早餐是对在家远程办公的最高礼节，而这整个过程都充满了仪式感。根据检查发现，在家远程办公的同事并没有因为在家远程办公而变得起居随意，相反每个人都是穿戴整齐、干净利落，他们说整洁舒适的环境才能给他们带来愉快的工作心情。在家远程办公的过程中既能完成自己工作任务又能紧密配合团队进度，统一在下班前汇报工作结果并安排好工作计划，这样的工作方式给不同的人带来了不同的感受。</p>
            <div class="ygfc_img">
                <img src="http://images.gshxkj.com.cn:8090/news/tszs/ygfc3.png" alt="" style="margin-left: 144px">
                <img src="http://images.gshxkj.com.cn:8090/news/tszs/ygfc4.png" alt="">
            </div>
            <p class="image_describe">在疫情面前，无论是否在家远程办公，工作着就是一种幸福</p>

            <p>3月份是疫情防控的关键时期，更是企业开始复工的高峰时期，甘肃环讯本着对国家负责、对合作企业负责、对员工负责的原则，坚持实现办公方式多样化，尽量减少人员接触，在复工的“浮躁”气息中愈发冷静，毕竟“革命尚未成功，还需同志继续努力！”我们始终相信只要大家携手一致、凝聚力量，就一定能打赢这场疫情防控阻击战。</p>
        </div>
        <p class="next" @click="toParent">下一篇：表扬信</p>
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
    .ygfc_img{
        overflow: hidden;
        img{
            float: left;
        }
    }
    .image_describe{
        text-align: center;
        margin-top: -20px;
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