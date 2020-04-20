<template>
    <div >
        <dzywOne v-show="showIndex==1" @changeIndex="parentIndex"></dzywOne>
        <dzywTwo v-show="showIndex==2" @changeIndex="parentIndex"></dzywTwo>
    </div>
</template>

<script>
    import dzywOne from "./dzyw/dzyw1";
    import dzywTwo from "./dzyw/dzyw2";
    export default {
        name: "newsDetail",
        components:{
            dzywOne,
            dzywTwo
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