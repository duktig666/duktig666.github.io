(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{557:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本文源码参看："),t("a",{attrs:{href:"https://github.com/duktig666/learn-example/tree/5586febea31c2fb368e19fbdba11ed08afd463e0/Redis/src/main/java/cn/duktig/pubsub",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/duktig666/learn-example/tree/5586febea31c2fb368e19fbdba11ed08afd463e0/Redis/src/main/java/cn/duktig/pubsub"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"redis发布订阅概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis发布订阅概述"}},[s._v("#")]),s._v(" Redis发布订阅概述")]),s._v(" "),t("p",[s._v("Redis 发布订阅 (publish/subscribe) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。")]),s._v(" "),t("p",[s._v("Redis 客户端可以订阅任意数量的频道。")]),s._v(" "),t("p",[s._v("介绍：")]),s._v(" "),t("ul",[t("li",[s._v("PUBLISH 命令向通道发送信息，此客户端称为publisher 发布者；")]),s._v(" "),t("li",[s._v("SUBSCRIBE 向命令通道订阅信息，此客户端称为subscriber 订阅者；")]),s._v(" "),t("li",[s._v("redis 中 发布订阅模块的名字叫着 PubSub，也就是 PublisherSubscriber；")]),s._v(" "),t("li",[s._v("一个发布者向一个通道发送消息，订阅者可以向多个通道订阅消息；当发布者向通道发布消息后，如果有订阅者订阅该通道，订阅者就会收到消息。")])]),s._v(" "),t("p",[t("strong",[s._v("发布订阅相关的命令")]),s._v("：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("命令")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"https://www.redis.net.cn/order/3637.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis Unsubscribe 命令"),t("OutboundLink")],1)]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("指退订给定的频道。")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"https://www.redis.net.cn/order/3636.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis Subscribe 命令"),t("OutboundLink")],1)]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("订阅给定的一个或多个频道的信息。")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"https://www.redis.net.cn/order/3633.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis Pubsub 命令"),t("OutboundLink")],1)]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("查看订阅与发布系统状态。")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"https://www.redis.net.cn/order/3635.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis Punsubscribe 命令"),t("OutboundLink")],1)]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("退订所有给定模式的频道。")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"https://www.redis.net.cn/order/3634.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis Publish 命令"),t("OutboundLink")],1)]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("将信息发送到指定的频道。")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("a",{attrs:{href:"https://www.redis.net.cn/order/3632.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis Psubscribe 命令"),t("OutboundLink")],1)]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("订阅一个或多个符合给定模式的频道。")])])])]),s._v(" "),t("h2",{attrs:{id:"发布订阅演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅演示"}},[s._v("#")]),s._v(" 发布订阅演示")]),s._v(" "),t("p",[s._v("subscribe/publish")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202111102124676.png",alt:"订阅"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202111102124186.png",alt:"发布"}})]),s._v(" "),t("p",[s._v("psubscribe/publish")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202111102124604.png",alt:"按模式订阅"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202111102124218.png",alt:"按模式发布"}})]),s._v(" "),t("h2",{attrs:{id:"redis发布订阅模式-与-消息中间件-进行对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis发布订阅模式-与-消息中间件-进行对比"}},[s._v("#")]),s._v(" Redis发布订阅模式 与 消息中间件 进行对比")]),s._v(" "),t("h3",{attrs:{id:"可靠性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可靠性"}},[s._v("#")]),s._v(" 可靠性")]),s._v(" "),t("p",[s._v("Redis虽然可以实现发布订阅，其功能与常见的消息中间件类似（例如RabbitMQ），但是 "),t("strong",[s._v("Redis的发布订阅模式不支持持久化")]),s._v("，而且发布者发布一条消息，没有对应的消费者时，消息会丢失。")]),s._v(" "),t("p",[s._v("而RabbitMQ具有消息消费的确认机制，发布者发布一条消息，一直在队列中，直到消息被消费。")]),s._v(" "),t("h3",{attrs:{id:"实时性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时性"}},[s._v("#")]),s._v(" 实时性")]),s._v(" "),t("p",[s._v("Redis作为高效的缓存服务器，基于内存，发布的消息不需要持久化，具备更高的实时性。")]),s._v(" "),t("h3",{attrs:{id:"消费者的负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消费者的负载均衡"}},[s._v("#")]),s._v(" 消费者的负载均衡")]),s._v(" "),t("p",[s._v("rabbitmq队列可以被多个消费者同时监控消费，但是每一条消息只能被消费一次，由于rabbitmq的消费确认机制，因此它能够根据消费者的消费能力而调整它的负载；")]),s._v(" "),t("p",[t("strong",[s._v("redis发布订阅模式")]),s._v("，一个队列可以被多个消费者同时订阅，当有消息到达时，会将该消息依次发送给每个订阅者；")]),s._v(" "),t("h3",{attrs:{id:"持久性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久性"}},[s._v("#")]),s._v(" 持久性")]),s._v(" "),t("p",[t("strong",[s._v("redis")]),s._v("：redis的持久化是针对于整个redis缓存的内容，它有RDB和AOF两种持久化方式（redis持久化方式，后续更新），可以将整个redis实例持久化到磁盘，以此来做数据备份，防止异常情况下导致数据丢失。")]),s._v(" "),t("p",[t("strong",[s._v("rabbitmq")]),s._v("：队列，消息都可以选择性持久化，持久化粒度更小，更灵活；")]),s._v(" "),t("h3",{attrs:{id:"队列监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列监控"}},[s._v("#")]),s._v(" 队列监控")]),s._v(" "),t("p",[t("strong",[s._v("rabbitmq实现了后台监控平台")]),s._v("，可以在该平台上看到所有创建的队列的详细情况，良好的后台管理平台可以方面我们更好的使用；"),t("strong",[s._v("redis没有所谓的监控平台")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[t("strong",[s._v("redis")]),s._v("： 轻量级，低延迟，高并发，低可靠性；")]),s._v(" "),t("p",[t("strong",[s._v("rabbitmq")]),s._v("：重量级，高可靠，异步，不保证实时；")]),s._v(" "),t("p",[s._v("rabbitmq是一个专门的AMQP协议队列，他的优势就在于提供可靠的队列服务，并且可做到异步，而redis主要是用于缓存的，redis的发布订阅模块，可用于实现及时性，且可靠性低的功能。")]),s._v(" "),t("h2",{attrs:{id:"springboot整合redis实现发布订阅模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot整合redis实现发布订阅模式"}},[s._v("#")]),s._v(" SpringBoot整合Redis实现发布订阅模式")]),s._v(" "),t("p",[t("em",[s._v("SpringBoot整合Redis的默认配置略，详情参看本文相关源码。")])]),s._v(" "),t("p",[s._v("1、定义订阅者接受消息的接口")]),s._v(" "),t("p",[s._v("目的：使接受方法通用，方便后边配置适配器")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMsg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Redis订阅者接受消息的接口\n     *\n     * @param message 订阅的消息\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("receiveMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("2、定义两个订阅者")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisChannelSub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMsg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("receiveMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意通道调用的方法名要和 RedisPubSubConfig 的listenerAdapter的 MessageListenerAdapter 参数2相同")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这是RedisChannelSub"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-----"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisPmpSub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMsg")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 接收消息的方法\n     *\n     * @param message 订阅消息\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("receiveMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意通道调用的方法名要和RedisConfig2的listenerAdapter的MessageListenerAdapter参数2相同")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这是RedisPmpSub---"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("3、定义订阅相关配置")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisPubSubConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * Redis消息监听器容器\n     *\n     * @param connectionFactory /\n     * @return /\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMessageListenerContainer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("container")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisConnectionFactory")]),s._v(" connectionFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMessageListenerContainer")]),s._v(" container "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMessageListenerContainer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setConnectionFactory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connectionFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//订阅了一个叫pmp和channel 的通道，多通道")]),s._v("\n        container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addMessageListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listenerAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisPmpSub")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PatternTopic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pmp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addMessageListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listenerAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisChannelSub")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PatternTopic")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"channel"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个container 可以添加多个 messageListener")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 配置消息接收处理类\n     *\n     * @param redisMsg 自定义消息接收类\n     * @return Redis的监听适配器\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Scope")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prototype"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageListenerAdapter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listenerAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisMsg")]),s._v(" redisMsg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这个地方 是给messageListenerAdapter 传入一个消息接受的处理器，利用反射的方法调用“receiveMessage”")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//也有好几个重载方法，这边默认调用处理器的方法 叫handleMessage 可以自己到源码里面看")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意2个通道调用的方法都要为receiveMessage")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MessageListenerAdapter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redisMsg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"receiveMessage"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("4、定义发布者")]),s._v(" "),t("p",[s._v("这里使用定时发布（当然也可以根据业务情况触发消息的发布，比如使用接口触发）")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableScheduling")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestScheduleRedisPublishController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringRedisTemplate")]),s._v(" stringRedisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 向redis消息队列index通道发布消息\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Scheduled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fixedRate "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        stringRedisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertAndSend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pmp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("random")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        stringRedisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("convertAndSend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"channel"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("random")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("5、启动程序后的结果")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202112141953282.png",alt:"结果"}})]),s._v(" "),t("p",[s._v("可以看到两个订阅者，都可以正常的接收消息。")]),s._v(" "),t("h2",{attrs:{id:"参看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参看"}},[s._v("#")]),s._v(" 参看")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/llll234/article/details/80966952",target:"_blank",rel:"noopener noreferrer"}},[s._v("springboot入门--springboot集成redis实现消息发布订阅模式-双通道"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/184948451",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis发布订阅模式"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_34061042/article/details/93027056",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis发布订阅模式用做消息队列和rabbitmq的区别"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);