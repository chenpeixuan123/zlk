<template>
    <div class="content_news">
        <div class="header">
            <h5>润通集团调研环讯科技取得圆满成功</h5>
            <p class="biaoshu_time">发布时间：  2020-04-12     17:18:18</p>
        </div>
        <div class="main_news">
            <p>4月10日下午，陇西润通民生集团（简称：润通集团）总工王建中带队一行七人专程来访甘肃环讯信息科技有限公司（简称：环讯科技），就润通便民生活缴费平台开展调研并取得圆满成功。本次调研以座谈会的形式开展，双方就陇西县居民生活用水、取暖、物业服务等方面收费管理信息化程度不足的现状，后期润通便民生活缴费平台软件运行过程中可能会出现的问题进行充分讨论。</p>
            <img src="@/assets/images/news/rtdy1.webp" style="width: 100%">
            <p>调研中，环讯科技副总经理赵克斌首先对润通集团王总一行来访表示热烈欢迎，对公司历程、经营发展现状、拥有资质、市场拓展等情况进行介绍。润通集团对软件开发需求、缴费平台的工作流程及特点、后续可能会遇到的问题进行现场调研,环讯科技各位工作人员逐一解答。座谈中，大家畅所欲言，结合双方工作实际，本着“提出问题、解决问题”的原则，对工作中已经出现或可能遇到的问题进行了热烈而深入的讨论。与会领导用心听、用笔记，能在现场解答的问题就在现场解答，对个别需要会后协调的事项也做了整理和汇总。</p>
            <img src="@/assets/images/news/rtdy2.webp" style="width: 100%">
            <p>双方领导互相表达了合作诚意。通过此次调研，润通集团各位领导给予环讯科技充分的肯定，尤其在取得资质、市场开拓和产品研发方面，已经取得了显著的业绩，一致认为环讯科技的队伍敢打敢拼、召之即来、来之能战、战之必胜。</p>
            <img src="@/assets/images/news/rtdy3.webp" style="width: 100%">
            <p>润通便民生活缴费平台是一个优化了供水、供暖、物业服务收费管理等流程的综合缴费管理平台，在丰富线下缴费方式的同时，提供线上缴费模式，具有高效、稳定、智能的优点，真正实现了惠民、便民的要求。环讯科技高度重视此次与润通集团的合作，这在环讯科技的业务发展、对外合作中具有里程碑意义，更是一次为人民服务、通过科技改变老百姓生活的躬身践行。</p>
            <p>环讯科技定将继续围绕客户、产品、市场、服务、区域等五大维度，转变观念，勇于开拓，把公司整体市场做强做大，研发出更多符合市场要求的产品，以金融科技为手段，实现便民惠民，赢得社会和广大人民群众认可。</p>
        </div>
        <p class="next" @click="toParent">下一篇：环讯科技与农业银行签订技术服务协议，联合建设住宅维修资金云管理平台</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',10)
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