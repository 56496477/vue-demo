<template>
    <div class="comment">
        <div class="left">
            <img v-lazy="item.author.avatar_url"  />
        </div>
        <div class="right">
            <div>{{item.author.loginname}}</div>
            <div>{{{item.content}}}</div>
            <div>{{item.create_at | timeFormat}}</div>
        </div>
    </div>
    <div style="clear: both;"></div>

</template>

<script>
    export default {
        props: ['item'],
        filters:{
            strabc:function(value){
                return value.substring(0, 50)
            }
        }
    }
</script>

<style lang="less">
    .comment {
        border-bottom: 1px solid #ccc;
        margin: 2px 10px;
        .left {
            float: left;
            img {
                width: 65px;
            }
        }
        .right {
            float: left;
            width: calc(~"100% - 80px");
            margin-left: 10px;
            >div {
                font-size: 14px;
            }
            >div:nth-of-type(3) {
                font-size: 13px;
            }
        }
    }
</style>