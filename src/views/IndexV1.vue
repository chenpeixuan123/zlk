<template>
    <div style="padding-top: 81px;">

        <div class="main">
            <div class="content">
                <el-row>
                    <el-col :span="4">
                        <img src="http://images.gshxkj.com.cn/index/logo.png" alt="">
                    </el-col>
                    <el-col :span="20" >
                        <ul class="headerTab">
                            <router-link :to="{ path: '/index' }" tag="li" exact><span @click="showZheZhao=false">首页</span></router-link>
                            <router-link :to="{ path: '/aboutHX',query:{num:1}}" tag="li" ><span @mouseenter="showZheZhao=true">关于环讯</span></router-link>
                            <router-link :to="{ path: '/product' }" tag="li" ><span @click="showZheZhao=false">产品介绍</span></router-link>
                            <router-link :to="{ path: '/addHX' }" tag="li" ><span @click="showZheZhao=false">加入环讯</span></router-link>
                            <router-link :to="{ path: '/concatOus' }" tag="li" ><span style="border: none;" @click="showZheZhao=false">联系我们</span></router-link>
                        </ul>
                    </el-col>
                </el-row>
            </div>

                <div class="zhezhao" v-show="showZheZhao">
                    <el-collapse-transition>
                        <div class="content secondNav"  v-show="showZheZhao" >
                            <div class="c_gyhx" @mouseleave="showZheZhao=false">
                                <router-link :to="{ path: '/aboutHX',query:{num:1} }" tag="div" @click.native="showZheZhao=false">公司简介</router-link>
                                <router-link :to="{ path: '/aboutHX',query:{num:2} }" tag="div" @click.native="showZheZhao=false">公司使命</router-link>
                                <router-link :to="{ path: '/aboutHX',query:{num:3} }" tag="div" @click.native="showZheZhao=false">公司发展战略</router-link>
<!--                            </div>-->
<!--                            <div class="c_gyhx" @mouseleave="showZheZhao=false">-->
                                <router-link :to="{ path: '/aboutHX',query:{num:4} }" tag="div" @click.native="showZheZhao=false">公司资质</router-link>
                                <router-link :to="{ path: '/aboutHX',query:{num:5} }" tag="div" @click.native="showZheZhao=false">合作伙伴</router-link>
                            </div>
                        </div>
                    </el-collapse-transition>
            </div>

        </div>

        <!--主体内容-->
        <transition :name="transitionName" mode="out-in">
            <router-view></router-view>
        </transition>


        <!--    页脚-->


        <div class="banquan"><span>©  2018-2020</span><span>甘肃环讯信息科技有限公司(<a href="http://gshxkj.com.cn" style="color: #fff;">gshxkj.com.cn</a>)</span><span>版权所有</span> <span>陇ICP备<a href="http://beian.miit.gov.cn" style="color: #fff;">19001769</a>号-1</span> <span></span></div>



    </div>

</template>

<script>

    import IndexComponent from '../components/index';
    import aboutHX from '../components/aboutHX';
    import product from '../components/product';
    import addHX from '../components/addHX';
    import concatOus from '../components/concatOus';

    export default {
        name: 'Index',
        data(){
            return{
                showZheZhao:false,
                index:1,
                navIndex:1,
                transitionName:'slideLeft'
            }
        },
        watch:{
            '$route'(to,from){
                const path=['/index','/aboutHX','/product','/addHX','/concatOus'];
                if(path.indexOf(to.path)>path.indexOf(from.path)){
                    this.transitionName='slideLeft';
                }else{
                    this.transitionName='slideRight';
                }

            }
        },
        components:{
            IndexComponent,
            aboutHX,
            product,
            addHX,
            concatOus
        },
        methods:{
            toAddress(){
                this.$router.push({ path: '/concatOus' })
            }
        }
    }
</script>

<style scoped lang="scss">
    .headerTab{
        li{
            font-size: 16px!important;
        }
    }
    .zhezhao{
        background: rgba(0,0,0,.3);
        height: 130px;
        .secondNav{
            .c_gyhx{
                float: left;
                color: #fff;
                &:first-child{
                    margin-left: 725px;
                }
                /*&:last-child{*/
                /*    margin-left: 40px;*/
                /*}*/
                div{
                    font-size: 13px;
                    padding: 4px 0;
                    cursor: pointer;
                }
            }
        }
    }
    .slideLeft-enter-active {
        animation: fadeInLeft 1s;
    }
    .slideLeft-leave-active {
        animation: fadeOut;
    }
    .slideRight-enter-active {
        animation: fadeInRight 1s;
    }
    .slideRight-leave-active {
        animation: fadeOut;
    }
    .img_botton{
        vertical-align: middle;
        width: 15px!important;
        margin: 0 10px 0 0!important;
    }
    .banquan{
        text-align: center;
        font-size: 13px;
        color: #F6F6F6;
        background: #0066CC;
        padding: 18px 0;
        span{
            padding-right: 10px;
        }
    }
    .footMain{
        img{
            width: 70%;
            margin: 35px 0 12px;
        }
    }


    .footer{
        h2{
            margin: 35px 0 35px;
            color: #FCFBFB;
            font-size: 18px;
        }
        p{
            color: #FCFBFB;
            font-size: 16px;
            margin-bottom: 15px;
            cursor: pointer;
        }
    }
    .main{
        background: #fff;
        width: 100%;
        height: 81px;
        position: fixed;
        top: 0;
        z-index: 5;
        .content{
            width: 1196px;
            margin: 0 auto;
            img{

                margin-top: 16px;
            }
            ul{
                width: 100%;
                height: 81px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                flex-wrap: nowrap;
                li{
                    box-sizing: border-box;
                    color: #6E6E6E;
                    cursor: pointer;
                    font-size: 18px;
                    height: 80px;
                    line-height: 80px;
                    span{
                        padding: 0 30px;
                        border-right: 1px solid #999;
                    }
                }
                .active1{
                    color: #0498FC;
                }
            }
        }
    }

    .icon_phone{
        display: none;
        color: #fff;
        font-size: 40px;
        float: right;
        margin-top: 20px;
    }


</style>