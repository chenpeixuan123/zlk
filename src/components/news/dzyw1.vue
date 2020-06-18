<template>
    <div >
        <dzywOne v-show="showIndex==1" @changeIndex="parentIndex"></dzywOne>
        <dzywTwo v-show="showIndex==2" @changeIndex="parentIndex"></dzywTwo>
        <dzywThree v-show="showIndex==3" @changeIndex="parentIndex"></dzywThree>
        <dzywFour v-show="showIndex==4" @changeIndex="parentIndex"></dzywFour>
        <ztdw v-show="showIndex==5" @changeIndex="parentIndex"></ztdw>
        <xqgz v-show="showIndex==6" @changeIndex="parentIndex"></xqgz>
        <gzbg v-show="showIndex==7" @changeIndex="parentIndex"></gzbg> 
        <drqx v-show="showIndex==8" @changeIndex="parentIndex"></drqx>       
        <fzbz v-show="showIndex==9" @changeIndex="parentIndex"></fzbz>        
    </div>
</template>

<script>
    import dzywOne from "./dzyw/dzyw1";
    import dzywTwo from "./dzyw/dzyw2";
    import dzywThree from "./dzyw/dzyw3";
    import dzywFour from "./dzyw/dzyw4";
    import ztdw from "./dzyw/ztdw5";
    import xqgz from "./dzyw/dzyw6";
    import gzbg from "./dzyw/dzyw7";
    import drqx from "./dzyw/ddqx8";
    import fzbz from "./dzyw/fzbz9";
    export default {
        name: "newsDetail",
        components:{
            dzywOne,
            dzywTwo,
            dzywThree,
            dzywFour,
            ztdw,
            xqgz,
            gzbg,drqx,fzbz
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