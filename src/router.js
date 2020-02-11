import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js'
Vue.use(VueRouter)

const routes=[]

routes[0]={
    path:'/',
    component:() => import ('@/views/first/first.vue'),
    meta:{title:"首页"}
}

routes[1]={
  path:'/layout',
  component:() => import ('@/layout/default.vue'),
  meta:{title:'layout'},
  children:[
    {
      path:'calendar',
      meta:{title:'calendar'},
      component:() => import ('@/views/calendar/calendar.vue')
    },
    {
      path:'menu',
      meta:{title:'menu'},
      component:() => import ('@/views/menu/menu.vue')
    },
    {
      path:'paginating',
      meta:{title:'paginating'},
      component:() => import ('@/views/pagination/pagination.vue')
    },
    {
      path:'rating',
      meta:{title:'rating'},
      component:() => import ('@/views/rating/rating.vue')
    },
    {
      path:'swiper',
      meta:{title:'swiper'},
      component:() => import ('@/views/swiper/swiper.vue')
    }
  ]
}

routes[2]={
  path:'/layout',
  component:() => import ('@/layout/layout.vue'),
  children:[
    {
      meta:{title:'example'},
      component:()=> import ('@/views/page/page.vue'),
      path:'example'
    }
  ]
}

routes[3]={
  path:'/login',
  component:() => import('@/views/login/login.vue'),
  meta:{title:'login'}
}

routes[4]={
  path:'/register',
  component:() => import ('@/views/register/register.vue'),
  meta:{title:'register'}
}

routes[5]={
  path:'/test',
  component:() => import ('@/views/test/test.vue'),
  meta:{title:'test'}
}

routes[6]={
  path:'/layout',
  component:() => import ('@/layout/resume.vue'),
  children:[
    {
      path:'f',
      component:() => import ('@/views/resume/f.vue'),
      meta:{tab:'2016初-2017末',title:'f'}
    },
    {
      path:'s',
      component:() => import ('@/views/resume/s.vue'),
      meta:{tab:'2018初-2019初',title:'s'}
    },
    {
      path:'t',
      component:() => import ('@/views/resume/t.vue'),
      meta:{tab:'2019初-现在',title:'f'}
    }
  ]
}

routes[7]={
  path:'/invite',
  component:() => import ('@/views/invitation/invite.vue'),
  meta:{title:'invite'}
}

const router=new VueRouter({
    mode:'history',
    routes
})

function meta(to){
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
}

router.beforeEach((to,from,next)=>{
  if(store.state.login.invited || to.path==='/invite'){
    meta(to)
    next()
  }else{
    next('/invite')
  }
 })

export default router