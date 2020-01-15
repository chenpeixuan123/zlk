<template>
    <div>
        <!--    展示轮播图-->
        <div class="lunBo" ref="element">
<!--            <img src="http://images.gshxkj.com.cn/aboutHX/about_bg.png" alt="">-->
            <el-carousel height="407px">
                <el-carousel-item >
                    <div class="lunboImg bg1" >
                        <h2>住宅维修基金云管理平台</h2>
                        <p><span style="background: #003333">记账到户 / 管理到幢 / 专户储存</span></p>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="lunboImg bg2" >
                        <h2 >陇银资本互联网平台</h2>
                        <p><span style="background: #663333">操作简便 / 配置灵活 / 工作效率高</span></p>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="lunboImg bg3" >
                        <h2 style="color: #fff;">农民工工资保证金监管平台</h2>
                        <p><span style="background: #FFFFCC;color: #336699;">专项存储 / 分项计息 / 专项支取</span></p>
                    </div>
                </el-carousel-item>

            </el-carousel>
        </div>

        <div class="content">
            <el-row>
                <el-col :span="7">
                    <span style="opacity: 0">123</span>
                    <ul class="left" id="div2" style="margin-top: -18px;z-index: 2;">
                        <div>
                            产品介绍
                        </div>
                        <li @click="tab(1,'从事行业')" :class="index==1?'active1':''"><span>从事行业</span> <i :class="index==1?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                        <li @click="tab(2,'成功案例')" :class="index==2?'active1':''"><span>成功案例</span> <i :class="index==2?'el-icon-caret-bottom active2':'el-icon-caret-right'"></i></li>
                        <ul v-show="index==2">
                            <li @click="tabSuccess(1)" :class="indexSuccess==1?'active3':''"><span>住宅维修基金云管理平台</span></li>
                            <li @click="tabSuccess(2)" :class="indexSuccess==2?'active3':''"><span>陇银资本互联网平台</span></li>
                            <li @click="tabSuccess(3)" :class="indexSuccess==3?'active3':''"><span>惠民云服务平台</span></li>
                            <li @click="tabSuccess(4)" :class="indexSuccess==4?'active3':''"><span>豪马驾校后台云管理系统</span></li>
                            <li @click="tabSuccess(5)" :class="indexSuccess==5?'active3':''"><span>智慧社区</span></li>
                            <li @click="tabSuccess(6)" :class="indexSuccess==6?'active3':''"><span>农民工工资保证金监管平台</span></li>
                            <li @click="tabSuccess(7)" :class="indexSuccess==7?'active3':''"><span>服刑人员个人资金及消费管理系统</span></li>
                            <li @click="tabSuccess(8)" :class="indexSuccess==8?'active3':''"><span>运营甘肃省中小企业公共服务平台</span></li>
                        </ul>
                    </ul>
                </el-col>
                <el-col :span="17" >
                    <el-row type="flex" align="middle" style="border-bottom: 1px solid #CCCCCC;">
                        <el-col :sm="12">
                            <span class="title"><img src="http://images.gshxkj.com.cn/aboutHX/icon11.png" alt="">{{msg}}</span>
                        </el-col>
                        <el-col :sm="12">
                            <p class="title_right">当前位置：首页 > 产品介绍 > {{msg}}</p>
                        </el-col>
                    </el-row>

                    <!--                        从事行业-->
                    <div class="main" v-show="index==1">
                        <el-row type="flex" :gutter="20" class="cshy">
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>1</h2>
                                    <p>司法行业</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>2</h2>
                                    <p>银行行业</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>3</h2>
                                    <p>政府行业</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>4</h2>
                                    <p>系统集成与应用</p>
                                </div>
                            </el-col>
                            <el-col :span="5" :xs="{span:12}">
                                <div style="background-image: url('http://images.gshxkj.com.cn/product/bg15.png')">
                                    <h2>5</h2>
                                    <p>网络工程技术与服务</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <!--                     成功案例   -->
                    <div class="success" v-show="index==2">
                        <div v-show="indexSuccess==0" style="min-height: 500px;">
                            <p style="margin-top: 29px;width: 85%;">
                                我公司本着务实创新、认真负责的态度对待每一个项目和每一个客户，通过我们不懈的努力去成就客户，以客户
                                满意度为唯一标准，从而实现客户与公司共赢的发展目标。目前我公司具有大量成功案例，在使用过程中，获得客户的 <span style="font-size: 22px;color: #F0B71D;font-style: oblique;">一致好评。</span>
                            </p>
                            <div style="width: 85%;">
                                <img src="http://images.gshxkj.com.cn/product/hzgy.png" alt="" style="width: 591px;margin: 0 auto;display: block;margin-top: 68px;">
                            </div>
                        </div>
                        <div v-show="indexSuccess==1">
                            <h3>住宅维修基金云管理平台</h3>
                            <img src="http://images.gshxkj.com.cn/product/list1.png" alt="">
                            <p>

                                为满足我省住宅维修基金管理的诉求，保障维修基金缴纳人的合法权益，确保维修基金合法、合理使用，
                                甘肃银行与我公司合作，根据我省住宅维修基金管理的规章、制度及管理流程，定制研发了一套住宅维修基金
                                云管理平台。住宅维修基金云管理平台是紧紧围绕着建设部的管理办法，并融合各地区的管理模式，实现对住
                                宅维修基金的规范化管理，实现高效、准确、公正的管理目标，并且实现计账到户、管理到幢、专户储存等业
                                务目标。住宅维修基金云管理平台部署在安全性高、速度快的甘肃银行网络机房，为每一笔基金的安全性做了
                                最高的安全保障；该平台以操作简便、配置灵活的使用体验带给用户更高的工作效率。


                            </p>
