<template>
    <div >
        <!--    展示轮播图-->
        <div class="lunBo" ref="element" >
            <!--            <img src="" >-->
        </div>

        <div class="content" >
            <el-row>
                <el-col :span="7">
                    <div>
                        <span style="opacity: 0">123</span>
                        <ul class="left" id="div1" style="margin-top: -15px;z-index: 1;">
                            <div>
                                新闻中心
                            </div>
                            <li @click="tab(1,'党政要闻')" :class="index==1?'active1':''"><span>党政要闻</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i> </li>
                            <li @click="tab(2,'他山之石')" :class="index==2?'active1':''"><span>他山之石</span> <i :class="index==2?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                            <ul v-show="index==2">
                                <li @mouseenter="tabSuccess(1)" :class="indexSuccess==1?'active3':''"><span>拥抱数字化时代，构建大数据体系</span></li>
                                <li @mouseenter="tabSuccess(2)" :class="indexSuccess==2?'active3':''"><span>《上海中医药杂志》向全国介绍中医...</span></li>
                                <li @mouseenter="tabSuccess(3)" :class="indexSuccess==3?'active3':''"><span>守正创新 以金融科技磨砺核心竞争力</span></li>
                                <li @mouseenter="tabSuccess(4)" :class="indexSuccess==4?'active3':''"><span>银行自动化运维项目建设八大难点问...</span></li>
                            </ul>
                            <li @click="tab(3,'公司发展')" :class="index==3?'active1':''"><span>公司发展</span> <i :class="index==3?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                            <ul v-show="index==3">
                                <li @mouseenter="tabSuccess(1)" :class="indexSuccess==1?'active3':''"><span>甘肃环讯收到中共兰州高新技术产业...</span></li>
                                <li @mouseenter="tabSuccess(2)" :class="indexSuccess==2?'active3':''"><span>勇于突破，开拓进取，积极投身于甘...</span></li>
                                <li @mouseenter="tabSuccess(3)" :class="indexSuccess==3?'active3':''"><span>兰州高新区孵化企业通过ISO系列认...</span></li>
                            </ul>
                            <li @click="tab(4,'员工原创')" :class="index==4?'active1':''"><span>员工风采</span> <i :class="index==4?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                            <ul v-show="index==4">
                                <li @mouseenter="tabSuccess(1)" :class="indexSuccess==1?'active3':''"><span>战胜疫情，匹夫有责--甘肃环讯复工...</span></li>
                                <li @mouseenter="tabSuccess(2)" :class="indexSuccess==2?'active3':''"><span>远程办公，同心战疫情</span></li>
                            </ul>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="17" :style="{minHeight:height+'px'}">
                    <el-row type="flex" align="middle">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：首页 > 新闻中心  {{msg=='新闻中心'?'':'>'+msg}}</p>
                        </el-col>
                    </el-row>


                    <div class="main" v-show="index==0">
                        <div class="news_title" @click="toDetail(3,1)">
                            <div>
                                <img src="@/assets/images/news/xwzx.jpg" alt="">
                            </div>
                            <div>
