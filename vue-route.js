//全局守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from)
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve', to, from)
    next()
})

router.afterEach((to, from) => {
    console.log('afterEach', to, from)
})

//局部守卫
beforeRouteEnter(to, from, next) {
    // 不能获取组件实例 `this`
    console.log('beforeRouteEnter', to, from)
    next()
}
beforeRouteUpdate(to, from, next){
    console.log('beforeRouteUpdate', to, from)
    next()
}
beforeRouteLeave(to, from, next) =>{
    console.log('beforeRouteLeave', to, from)
    next()
}

//路由元信息
//通过 meta 定义路由元信息

const routes = [
  { path: '/a', component: A, meta: { title: 'Custom Title A' } }
]

//使用 meta 信息动态修改标题

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'default title'
  }
  next()
})