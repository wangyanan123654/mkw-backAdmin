//路由 API
//使用 router.addRoutes 动态添加路由
addRoute() {
    this.$router.addRoutes([{
      path: '/b', component: B, meta: { title: 'Custom Title B' },
    }])
}

//此时可以访问到 B 组件
<router-link to='/b'>to B</router-link>