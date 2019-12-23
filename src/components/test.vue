<template>
    <div class="aa">
        <fieldset>
            <legend style="margin-left: 10px">用户基本信息</legend>
            <div>
                <label for="">用户名</label>
                <input type="text">
            </div>
            <div>
                <label for="">电子邮箱</label>
                <input type="password">
            </div>
            <div>
                <label for="">密 码</label>
                <input type="password">
            </div>
            <div>
                <label for="">确认密码</label>
                <input type="password">
            </div>
        </fieldset>
    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped lang="scss">
.aa{
    padding:100px;
}
</style>