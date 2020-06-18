<template>
    <div class="content_news">
        <div class="header">
            <h5>表扬信</h5>
            <p class="biaoshu_time">发布时间：  2020-04-20     21:18:18</p>
        </div>
        <div class="main_news">
            <img src="@/assets/images/news/byx.png" style="width: 100%">
        </div>
        <p class="next" @click="toParent">下一篇：表扬信——致玉门市住宅维修资金数据迁移小组</p>
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