<template>

    <div class="headers">
        <x-header :left-options="{showBack: false}">Cnode首页</x-header>
    </div>
    <div class="content">

        <scroller lock-x scrollbar-y use-pulldown use-pullup v-ref:scroller @pulldown:loading="load" @pullup:loading="upload">
            <group title="列表">
                <cell v-for="item in items" v-link="{path: '/topic/' + item.id}" track-by="$index" :title="item.title" :inline-desc="item.create_at | timeFormat" is-link>
                </cell>
            </group>
        </scroller>
    </div>

</template>

<script>
    import XHeader from 'vux-components/x-header'
    import Cell from 'vux-components/cell'
    import Group from 'vux-components/group'
    import Scroller from 'vux-components/scroller'
    export default {
        components: {
            XHeader,
            Cell,
            Group,
            Scroller
        },
        data() {
            return {
                items: [],
                page: 1,
                limit: 20
            }
        },
        methods: {
            getList: function() {
                this.$http.get('https://cnodejs.org/api/v1/topics/?page=' + this.page + '&tab=all&limit=' + this.limit)
                    .then((res) => {
                        for(var i=0;i<this.limit;i++){
                            this.items.push(res.data.data[i])
                        }
                        
                    })
                    .catch((res) => {
                        console.log('error')
                    })
            },
            load: function(uuid) {
                setTimeout(() => {
                    this.$broadcast('pulldown:reset', uuid)
                    this.$http.get('https://cnodejs.org/api/v1/topics/?page=1&tab=all&limit=20')
                        .then((res) => {
                            this.items = res.data.data;
                        })
                        .catch((res) => {
                            console.log('error')
                        })
                }, 1000)
            },
            upload: function(uuid) {
                this.$broadcast('pullup:reset', uuid)
                this.page += 1
                this.getList();
            }
        },
        ready() {
            this.getList()
        }
    }
</script>

<style>

.conul li{
    line-height: 45px;
    height: 45px;
    overflow: hidden;
    padding-left: 8px;
    border-bottom: 1px solid #ccc;
    width: 100%;
}


</style>