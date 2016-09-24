<template>

    <div class="headers">
        <x-header>{{topic.title | cutstring}}</x-header>
    </div>

    <div class="content">
        <div class="cont">{{{topic.content}}}</div>
    </div>
    <div class="totol">
        回复数:{{topic.reply_count}}
    </div>
    <div class="replies">
        <comment v-for="item in topic.replies" :item="item"></comment>
    </div>
</template>

<script>
    import XHeader from 'vux-components/x-header'
    import Group from 'vux-components/group'
    import Cell from 'vux-components/cell'
    import Scroller from 'vux-components/scroller'
    import Comment from '../components/comment'
    export default {
        components: {
            XHeader,
            Group,
            Cell,
            Scroller,
            Comment
        },
        route: {
            data() {

            }
        },
        data() {
            return {
                topic: []
            }
        },
        filters: {
            cutstring: function(value) {
                var a = "" + value
                return a.substring(0, 8) + "..."
            }
        },
        methods: {
            getTopic: function() {

                var id = this.$route.params.id;

                this.$http.get('https://cnodejs.org/api/v1/topic/' + id)
                    .then((res) => {
                        this.topic = res.data.data;
                    })
                    .catch((res) => {
                        console.log('error')
                    })

                //              var _this = this;
                //              $.ajax({
                //                  type: 'get',
                //                  url: 'https://cnodejs.org/api/v1/topic/' + id,
                //                  dataType: 'json',
                //                  success: function(res) {
                //                      _this.topic = res.data;
                //                  },
                //                  error: function(res) {
                //                      console.log('eaaaarror')
                //                  }
                //              });

            }
        },
        ready() {
            this.getTopic();
        }
    }
</script>

<style>
    .cont {
        padding: 8px 10px;
        font-size: 16px;
        line-height: 28px;
        text-indent: 25px;
        word-wrap: break-word;
        /*遇到空格整个单词显示不完就自动换行到下一行*/
        word-break: break-all;
        /*如果一行没有空格就到头截断单词换行*/
    }
    
    img {
        width: 80%;
        margin: 0 auto;
    }
    
    .totol {
        font-size: 14px;
        padding: 0px 10px;
        font-weight: 800;
    }
</style>