const state={
    index:0,
    historyChosePre:[],
    historyChoseLat:[],
    dayCount:2
}

const getters={
    getPre:state =>{
        return state.historyChosePre
    },
    getPreLast:state=>{
        return state.historyChosePre[state.historyChosePre.length-1]
    },
    getLatLast:state=>{
        return state.historyChoseLat[state.historyChoseLat.length-1]
    }
}

const mutations={
    setIndex(state,i){
        state.index=i
    },
    prePush(state,item){
        state.historyChosePre.push(item)
    },
    latPush(state,item){
        state.historyChoseLat.push(item)
    },
    clear(state){
        state.historyChoseLat=[]
        state.historyChosePre=[]
    },
    setDays(state,p){
        state.dayCount=p
    }
}

const actions={
    setIndex(store,i){
       store.commit('setIndex',i)
    },
    prePush(store,item){
        store.commit('prePush',item)
    },
    latPush(store,item){
        store.commit('latPush',item)
    },
    clear(store){
        store.commit('clear')
    },
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}