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
    export default {
        name: "newsDetail",
        props:{
            showIndex:{
                default:1
            }
        },
        components:{
            ybsz,
            ylzz,
            jrjj,
            yynt,
            qjzw,
            gcjs,
            zhly,
            yqfh,
            fxkz,
            fxqs
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