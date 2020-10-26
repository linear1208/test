import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
        msg: 'hello',
        cart:[{name:'EGG',count:6}],
    }),
    mutations: {
        setMsg(state, plyload) {
            state.msg = plyload
        },
        addToCart(state,name){
            const item = state.cart.find(
                elm => elm.name ===name
            )
            if(item){
                item.count ++
            }else {
                state.cart.push({name,count:1})
            }
        }

    },
    getters:{
        cart(state){
            return state.cart;
        },
        numCartItem(state){
            return state.cart.reduce(
                (acc,item) =>(acc + item.count),
            )
        }
    }
})