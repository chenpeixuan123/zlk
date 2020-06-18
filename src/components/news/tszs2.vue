<template>
    <div>
        <ybsz v-show="showIndex==1" @changeIndex="parentIndex"></ybsz>
        <ylzz v-show="showIndex==2" @changeIndex="parentIndex"></ylzz>
        <jrjj v-show="showIndex==3" @changeIndex="parentIndex"></jrjj>
        <yynt v-show="showIndex==4" @changeIndex="parentIndex"></yynt>
        <qjzw v-show="showIndex==5" @changeIndex="parentIndex"></qjzw>
        <gcjs v-show="showIndex==6" @changeIndex="parentIndex"></gcjs>
        <zhly v-show="showIndex==7" @changeIndex="parentIndex"></zhly>
        <yqfh v-show="showIndex==8" @changeIndex="parentIndex"></yqfh>
        <fxkz v-show="showIndex==9" @changeIndex="parentIndex"></fxkz>
        <fxqs v-show="showIndex==10" @changeIndex="parentIndex"></fxqs>
        <hmlq v-show="showIndex==11" @changeIndex="parentIndex"></hmlq>
        <jtyh v-show="showIndex==12" @changeIndex="parentIndex"></jtyh>
        <sxh v-show="showIndex==13" @changeIndex="parentIndex"></sxh>
        <bzts v-show="showIndex==14" @changeIndex="parentIndex"></bzts>   
        <sjzw v-show="showIndex==15" @changeIndex="parentIndex"></sjzw> 
        <fbsj v-show="showIndex==16" @changeIndex="parentIndex"></fbsj>
        <cxsj v-show="showIndex==17" @changeIndex="parentIndex"></cxsj>
        <hlht v-show="showIndex==18" @changeIndex="parentIndex"></hlht>
        <szzx v-show="showIndex==19" @changeIndex="parentIndex"></szzx>
    </div>
</template>

<script>
    import ybsz from "./tszs2/ybsz1";
    import ylzz from "./tszs2/ylzz2";
    import jrjj from "./tszs2/jrjj3";
    import yynt from "./tszs2/yynt4";
    import qjzw from "./tszs2/qjzw5";
    import gcjs from "./tszs2/gcjs6";
    import zhly from "./tszs2/zhly7";
    import yqfh from "./tszs2/yqfh8";
    import fxkz from "./tszs2/fxkz9";
    import fxqs from "./tszs2/fxqs10";
    import hmlq from "./tszs2/hmlq11";
    import jtyh from "./tszs2/jtyh12";
    import sxh from "./tszs2/sxh13";
    import bzts from "./tszs2/bzts14";
    import sjzw from "./tszs2/sjzw15";
    import fbsj from "./tszs2/fbsj16";
    import cxsj from "./tszs2/cxsj17";
    import hlht from "./tszs2/hlht18";
    import szzx from "./tszs2/szzx19";
    export default {
        name: "newsDetail",
        props:{
            showIndex:{
                default:1
            }
        },
        components:{
            ybsz,jtyh,sxh, ylzz,jrjj,yynt,qjzw,gcjs,zhly,yqfh,fxkz,fxqs,hmlq,bzts,sjzw,fbsj,cxsj,hlht,szzx
        },
        methods:{
            parentIndex(index){
                this.showIndex=index;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>