<template>
    <div>
        <ybsz v-show="showIndex==1" @changeIndex="parentIndex"></ybsz>
        <ylzz v-show="showIndex==2" @changeIndex="parentIndex"></ylzz>
        <jrjj v-show="showIndex==3" @changeIndex="parentIndex"></jrjj>
        <yynt v-show="showIndex==4" @changeIndex="parentIndex"></yynt>
    </div>
</template>

<script>
    import ybsz from "./tszs2/ybsz1";
    import ylzz from "./tszs2/ylzz2";
    import jrjj from "./tszs2/jrjj3";
    import yynt from "./tszs2/yynt4";
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
            yynt
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