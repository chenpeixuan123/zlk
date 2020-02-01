<template>
    <div >
        <gxx v-show="showIndex==1" @changeIndex="parentIndex"></gxx>
        <yytp v-show="showIndex==2" @changeIndex="parentIndex"></yytp>
        <zzrz v-show="showIndex==3" @changeIndex="parentIndex"></zzrz>
    </div>
</template>

<script>
    import gxx from "./ygfz3/gxx1";
    import yytp from "./ygfz3/yytp2";
    import zzrz from "./ygfz3/zzrz3";
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
            zzrz
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