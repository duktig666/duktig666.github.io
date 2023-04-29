(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{482:function(e,a,r){"use strict";r.r(a);var s=r(3),t=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("@[TOC]")]),e._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),a("p",[e._v("最近使用了Mac系统的电脑作为了测试服务器，但是在Mac系统的电脑使用docker安装nginx进行反向代理，以前在centos7系统的电脑上无往不利的docker容器启动方式，反而出现了问题。\n启动方式：")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("docker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("name nginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("net host "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("mac"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Desktop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("project"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("html "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("mac"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Desktop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx_conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("d nginx  \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("以前在centos7的系统上容器构建后，都可以访问成功。进入nginx执行"),a("code",[e._v("nginx -t")]),e._v("，配置文件没有问题；执行"),a("code",[e._v("nginx -s reload")]),e._v("，重启nginx也没有报错。但是就是不能通过浏览器访问。")]),e._v(" "),a("p",[e._v("排除防火墙和80端口的问题，还是不能访问。\n"),a("br")]),e._v(" "),a("h2",{attrs:{id:"解决过程一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决过程一"}},[e._v("#")]),e._v(" 解决过程一")]),e._v(" "),a("p",[e._v("在经过多次卸载重装nginx容器都没能成功的情况下，就是用最常见的容器启动命令启动：")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("docker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("name nginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("d nginx  \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("结果浏览器可以直接进行访问了。")]),e._v(" "),a("p",[e._v("但是这样明显是不能满足我们的需求的，nginx需要进行反向代理的时候，未来项目的端口往往是位置的，所以使用 ==--net host共享宿主机端口== 是比较好的解决方案。")]),e._v(" "),a("h3",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[e._v("#")]),e._v(" 分析")]),e._v(" "),a("p",[e._v("对比上文的容器启动命令，一般来说不是-v映射目录的问题，要不启动时会报错。多以应该问题出自"),a("code",[e._v("--net host")]),e._v("上。")]),e._v(" "),a("p",[e._v("于是基于此进行分析，最终找到了原因。\n"),a("br")]),e._v(" "),a("h2",{attrs:{id:"mac系统下docker容器无法使用-net-host共享宿主机端口的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac系统下docker容器无法使用-net-host共享宿主机端口的原因"}},[e._v("#")]),e._v(" Mac系统下docker容器无法使用--net host共享宿主机端口的原因")]),e._v(" "),a("h3",{attrs:{id:"docker的网络配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker的网络配置"}},[e._v("#")]),e._v(" docker的网络配置")]),e._v(" "),a("p",[e._v("docker的网络配置分为四种,：host,overlay,macvlan,bridge")]),e._v(" "),a("h4",{attrs:{id:"host模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host模式"}},[e._v("#")]),e._v(" host模式")]),e._v(" "),a("p",[e._v("与宿主机共享网络，也就是在网络这块不会与宿主机隔离，而是共享宿主机的网络配置，并且 ==容器不会分配自己的ip地址==。")]),e._v(" "),a("blockquote",[a("p",[e._v("需要注意的是，因为容器是与宿主机共享网络，并且容器不存在自己的ip, 端口映射不生效, -p,--publish，-P，和--publish-all都将被忽略，并产生一个警告\nWARNING: Published ports are discarded when using host network mode")])]),e._v(" "),a("p",[e._v("使用方法:\n在创建容器时添加如下配置")]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("net host\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"overlay模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overlay模式"}},[e._v("#")]),e._v(" overlay模式")]),e._v(" "),a("p",[e._v("分布式网络模式。可参考："),a("a",{attrs:{href:"https://docs.docker.com/network/overlay/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/network/overlay/"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"macvlan模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macvlan模式"}},[e._v("#")]),e._v(" macvlan模式")]),e._v(" "),a("p",[e._v("直接连接宿主机的物理网络，为每个容器的虚拟网络接口分配MAC地址，相当于直接连接了宿主机的物理网络接口。")]),e._v(" "),a("p",[e._v("但是使用改模式需要注意以下几点：")]),e._v(" "),a("ul",[a("li",[e._v("会导致宿主机上有大量的MAC地址")]),e._v(" "),a("li",[e._v("需要宿主机支持一个物理接口分配多个MAC地址")]),e._v(" "),a("li",[e._v("如果应用程序可以使用bridge，overlay模式，那最好使用这两种方式建立网络")])]),e._v(" "),a("h4",{attrs:{id:"bridge模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bridge模式"}},[e._v("#")]),e._v(" bridge模式")]),e._v(" "),a("p",[e._v("类似VMware的桥接网络，此模式会为每一个容器分配Network Namespace、设置IP等，并将一个主机上的Docker容器连接到一个虚拟网桥上。\n"),a("br")]),e._v(" "),a("h2",{attrs:{id:"docker架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker架构"}},[e._v("#")]),e._v(" docker架构")]),e._v(" "),a("h3",{attrs:{id:"linux的docker架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux的docker架构"}},[e._v("#")]),e._v(" Linux的docker架构")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020101316032410.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyOTM3NTIy,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),e._v("\ndocker是在linux内核容器基础上实现的，linux安装docker后，会创建一个为docker0的虚拟网卡，linux宿机与docker容器之间的通信，通过docker0虚拟网卡进行\n"),a("br")]),e._v(" "),a("h3",{attrs:{id:"mac下的docker架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac下的docker架构"}},[e._v("#")]),e._v(" Mac下的docker架构")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20201013160416138.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyOTM3NTIy,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}}),e._v("\ndocker在OSX的实现方式，是首先创建一个linux的虚拟机，在将docker放入到虚拟机中实现，而对于linux虚拟机，与OSX之间的通信，目前版本采用"),a("code",[e._v("/var/run/docker.sock")]),e._v("这种socket文件来通信，在OSX宿机中自然ping不通docker容器。\n"),a("br")]),e._v(" "),a("h3",{attrs:{id:"mac系统对docker的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac系统对docker的限制"}},[e._v("#")]),e._v(" Mac系统对docker的限制")]),e._v(" "),a("p",[e._v("参考："),a("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/networking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/docker-for-mac/networking/"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[a("p",[e._v("因为MacOS无法访问Docker桥接网络，而恰恰Docker默认是使用bridge模式，所以导致Docker无法联网，并且无法与宿主机沟通。")])]),e._v(" "),a("li",[a("p",[e._v("Host主机网络驱动程序仅适用于Linux主机，并且不支持Docker for Mac，Docker for Windows或Docker EE for Windows Server。")])])]),e._v(" "),a("p",[e._v("==所以docker容器无法使用--net host共享宿主机端口==。\n"),a("br")]),e._v(" "),a("h2",{attrs:{id:"解决无法使用-net-host的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决无法使用-net-host的方案"}},[e._v("#")]),e._v(" 解决无法使用--net host的方案")]),e._v(" "),a("p",[e._v("docker容器使用"),a("code",[e._v("--net host")]),e._v("共享宿主机端口，无非是因为在未来使用容器的过程中，宿主机与容器通信的端口不能确定。既然"),a("code",[e._v("--net host")]),e._v("不能使用，不能共享宿主机端口，那么我们可以寻找一些替代方案。")]),e._v(" "),a("h3",{attrs:{id:"docker映射某个范围内的端口列表代替-net-host共享宿主机端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker映射某个范围内的端口列表代替-net-host共享宿主机端口"}},[e._v("#")]),e._v(" docker映射某个范围内的端口列表代替--net host共享宿主机端口")]),e._v(" "),a("p",[a("strong",[e._v("不管在==Dockerfile==、==命令行==或==docker-compose.yml==中，都可以使用类似于"),a("code",[e._v("8080-8090:8080-8090")]),e._v("的格式，来映射多个端口")])]),e._v(" "),a("h4",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[e._v("#")]),e._v(" docker-compose.yml")]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#create by winton wang")]),e._v("\nversion: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3.6'")]),e._v("\nservices:\n  web:\n    image: nginx:1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("18\n    ports:\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将会映射8080到8090这个范围内的端口")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" 8080-8090:8080-8090\n    volumes:\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("www:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("www\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h4",{attrs:{id:"命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[e._v("#")]),e._v(" 命令行")]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("docker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p 8080-8090:8080-8090 nginx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[e._v("#")]),e._v(" Dockerfile")]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("EXPOSE 8080-8090\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("注意：")]),e._v(" "),a("em",[a("strong",[e._v("使用这种形式去映射大范围的端口，会占用用户大量的内存，尽量不要这样子做")])])]),e._v(" "),a("h3",{attrs:{id:"修改nginx容器的启动方式-映射端口列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx容器的启动方式-映射端口列表"}},[e._v("#")]),e._v(" 修改nginx容器的启动方式，映射端口列表")]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[e._v("docker run "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("it "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),e._v("name nginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p 80:80 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p 7000-8000:7000-8000  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("Users/mac-server/Desktop/project:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("www/html "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("v "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("Users/mac-server/Desktop/nginx:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("nginx_conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("d nginx \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("使用不常用的7000-8000端口，用于nginx的反向代理未来的项目，当然端口范围可根据实际情况修改。")]),e._v(" "),a("li",[e._v("如果这样做了，7000-8000端口就会都被占用，所以慎用。")]),e._v(" "),a("li",[e._v("如果7000-8000有端口已经被占用，则容器启动失败。")])]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_35371031/article/details/104601403?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-5-104601403.nonecase&utm_term=docker%20host%E6%A8%A1%E5%BC%8F%20mac&spm=1000.2123.3001.4430",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac 下Docker无法访问外网与宿主机(解决办法和原因)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/devday/article/details/104200291",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac Docker Host模式不能用"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/Mr0o0rM/article/details/80683115?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAC DOCKER无法ping通容器解决方案"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_26683009/article/details/108263510?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduend~default-5-108263510.nonecase&utm_term=docker%E7%9A%84%E6%98%A0%E5%B0%84%E7%AB%AF%E5%8F%A3%E8%8C%83%E5%9B%B4&spm=1000.2123.3001.4430",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker 映射某个范围内的端口列表"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);