<!--                                <span>2020-2-11</span>-->
                                <h5>甘肃环讯收到中共兰州高新技术产业开发区工作委员会的感谢信 </h5>
                                <p>
                                    在新型冠状病毒感染的肺炎疫情全国蔓延之际，在全区疫情
                                    防控的关键时期，贵公司为我区慷慨捐赠资金，助力疫情防控，
                                    充分体现了高新区企业强烈的大局意识、奉献精神，彰显了高新
                                    区企业面对严峻疫情心手相连、同舟共济的社会责任，传递了众
                                    人拾柴火焰高的正能量.....
                                </p>
                            </div>
                        </div>
                        <ul class="news_every">
                            <li @click="toDetail(4,2)">远程办公，同心战疫情 <span>2020-03-07</span></li>
                            <li @click="toDetail(2,4)">银行自动化运维项目建设八大难点问题解析 <span>2020-03-07</span></li>
                            <li @click="toDetail(3,2)">勇于突破，开拓进取，积极投身于甘肃省信息化建设 <span>2020-03-01</span></li>

                            <li @click="toDetail(3,3)">兰州高新区孵化企业通过ISO系列认证，为可持续创新研发奠定基础 <span>2020-03-01</span></li>
                            <li @click="toDetail(1)">习近平：全面提高依法防控依法治理能力 为疫情防控提供有力法治保障 <span>2020-03-01</span></li>
                            <li @click="toDetail(2,3)">守正创新 以金融科技磨砺核心竞争力<span>2020-03-01</span></li>

                            <li @click="toDetail(2,1)">拥抱数字化时代，构建大数据体系 <span>2020-03-01</span></li>
                            <li @click="toDetail(2,2)">《上海中医药杂志》向全国介绍中医治疗新型冠状病毒肺炎的甘肃经验<span>2020-03-01</span></li>
                            <li @click="toDetail(4,1)">战胜疫情，匹夫有责--甘肃环讯复工纪实<span>2020-03-01</span></li>


                        </ul>
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="1">
                        </el-pagination>
                    </div>
                    <!--                        党政要闻-->
                    <div class="main" v-show="index==1">
                        <dzyw></dzyw>
                    </div>
                    <!--                        他山之石-->
                    <div class="main" v-show="index==2">
                       <tszs :showIndex="tszsIndex"></tszs>
                    </div>
                    <!--                        公司发展-->
                    <div class="main" v-show="index==3">
                       <gsfz :showIndex="tszsIndex"></gsfz>
                    </div>
                    <!--                        员工原创-->
                    <div class="main" v-show="index==4">
                        <ygyc :showIndex="tszsIndex"></ygyc>

                    </div>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    import dzyw from "./news/dzyw1";
    import gsfz from "./news/gsfz3";
    import tszs from "./news/tszs2";
    import ygyc from "./news/ygyc4";
    export default {
        name: "aboutHX",
        components:{
            dzyw,
            gsfz,
            tszs,
            ygyc
        },
        data(){
            return{
                tszsIndex:1,
                index:0,
                msg:'新闻中心',
                indexSuccess:1,
                height:window.screen.height-200,
                srcList: [
                    'http://images.gshxkj.com.cn/aboutHX/ISO90011.png',
                    'http://images.gshxkj.com.cn/aboutHX/ISO90012.png',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270011.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270012.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270013.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/ISO270014.jpg',
                    'http://images.gshxkj.com.cn/aboutHX/cmmi.png'
                ]
            }
        },
        watch: {
            '$route'() {
                this.index=this.$route.query.num;
                this.msg='新闻中心';
                console.log(this.$route.query.message+'1')
                document.body.scrollTop=0;
                document.documentElement.scrollTop=0;
            }
        },
        mounted(){
            this.index=this.$route.query.num||0;
            if(this.$route.query.num==2||this.$route.query.num==3||this.$route.query.num==4){
                this.indexSuccess=this.$route.query.detaiNum;
                this.tszsIndex=this.$route.query.detaiNum;
            }
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            this.scrollTab()
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
            toDetail(index,detailIndex){
                document.body.scrollTop=this.$refs.element.offsetHeight;
                document.documentElement.scrollTop=this.$refs.element.offsetHeight;
                this.index=index;
                if(detailIndex){
                    this.indexSuccess=detailIndex;
                    this.tszsIndex=detailIndex;
                }
            },
            tab(index,msg){
                this.$route.query.num=index;
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.index=index;
                this.msg=msg;
            },
            tabSuccess(index){
                const that=this;
                that.tszsIndex=index
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.indexSuccess=index;
            },
            scrollTab(){
                const that=this;
                function htmlScroll() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight <= top) {

                        elFix.style.position = 'fixed';
                        elFix.style.top = '75px';
                        elFix.style.width = '300px';

                    }
                    else {
                        elFix.style.top = '0px';
                        elFix.style.width = '300px';
                        elFix.style.position = 'relative';
                    }
                }

                function htmlPosition(obj) {
                    var o = obj;
                    var t = o.offsetTop;
                    var l = o.offsetLeft;
                    while (o = o.offsetParent) {
                        t += o.offsetTop;
                        l += o.offsetLeft;
                    }
                    obj.data_top = t;
                    obj.data_left = l;
                }

                var oldHtmlWidth = document.documentElement.offsetWidth;
                window.onresize = function () {
                    var newHtmlWidth = document.documentElement.offsetWidth;
                    if (oldHtmlWidth == newHtmlWidth) {
                        return;
                    }
                    oldHtmlWidth = newHtmlWidth;
                    elFix.style.position = 'static';
                    htmlPosition(elFix);
                    htmlScroll();
                }
                window.onscroll = htmlScroll;

                var elFix = document.getElementById('div1');
                htmlPosition(elFix);
            },
        }
    }
