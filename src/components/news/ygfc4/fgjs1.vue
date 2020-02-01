<template>
    <div class="content_news">
        <div class="header">
            <h5>战胜疫情，匹夫有责--甘肃环讯复工纪实</h5>
            <p>发布时间：  2020-03-01     16:50:18</p>
        </div>
        <div class="main_news">
            <p>疫情就是命令，防控就是责任。当前正值新冠肺炎疫情防控的关键时期，也是企业复工的高峰期，甘肃环讯全体员工团结一致、上下一心，紧密配合兰州高新区政府严密的工作部署，并在公司领导身先士卒的带领下，践行“不忘初心、牢记使命”的社会责任，为全国抗疫行动贡献自己应尽的力量。</p>
            <p class="new_title">一．做好员工返兰统计，实时上报员工动态信息</p>
            <p>甘肃环讯积极配合高新区政府工作，加入钉钉“员工健康计划”每日按时统计并上报员工健康状况，严格落实员工返兰的工作安排，对返兰的人员进行统计和排查，重点落实员工的假期去向、返兰日期、航班及车次号、疫情检测等事宜，对返兰的员工坚决进行居家隔离14天的观察，每日进行管控员工动向，并要求按时上报自身身体状况。</p>
            <img src="http://images.gshxkj.com.cn/news/ygyc1.png" style="width: 100%">
            <p class="new_title">二．配合客户做好复工安排</p>
            <p>1.接受客户的统一安排，安排员工进行错峰上下班，以减少人员接触，阻断疫情传播途径。</p>
            <p>2.员工上班前必须进行体温检测，对体温异常、咳嗽或者感冒的员工安排休假并到指定发热门诊进行就诊。</p>
            <p>3.员工在工作中必须佩戴口罩，要求不能扎堆办公，就餐时选择分散就餐，人员距离尽量保持在1米以上。</p>
            <p>4.勤洗手、多喝热水，保持办公室内空气流畅，按时打扫办公室卫生，按要求进行每天至少3次喷洒消毒液消毒，不乱扔废弃口罩和垃圾。</p>
            <img src="http://images.gshxkj.com.cn/news/ygyc2.png" alt="">
            <p class="new_title">三．做好疫情教育思想工作</p>
            <p>自疫情发生以来，公司领导高度重视员工思想教育工作，不召开集中会议，采取打电话形式对员工进行“一对一”思想工作摸底和教育，安排专人及时转发权威防控指引，引导员工掌握正确的疫情情况，知道哪些方式才是科学的防疫方式，以达到让员工不造谣、不信谣、不传谣的目的，扎实的教育引导工作让每位员工都能认识到，自己是防疫大军的一份子，战胜疫情需要我们众志成城共同努力。</p>
            <img src="http://images.gshxkj.com.cn/news/ygyc3.png" alt="">
            <p>生命重于泰山，甘肃环讯越是在重要关头，越能显现出作为企业公民的责任和担当来。自疫情发生以来，公司领导积极响应高新区政府号召带头进行捐款抗疫，为全体员工树立了良好的企业形象，有效的凝聚了民心、增强了信心。我们始终相信只要全国人民万众一心、众志成城、守望相助，严格落实各项防疫措施，就一定能打赢这场没有硝烟的硬仗！</p>

        </div>
        <p class="next" @click="toParent">下一篇：远程办公，同心战疫情</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',2)
            }
        }
    }
</script>

<style scoped lang="scss">
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