<template>
    <div >
        <gxx v-show="showIndex==1" @changeIndex="parentIndex"></gxx>
        <yytp v-show="showIndex==2" @changeIndex="parentIndex"></yytp>
        <zzrz v-show="showIndex==3" @changeIndex="parentIndex"></zzrz>
        <xbcl v-show="showIndex==4" @changeIndex="parentIndex"></xbcl>
        <cydxOne v-show="showIndex==5" @changeIndex="parentIndex"></cydxOne>
        <cydxTwo v-show="showIndex==6" @changeIndex="parentIndex"></cydxTwo>
        <qyfg v-show="showIndex==7" @changeIndex="parentIndex"></qyfg>
        <cxfz v-show="showIndex==8" @changeIndex="parentIndex"></cxfz>
        <rtdy v-show="showIndex==9" @changeIndex="parentIndex"></rtdy>
        <wxzj v-show="showIndex==10" @changeIndex="parentIndex"></wxzj>
        <jfxt v-show="showIndex==11" @changeIndex="parentIndex"></jfxt>
        <qywx v-show="showIndex==12" @changeIndex="parentIndex"></qywx>
        <qyxz v-show="showIndex==13" @changeIndex="parentIndex"></qyxz>  
        <rwrx v-show="showIndex==14" @changeIndex="parentIndex"></rwrx>  
        <anxm v-show="showIndex==15" @changeIndex="parentIndex"></anxm>  
        <jgpt v-show="showIndex==16" @changeIndex="parentIndex"></jgpt>     
    </div>
</template>

<script>
    import gxx from "./ygfz3/gxx1";
    import yytp from "./ygfz3/yytp2";
    import zzrz from "./ygfz3/zzrz3";
    import xbcl from "./ygfz3/xbcl4";
    import cydxOne from "./ygfz3/cydx5";
    import cydxTwo from "./ygfz3/cydx6";
    import qyfg from "./ygfz3/qyfg7";
    import cxfz from "./ygfz3/cxfz8";
    import rtdy from "./ygfz3/rtdy9";
    import wxzj from "./ygfz3/ygfz10";
    import jfxt from "./ygfz3/jfxt11";
    import qywx from "./ygfz3/qywx12";

    import rwrx from "./ygfz3/fwrx14";
    import anxm from "./ygfz3/anxm15";
    import jgpt from "./ygfz3/jgpt16";
    export default {
        name: "newsDetail",
        props:{
            showIndex:{
                default:1
            }
        },
        components:{
            gxx,
            yytp,
            zzrz,
            xbcl,
            cydxOne,
            cydxTwo,
            qyfg,
            cxfz,
            rtdy,
            wxzj,
            jfxt,
            qywx,
         
            rwrx,
            anxm,
            jgpt
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