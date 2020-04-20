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
            rtdy
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