<template>
    <div class="content_news">
        <div class="header">
            <h5>环讯科技助力甘肃金融企业创新发展 </h5>
            <p class="image_describe">——记甘肃环讯信息科技有限公司</p>
            <p class="biaoshu_time">发布时间：  2020-04-03     17:30:16</p>
        </div>
        <div class="main_news">

            
            <p>甘肃环讯信息科技有限公司（以下简称：环讯科技）与白银宏鑫投资建设有限责任公司（以下简称：宏鑫投资）签订的白银宏鑫信贷管理系统项目近日成功上线运行！双方在信贷管理系统的科技融合将会为甘肃省金融信贷类企业迈上高速发展的互联网信息化轨道起到助推作用。</p>
            <p>宏鑫投资是白银国有资产经营管理中心下属的一家集公共事业、国有资产市场化运作、实业投资建设与信贷管理等业务的综合性大型集团企业。环讯科技利用自身企业优势，依托丰富的金融信息化业务模块运行经验，高效组建项目攻坚团队，紧扣企业需求，开发并实施了宏鑫投资信贷业务管理系统，以满足企业发展过程中遇到的的信息化高速查询、互联网智能融合、信贷快速结算，人力资源成本等问题。该系统的应用将解决宏鑫投资信贷业务中的自动计息、自动生成及更新还款计划、利息核算、贷后管理、统计查询等多项业务需求。该系统的顺利运行将有助于金融信贷企业的规范化管理，简化管理流程，提高管理效率，助推金融信贷企业快速高效发展，为大量金融信贷企业利用互联网与科技提供了崭新的思路和具有引领价值的示范作用。</p>
            <p>环讯科技将立足甘肃，辐射西北，利用自身金融科技业务优势，更好的为甘肃金融企业发展助力，为更多企业提供优质高效的信息化服务，为共同推进甘肃省企业快速转型和国家“一带一路”发展战略献上甘肃企业的一份力量。</p>
        </div>
        <p class="next" @click="toParent">下一篇：润通集团调研环讯科技取得圆满成功</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',9)
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