</script>

<style scoped lang="scss">
    .el-pagination{
        margin: 31px 0 63px;
        display: flex;
        justify-content: center;
    }
    .news_every{
        li{
            cursor: pointer;
            position: relative;
            color: #000;
            font-size: 14px;
            padding: 9px 0 13px 30px;
            opacity: 0.9;
            border-bottom:1px solid rgba(112,112,112,.4);
            span{
                float: right;
            }
            &:before{
                content: '';
                display: block;
                position: absolute;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #58A4E7;
                top: 15px;
                left: 0;
            }
        }
    }
    .news_title{
        cursor: pointer;
        display: flex;
        margin-bottom: 20px;
        div{
            img{
                width: 305px;
            }
        }
        div:first-child{
            flex: 0.7;
        }
        div:last-child{
            flex: 1;
            h5{
                color: rgba(1,1,1,.9);
                font-size: 16px;
                font-weight:bold;
                padding-bottom: 8px;
                border-bottom:1px solid rgba(112,112,112,.4);
                span{
                    font-size: 12px;
                    float: right;
                    color: #010101;
                    vertical-align: bottom;
                }
            }
            p{
                color: #666666;
                font-size: 14px;
                line-height: 31px;
                margin-bottom: 0;
            }
        }
    }
    .zizhiL{
        height: 100%;
        box-sizing: border-box;
        background: #fff;
        div{
            display: flex;
            box-sizing: border-box;
            padding: 10px;
            height: 100%;
            border: 1px solid #D1D1D1;
            border-radius: 5px;
            img{
                width: 50%;
            }
        }
    }


    .sft{
        width: 30%!important;
    }
    .cmmi{
        margin-bottom: 50px;
        img{
            width: 100%;
        }
        .cmmiTwo{
            width: 150%;
            position: relative;
            left: -60%;
            top: 108px;
        }
    }
    .gsrzTitle{
        color: #333333;
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 20px;
    }
    .gsrz{
        div{
            img{
                width: 100%;
            }
        }
    }
    .last1{
        width: 60% !important;
        transform: rotate(-90deg);
        -ms-transform: rotate(-90deg); /* IE 9 */
    }
    .hzhb{
        border: 1px solid #ccc;
        .el-col{
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                min-height: 176px;
                img{
                    width: 90%;
                    /*vertical-align: middle;*/
                }
            }
        }
    }
    .main{
        padding-top: 25px;
        color: #666;
        font-size: 14px;
        p{
            text-indent:2em;
            margin-bottom: 32px;
            line-height: 30px;
        }
    }
    .title_right{
        text-align: right;
        font-size: 12px;
        color: #999999;
    }
    .title{
        font-size: 18px;
        color: #333;
        display: inline-block;
        border-bottom: 4px solid #99CCCC;
        padding: 10px 0;
        img{
            vertical-align: bottom;
            margin-right: 5px;
        }
    }
    .lunBo{
        height: 392px;
        margin: 0 auto;
        background-image: url("http://images.gshxkj.com.cn/news/tszs/banner.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    .content{
        width: 1196px;
        margin: -3px auto 0;
    }
    .left{
        width: 300px;
        position: relative;
        background: #fff;
        ul{
            .active3{
                background: #D0E0E7;
                color: #6598B1;
            }
            li{
                cursor: pointer;
                height: 47px;
                color: #989898;
                font-size: 14px;
                padding: 0 0 0 53px;
                line-height: 47px;
                background: #ECF2F6;
                margin-bottom: 1px;
                &>span{
                    position: relative;
                    &:before{
                        content: ' ';
                        position: absolute;
                        left: -20px;
                        top: 21px;
                        width: 6px;
                        height: 6px;
                        background-color: #989898;
                        border-radius: 50%;
                    }
                }
            }
        }
        .active1{
            background: #6598B1!important;
            color: #fff!important;
        }
        .active2{
            color: #fff!important;
        }
        div{
            width: 100%;
            top: -126px;
            background:  RGBA(114, 156, 173, 0.3);
            position: absolute;
            height: 126px;
            line-height: 126px;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }
        li{
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            color: #333;
            font-size: 16px;
            background: #F4F4F4;
            margin-bottom: 2px;
            box-sizing: border-box;
            padding: 0 35px;
            span{
                flex: 10;
            }
            i{
                font-size: 20px;
                flex: 1;
                color: #666;
            }
        }
    }
</style>