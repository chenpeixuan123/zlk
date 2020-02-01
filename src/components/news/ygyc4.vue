<template>
    <div>
        <fgjs v-show="showIndex==1" @changeIndex="parentIndex"></fgjs>
        <ycbg v-show="showIndex==2" @changeIndex="parentIndex"></ycbg>
    </div>
</template>

<script>
    import ycbg from "./ygfc4/ycbg2";
    import fgjs from "./ygfc4/fgjs1";
    export default {
        name: "newsDetail",
        components:{
            fgjs,
            ycbg
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