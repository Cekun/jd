<template>
    <div>
        <ul>
            <li v-for="item in mineArry" class='mineItem' @click='itemClick(item)' :key="item.label">
                <span class="mineTitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mineArry:[
                {label: '商品收藏'},
                {label: '我的足迹'},
                {label: '店铺收藏'},
                {label: '我的订单'},
                {label: '退出',type: 'exit'},
            ]
        }
    },
    methods:{
        itemClick(item){
            if(item.type == 'exit'){
                this.$store.commit('setToken','');
                localStorage.removeItem('token');
                this.$router.push({path: '/login'});
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .mineItem
        font-size 14px
        text-align left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .mineTitle
            display inline-block
            width 90%
</style>

