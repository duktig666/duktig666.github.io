export default {
    init() {
        const tj = document.querySelector('#cnzz');
        const span = document.createElement("span");
        span.id = "cnzz_stat_icon_1280934766";
        const script = document.createElement("script");
        script.src =
            "https://s4.cnzz.com/z_stat.php?id=1280934766&online=1&show=line";
        script.type = "text/javascript";
        tj.append(span);
        tj.append(script);
        // 只在首页展示
        const hidden = location.pathname !== "/";
        if (hidden) {
            tj.className += ' hidden-tj'
        } else {
            tj.className += ' home-tj'
        }
    }
}
