const state={
    username:'mike',
    password:'123456',
    sex:'男',
    xing:'陈'
}

const mutations={
    setInfo(state,info){
        state.xing=info.xing
        state.password=info.password
        state.sex=info.sex
        state.username=info.username
    }
}

export default {
    namespaced:true,
    state,
    mutations
}