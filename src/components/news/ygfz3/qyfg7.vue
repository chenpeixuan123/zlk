<template>
    <div class="content_news">
        <div class="header">
            <h5 style="margin-bottom: -17px">兰州市高新区人社局莅临环讯科技关怀疫情期间</h5>
            <h5>企业复工复产并慰问企业职工</h5>
            <p>发布时间：  2020-03-23     20:11:50</p>
        </div>
        <div class="main_news">

            <p>2020年3月23日下午，兰州市高新区人社局领导一行莅临环讯科技。自2020年1月席卷全国的疫情开始后，高新区人社局领导心系辖区企业，为辖区企业排忧解难出谋划策，为全面复工复产付出了艰辛的努力。为进一步帮扶企业渡过难关，高新区人社局为辖区企业提供了多项政策保障和有利条件，助力企业和地方政府共克时艰。</p>
            <p>兰州市人社局于2019年授予环讯科技 “兰州市青年就业见习基地”优秀企业称号。这一称号的获得与我公司“积极响应国家号召，大力吸纳就业见习人群，强化企业在就业见习中的主导作用”密不可分。对此市区两级政府对我公司的引领作用和突出成绩给予了高度的评价，并鼓励属地企业响应号召，发挥市场主体作用，为本地青年就业见习广开言路，广设岗位。</p>
            <p>为进一步对症施策和帮扶企业，高新区人社局领导详细了解公司的发展情况，经营状况和疫情防控中面临的困难，对于疫情期间克服困难全面及时的复工复产给予了全面的肯定；对于企业和职工关心的相关问题，也给予了及时的政策导向和扶持。</p>
            <p>环讯科技衷心感谢市区两级政府对辖区企业的关怀和支持，将更加积极主动的配合地方政府，发挥地方企业的市场主体作用，参与地方建设，引领政企共建新风尚。</p>

            <img src="http://images.gshxkj.com.cn:8090/news/qyfg.png"  alt="">

        </div>
        <p class="next" @click="toParent">下一篇：环讯科技助力甘肃金融企业创新发展</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',8)
            }
        }
    }
</script>

<style scoped lang="scss">
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
            width: 50%;
            display: block;
            margin: 0 auto 35px;
        }
    }
</style>