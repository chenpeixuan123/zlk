<template>
    <div class="content_news">
        <div class="header">
            <h5>喜报传来开门红，再接重任显壮志 </h5>
            <p class="image_describe">——记甘肃环讯信息科技有限公司重大服务合同成功签约</p>
            <p class="biaoshu_time">发布时间：  2020-03-12     20:36:16</p>
        </div>
        <div class="main_news">

            <img src="http://images.gshxkj.com.cn:8090/news/xxcl.png" style="width: 100%">
            <p>2020年3月，和风煦日，春枝待发。甘肃环讯信息科技有限公司（简称“甘肃环讯”）再传喜报，继去年签订甘肃省中小企业公共服务平台合作运营协议后，又签订了甘肃省中小企业公共服务平台软件维护技术服务合同，标志着甘肃环讯的技术服务能力再上新台阶。</p>
            <p>甘肃省中小企业公共服务平台是以1个省级服务平台为枢纽、14个市州综合窗口平台和7个产业窗口服务平台为支撑的“一枢纽、多窗口”中小企业公共服务平台网络。甘肃环讯此次签订的软件维护技术服务合同包括省枢纽中小企业服务平台、各地市中小企业服务平台、文件系统及数据库等44项系统和平台的维护内容。其中，仅省枢纽服务平台就包括了共享数据资源中心、在线服务应用平台、96871呼叫服务系统和全省平台网络运营管理系统。“云计算”技术的应用、系统和平台运维工作的复杂，使得此次服务内容涉及范围之广、技术难度之大，在甘肃环讯的创业史上尚属首次。这对正在快速发展的甘肃环讯来说，是一份嘱托，一次机遇，更是一次挑战。这也充分显现出甘肃环讯勇于承担、敢于挑战、奋发有为、迎难而上的企业奋斗精神。</p>

            <p>甘肃环讯坚信，在甘肃省中小企业公共服务平台主管单位甘肃省工信厅和甘肃省轻工研究院的指导下，在甘肃环讯及合作单位的共同努力下，一定能实现“三大”保证，即保证平台正常运行、保证数据正常对接，保证各种资源实时共享，从而让甘肃省中小企业公共服务平台有效发挥作用，为全省中小企业发展、乃至全省实体经济的发展，贡献出更大力量。</p>


        </div>
        <p class="next" @click="toParent">下一篇：聚焦创业典型 | 兰州高新区优秀孵化企业 抓防控抓生产别样红（一）</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',5)
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