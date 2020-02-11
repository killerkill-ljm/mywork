const state={
    loginStatus:false,
    invited:false
}

const mutations={
    setStatus(state,param){
        state.loginStatus=param
    },
    setInvited(state,param){
        state.invited=param
    }
}

export default{
    namespaced:true,
    state,
    mutations
}