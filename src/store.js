import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//export default new Vuex.Store({
let store = new Vuex.Store({
  state: {
    token:'',
    cartarry:JSON.parse(localStorage.getItem('cartarry')) || [],//存储购物车商品的数组
  },
  mutations: {
    //设置vuex的token
    setToken(state,token){
      state.token=token
    },
    //添加商品到购物车
    tocart(state, tag){
      let goods = state.cartarry.find(v=>v.title==tag.label)
      if (goods) {
        goods.count+=1
      } else {
        state.cartarry.push({title: tag.label, count: 1})
      }
    },
    //购物车商品加一
    cartAdd(state, index){
      state.cartarry[index].count++;
    },
    //购物车数量减一
    cartRemove(state, index){
      var count = state.cartarry[index].count
      if(count > 1){
        state.cartarry[index].count--;
      }else{
        if(window.confirm('确定从购物车移除商品吗？')){
          state.cartarry.splice(index, 1);
        }
      } 
    },
    //清空购物车
    clearCart(state){
      state.cartarry = [];
    }
  },
  actions: {

  },
  //相当于我们vue 计算属性
  getters: {
    countSum: state=>{
      let num = 0;
      state.cartarry.forEach(v => {
        num+=v.count
      })
      return num;
    }
  }
})
//监听每次调用mutations的时候,都会进这个方法，然后我们可以做一些自己想做的处理
store.subscribe((mutation, state) => {
  localStorage.setItem('cartarry',JSON.stringify(state.cartarry));
})
export default store;
