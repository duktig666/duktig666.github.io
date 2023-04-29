(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{564:function(a,t,s){"use strict";s.r(t);var r=s(3),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"问题描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[a._v("#")]),a._v(" 问题描述")]),a._v(" "),t("p",[a._v("使用git在.gitignore添加忽略文件不起作用，在此commit还是会提交，而且在IDEA中已经添加了的文件或者目录没有变灰，即没有忽略成功。")]),a._v(" "),t("h2",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),t("p",[a._v(".gitignore文件只对还没有加入版本管理的文件起作用，如果之前已经用git把这些文件纳入了版本库，就不起作用了。说明在git库中已存在了这个文件，之前push提交过该文件。即文件已经被track（追踪）。")]),a._v(" "),t("h2",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[a._v("#")]),a._v(" 解决办法")]),a._v(" "),t("h3",{attrs:{id:"方式一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[a._v("#")]),a._v(" 方式一")]),a._v(" "),t("p",[a._v("将需要忽略的文件先复制出来，然后删除项目目录下的这些需要忽略的文件。（如果是编译后的文件，直接删除就可以）。")]),a._v(" "),t("p",[a._v("在.gitignore文件中添加对应的需要忽略的文件或者目录。")]),a._v(" "),t("p",[a._v("提交所做的修改到本地版本库，然后推送到远程的版本库。")]),a._v(" "),t("p",[a._v("如果文件变为灰色，说明成功")]),a._v(" "),t("p",[t("em",[a._v("不过这样并不是很稳妥，而且文件多的话，比较麻烦。")])]),a._v(" "),t("h3",{attrs:{id:"方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[a._v("#")]),a._v(" 方式二")]),a._v(" "),t("p",[a._v("思路：删除本地缓存，重新提交。")]),a._v(" "),t("ol",[t("li",[a._v("使用命令工具Git Bash，进入需要修改的工作目录")]),a._v(" "),t("li",[a._v("重置所有缓存（注意后面有个.）")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("git rm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("cached "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("将本地代码重新添加（注意后面有个.）")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("git add "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("提交（让 .gitignore 文件夹生效，读取忽略文件）")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("git commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("m "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('".gitignore is now working"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("此时，发现刚才忽略不掉的文件，已经变灰，说明忽略成功。")]),a._v(" "),t("p",[t("strong",[a._v("注意：")]),a._v(" "),t("em",[a._v("注意步骤2也可不删除全部缓存，只删除指定的缓存，例如：")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("git rm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("cached "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("target"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);