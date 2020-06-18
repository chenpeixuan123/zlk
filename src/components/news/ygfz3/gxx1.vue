<template>
    <div >
        <div class="gxx">
            <img src="http://images.gshxkj.com.cn:8090/news/tszs/gxx.png" alt="">
        </div>
        <p class="next" @click="toParent">下一篇：勇于突破，开拓进取，积极投身于甘肃省信息化建设</p>
    </div>
</template>

<script>
    export default {
        name: "newsDetail",
        methods:{
            toParent(){
                this.$emit('changeIndex',2)
            }
        }
    }
</script>

<style scoped lang="scss">
.gxx{
    width: 394px;
    border:1px solid rgba(0,0,0,0.2);
    margin: 0 auto;
}
.next{
    cursor: pointer;
    color: #095793;
    font-size: 14px;
    text-align: right;
    margin-bottom: 66px;
    margin-top: 30px;
}
</style>