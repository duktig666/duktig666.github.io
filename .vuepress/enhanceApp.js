// 解决中文路由问题 详情参看：https://github.com/vuepress-reco/vuepress-theme-reco/issues/395
export default (ctx) => {
    ctx.router.beforeEach((to, from, next) => {
        // 解决中文标签/分类路由无法被正确加载的问题
        if (!(/\.html$/.test(to.path)) && decodeURIComponent(to.path) !== to.path) {
            return next({
                ...to,
                path: decodeURIComponent(to.path)
            })
        }

        //触发百度的pv统计
        // if (typeof _hmt != "undefined") {
        //     if (to.path) {
        //         _hmt.push(["_trackPageview", to.fullPath]);
        //         console.log("上报百度统计", to.fullPath);
        //     }
        // }

        // 不特殊处理.html
        next()
    })

    // 临时解决，防止内部调用钩子再处理
    ctx.router.beforeEach = () => {
        return
    }
}