<!--                            <h5>应用领域：便民缴费、银企合作</h5>-->
<!--                            <h5>市场占有率：六县两区</h5>-->
<!--                            <h5>软件著作权：《住宅维修基金云管理平台》</h5>-->
                        </div>
                        <div v-show="indexSuccess==2">
                            <h3>陇银资本互联网平台</h3>
                            <img src="http://images.gshxkj.com.cn/product/list2.png" alt="">
                            <p>陇银资本互联网平台是针对甘肃陇银资本管理有限公司（以下称陇银资本）提供一系列的行内所需数据展示及统计，为车险分期产品交叉导流甘肃银行及天安财险存量客户，并通过自身渠道引流新增客户的枢纽。该平台实现了对用户、部门以及对应权限的管理和配置；对客户信息及还款计划的管理、报表展示；财务清算功实现了客户短信预警、财务人员短信预警、返佣明细、垫付明细等高效准确的管理；贷款管理功能实现了对客户信息、还款记录、放款记录、逾期还款、客户还款计划的展示、预警、数据更新；退保功能实现了逾期退保的展示、预警以及邮件提醒功能；除上述功能该系统还有个人信息的维护、公共参数的配置、地区信息的配置以及操作日志的记录；该平台以操作简便、配置灵活的使用体验带给用户更高的工作效率。</p>
                        </div>
                        <div v-show="indexSuccess==3">
                            <h3>惠民云服务平台 </h3>
                            <img src="http://images.gshxkj.com.cn/product/list3.png" alt="">
                            <p>
                                公司为了积极响应国家改善民生和加强社会保障的政策号召，致力于教育助学、便民缴费、生活消费等与百姓日常生活
                                相关的民生服务领域，为百姓提供便捷、高效的银行金融产品和综合服务体系。经过调研甘肃各地区生活收缴情况，就现阶
                                段居民生活缴费难、管理难等情况，提出“惠民云服务平台”的理念，真正实现便民、惠民的服务宗旨，社区居民均可通过
                                “惠民云服务平台”足不出户、轻松缴费、统一管理。该平台具有开放性、便捷性、延展性等特性，使之融入普通寻常百姓
                                的日常生活中，不断为社会大众提供量身定制的差异化产品及个性化惠民服务。
                            </p>
                        </div>
                        <div v-show="indexSuccess==4">
                            <h3>豪马驾校后台云管理系统</h3>
                            <img src="http://images.gshxkj.com.cn/product/list4.png" alt="">
                            <p>豪马驾校后台云管理系统对驾校进行全方位互联网化管理，涵盖学员管理、教练管理、教学管理、场地管理、车辆管 理、网点管理、行政管理、财务管理、人事管理、终端管理等方面，实现了核心流程自动化、关键决策数据化、 重点数据可视化管理。针对不同的用户角色提供全面的实用功能，结合当前流行且使用的“微信小程序”、 “微信公众号”等通道，为用户提供可靠、便捷的服务。打造生态化智慧平台，可将保险业务、陪驾业务、买 车租车业务及贷款业务集成进来，形成“人+车+金融+数字”为一体的生态服务圈。</p>
                        </div>
                        <div v-show="indexSuccess==5">
                            <h3>智慧社区</h3>
                            <img src="http://images.gshxkj.com.cn/product/list5.png" alt="">
                            <p>
                                智慧社区是一个专为物业管理公司打造的移动智能物业管理服务系统。系统为物业公司和业主提供实时互
                                动平台，通过公众号平台，业主可实现快速查看小区公告、快速报修、查询/缴纳物业费、参与小区各项活动、
                                随时随地查看等功能。智慧社区，能大幅提高物业公司数字管理水平，更能提升业主对物业的服务满意度。主
                                要功能模块有智能门禁、缴物业费、智能车闸、小区报修、小区管路、商圈等。
                            </p>
                        </div>
                        <div v-show="indexSuccess==6">
                            <h3>农民工工资保证金监管平台 </h3>
                            <img src="http://images.gshxkj.com.cn/product/list6.png" alt="">
                           <p>
                               农民工工资保证金监管平台是针对近年来土建项目农民工工资拖欠问题而开发的监管平台。该平台实现了
                               保证金监管全流程，主要有执法局对建设单位向保证金专户交存专项资金的全流程的监督管理过程，包括建设
                               单位信息管理、工程项目信息管理、保证金标准制定、保证金交存、补交、支用、退还等功能，该业务涉及对
                               用户有执法局用户、财政局用户、银行用户、建设单位用户。保证金监管平台将满足实现对农民工工资保证金
                               的规范化管理，实现高效、准确、公正的管理目标，并且实现专项存储、分项计息、专项支取等业务目标。甘
                               肃银行通过为执法局搭建该平台从中吸纳巨额保证金存款。
                           </p>
                        </div>
                        <div v-show="indexSuccess==7">
                            <h3>服刑人员个人资金及消费管理系统</h3>
                            <img src="http://images.gshxkj.com.cn/product/list6.png" alt="">
                            <p>“服刑人员个人资金及消费管理系统”（以下简称资管系统），是集成监狱、银行、开发公司为一体的资 金管理系统，系统运行中，犯人家属可以通过监狱要求银行给犯人开通的账户中汇入款项，犯人可以在监狱中 通过公司提供的购物终端机进行查询账户和购物，所有交易都在整套系统中完成不涉及现金交易，方便了监狱 购物登记的流程并大大减少了监狱工作人员的工作量，所有交易会产生交易数据可以保存并查询，除此之外还 能准确的生成各种资金明细和报表，极大的方便了服刑人员购物和监狱工作人员对犯人的资金管理。</p>
                        </div>
                        <div v-show="indexSuccess==8">
                            <h3>运营甘肃省中小企业公共服务平台 </h3>
                            <img src="http://images.gshxkj.com.cn/product/list6.png" alt="">
                            <p>

                                甘肃省中小企业公共服务平台是甘肃省工业和信息化厅下属的公共服务类平台，旨在为中小企业解决 发
                                展的共性问题，促进中小企业结构调整，不断提升企业创新能力和核心竞争力，发挥综合性服务平台枢纽作用。
                                具备“六个一”基本服务功能：一个在线服务网站、一站式窗口服务、一条服务咨询热线套服务标准、一个服
                                务产品资源库、一支服务专家团队。通过以政府引导、公益服务带动、社会专业服务机构广泛参与的运营方式，
                                整合服务资源、创新服务模式、有效对接服务需求，为中小企业提供找得到、用得起、有保障、能见效的服
                                务。

                            </p>
                        </div>
                    </div>


                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aboutHX",
        data(){
            return{
                index:1,
                msg:'从事行业',
                indexSuccess:0
            }
        },
        mounted(){
            if(this.$route.params.num){//1~8
                this.index=2;
                this.indexSuccess=this.$route.params.num;
            }
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
            this.scrollTab()
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
            scrollTab(){
                const that=this;
                function htmlScroll1() {
                    var top = document.body.scrollTop || document.documentElement.scrollTop;
                    if (that.$refs.element.offsetHeight < top+4 ) {
                        elFix.style.position = 'fixed';
                        elFix.style.top = '78px';
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
                //
                var oldHtmlWidth = document.documentElement.offsetWidth;
                window.onresize = function () {
                    var newHtmlWidth = document.documentElement.offsetWidth;
                    if (oldHtmlWidth == newHtmlWidth) {
                        return;
                    }
                    oldHtmlWidth = newHtmlWidth;
                    elFix.style.position = 'static';
                    htmlPosition(elFix);
                    htmlScroll1();
                }


                window.onscroll = htmlScroll1;
                var elFix = document.getElementById('div2');
                htmlPosition(elFix);
            },
            tab(index,msg){
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.index=index;
                this.msg=msg;
                this.indexSuccess=0;
            },
            tabSuccess(index){
                const that=this;
                document.body.scrollTop=that.$refs.element.offsetHeight;
                document.documentElement.scrollTop=that.$refs.element.offsetHeight;
                this.indexSuccess=index;
            }
        }
    }
</script>

<style scoped lang="scss">
.lunboImg{
    overflow: hidden;
    background-size: 100% 100%;
    height: 100%;
    text-align: center;
    h2{
        margin: 120px 0 25px;
        font-size: 56px;
        color: #FFFFCC;
    }
    p{
        font-size: 18px;
        color: #fff;
        span{
            padding: 5px 15px;
            border-radius: 15px;
        }
    }
}
.bg1{
    background-image: url('http://images.gshxkj.com.cn/product/pro1.png');
}
.bg2{
    background-image: url('http://images.gshxkj.com.cn/product/pro2.png');
}
.bg3{
    background-image: url('http://images.gshxkj.com.cn/product/pro3.png');
}
    .success{
        div{
            h5{
                font-size: 15px;
                line-height: 30px;
            }
            h3{
                font-size: 18px;
                margin: 34px 0 13px;
                color: #333333;
                font-weight: normal;
            }
            img{
                width: 100%;
            }
            p{
                margin: 13px 0 34px;
                font-size: 14px;
                color: #666;
                text-indent: 2em;
                line-height: 30px;
            }
        }
    }
    @media screen and (max-width:768px){
        .cshy{
            flex-wrap: wrap;
        }
    }
    .main{
        padding-top: 25px;
        color: #666;
        font-size: 14px;
        div{
            overflow: hidden;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            min-height: 231px;
            padding: 0 10px;
            h2{
                text-align: center;
                margin:25px 0 20px;
                font-size: 26px;
                color: #fff;
            }
            p{
                margin: 60px 0;
                font-size: 18px;
                color: #666666;
                text-align: center;
            }
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
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content{
        width: 1196px;
        margin: 0 auto 50px;
    }
    .left{
        z-index: 99;
        width: 300px;
        position: relative;
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
                        top: 5px;
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
            background:  RGBA(114, 156, 173, 0.5);
            position: absolute;
            height: 126px;
            line-height: 126px;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }
        &>li{
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            color: #333;
            font-size: 16px;
            background: #F4F4F4;
            box-sizing: border-box;
            padding: 0 35px;
            &:first-of-type{
                margin-bottom: 2px;
            }
            &>span{
                flex: 10;
            }
            &>i{
                font-size: 20px;
                flex: 1;
                color: #666;
            }
        }
    }
</style>