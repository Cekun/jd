<template>
<div>
  <transition :name="transitionName">
    <router-view class="Router"></router-view>
  </transition>
  <cube-tab-bar class="botnav"
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
  </cube-tab-bar>
  <span class="countsum">{{countsum}}</span>
</div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  
  data () {
    return {
      transitionName:'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-like'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      },{
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
        case '首页':
          this.$router.push({path:'/botnav/index'});
          break;
        case '分类':
          this.$router.push({path:'/botnav/list'});
          break;
        case '搜索':
          this.$router.push({path:'/botnav/search'});
          break;
        case '购物车':
          this.$router.push({path:'/botnav/cart'});
          break;
        case '我的':
          this.$router.push({path:'/botnav/mine'});
          break;  
      }
    }
  },
  created(){
    switch (this.$route.path) {
      case '/botnav/index':
      this.selectedLabelDefault='首页';
      break;
      case '/botnav/list':
      this.selectedLabelDefault='分类';
      break;
      case '/botnav/search':
      this.selectedLabelDefault='搜索';
      break;
      case '/botnav/cart':
      this.selectedLabelDefault='购物车';
      break;
      case '/botnav/mine':
      this.selectedLabelDefault='我的';
      break;
      default:
        this.selectedLabelDefault='首页';
        break;
    }
  },
  computed: {
    ...mapGetters({
        countsum:'countSum'
    })
  }
}

</script>

<style lang="stylus">
.cube-tab-bar.botnav
  position fixed
  left 0
  bottom 0
  width 100%
  z-index 1000
.Router
  position absolute
  width 100%
  transition all 0.8s ease  
.countsum
  position  fixed
  bottom 33px
  right 23%
  z-index  1001
  width 18px
  height 18px
  line-height 18px
  border-radius 50%
  font-size 14px
  background red
  color #fff  
</style>

