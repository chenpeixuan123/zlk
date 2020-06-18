<template>
    <div>
        <fgjs v-show="showIndex==1" @changeIndex="parentIndex"></fgjs>
        <ycbg v-show="showIndex==2" @changeIndex="parentIndex"></ycbg>
        <ygfz v-show="showIndex==3" @changeIndex="parentIndex"></ygfz>
        <qyxz v-show="showIndex==4" @changeIndex="parentIndex"></qyxz>
    </div>
</template>

<script>
    import ycbg from "./ygfc4/ycbg2";
    import fgjs from "./ygfc4/fgjs1";
    import ygfz from "./ygfc4/ygfz3";
    import qyxz from "./ygfc4/qyxz4";

    export default {
        name: "newsDetail",
        components:{
            fgjs,
            ycbg,
            ygfz,qyxz
        },
        props:{
            showIndex:{
                default:1
            }
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