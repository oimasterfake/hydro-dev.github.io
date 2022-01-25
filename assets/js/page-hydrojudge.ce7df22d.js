(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{554:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"hydrojudge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hydrojudge"}},[s._v("#")]),s._v(" hydrojudge")]),s._v(" "),t("h2",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),t("p",[s._v("在配置评测机之前，请确认您的站点已经可以访问并正常登录/注册。")]),s._v(" "),t("p",[s._v("您应该预先下载您所要支持的语言的编译器，若您在配置完评测机后 升级/重新安装 了编译器，您需要重新启动沙箱。")]),s._v(" "),t("p",[s._v("前往 "),t("a",{attrs:{href:"https://github.com/criyle/go-judge/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("criyle/go-judge"),t("OutboundLink")],1),s._v(" 下载 executorserver。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("系统版本")]),s._v(" "),t("th",[s._v("文件名")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Windows 7+")]),s._v(" "),t("td",[s._v("executorserver.exe")])]),s._v(" "),t("tr",[t("td",[s._v("Linux 4.4+")]),s._v(" "),t("td",[s._v("executorserver-amd64")])]),s._v(" "),t("tr",[t("td",[s._v("MacOS ?+")]),s._v(" "),t("td",[s._v("executorserver-macos")])])])]),s._v(" "),t("p",[s._v("Executorserver 需要在后台"),t("strong",[s._v("以 root 权限")]),s._v("运行并监听 "),t("code",[s._v("127.0.0.1:5050")]),s._v(" 。\n可使用 pm2 进行管理。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("如果您是 vj4 用户，请使用“作为独立进程”配置（设置处需设成 "),t("code",[s._v("type: vj4")]),s._v("）。")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("h3",{attrs:{id:"作为附加组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为附加组件"}},[s._v("#")]),s._v(" 作为附加组件")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("由于用附加组件安装的评测机与 Hydro 必须在同一台服务器上，每一个 Hydro 实例最多只能有一台评测机由附加组件安装。")])]),s._v(" "),t("p",[s._v("在安装 Hydro 的机器上运行下面的指令安装 "),t("code",[s._v("@hydrooj/hydrojudge")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @hydrooj/hydrojudge\nhydrooj addon "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @hydrooj/hydrojudge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("重启 Hydro 后 hydrojudge 即可正常运行。")]),s._v(" "),t("h3",{attrs:{id:"作为独立进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为独立进程"}},[s._v("#")]),s._v(" 作为独立进程")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("该方法可以帮助您在任意服务器上部署评测机。")])]),s._v(" "),t("p",[s._v("首先需要创建一个有 PRIV_JUDGE 权限的账户，具体方法参照 "),t("RouterLink",{attrs:{to:"/docs/cli/#创建评测账号"}},[s._v("此处")]),s._v("。（在部署 Hydro 的服务器上运行）"),t("br"),s._v("\n（vj4 用户需参照 "),t("a",{attrs:{href:"https://github.com/vijos/vj4#judging",target:"_blank",rel:"noopener noreferrer"}},[s._v("vj4 的方法"),t("OutboundLink")],1),s._v(" 创建账户）")],1),s._v(" "),t("p",[s._v("然后在运行评测机的服务器上安装 hydrojudge 插件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @hydrooj/hydrojudge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建目录 "),t("code",[s._v("~/.config/hydro")]),s._v("，在该目录下创建文件 "),t("code",[s._v("judge.yaml")]),s._v("，配置文件格式如下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("localhost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hydro "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vj4 用户请在此处填写 vj4")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server_url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8888/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Hydro 运行的网址")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uname")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" judge "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 评测账号用户名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" abc123 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 评测账号密码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("detail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认为 true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("设置完之后，使用下面的指令即可开始运行（可以使用 pm2 管理）：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("hydrojudge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),t("p",[s._v("HydroJudge 会发布不定期更新。您可以使用 "),t("code",[s._v("yarn global upgrade-interactive --latest")]),s._v(" 来检测并进行更新。")]),s._v(" "),t("h2",{attrs:{id:"关闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭"}},[s._v("#")]),s._v(" 关闭")]),s._v(" "),t("h3",{attrs:{id:"作为附加组件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为附加组件-2"}},[s._v("#")]),s._v(" 作为附加组件")]),s._v(" "),t("p",[s._v("在 系统设置>hydrojudge 中有一栏 Disable builtin judge，将它勾上，然后重启 Hydro 即可。")]),s._v(" "),t("h3",{attrs:{id:"作为独立进程-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为独立进程-2"}},[s._v("#")]),s._v(" 作为独立进程")]),s._v(" "),t("p",[s._v("根据开启的方法关闭即可。")]),s._v(" "),t("h2",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),t("p",[s._v("关闭后运行下面指令即可。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global remove @hydrooj/hydrojudge\nhydrooj addon remove @hydrooj/hydrojudge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"评测设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评测设置"}},[s._v("#")]),s._v(" 评测设置")]),s._v(" "),t("h3",{attrs:{id:"作为附加组件-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为附加组件-3"}},[s._v("#")]),s._v(" 作为附加组件")]),s._v(" "),t("p",[s._v("在 系统设置>hydrojudge 修改对应的参数，然后重启 Hydro 和 hydrojudge 即可。")]),s._v(" "),t("h3",{attrs:{id:"作为独立进程-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作为独立进程-3"}},[s._v("#")]),s._v(" 作为独立进程")]),s._v(" "),t("p",[s._v("如果有需要修改单题测试点数量上限等设置，可以在 "),t("code",[s._v("~/.config/hydro/judge.yaml")]),s._v(" 的末尾添加下列内容：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("testcases_max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单题最多测试点数量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("total_time_limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单题最大总测试时长")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("parallelism")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单评测机评测进程数量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更多可选配置均可添加在此处，格式与前面的三排类似")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在 "),t("a",{attrs:{href:"https://github.com/hydro-dev/Hydro/blob/9c0afa38e3e6fa886ab9e9237847893fa6714392/packages/hydrojudge/src/config.ts#L12",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v(" 的设置均可添加到此处。")]),s._v(" "),t("h2",{attrs:{id:"修改编译选项-添加新语言支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改编译选项-添加新语言支持"}},[s._v("#")]),s._v(" 修改编译选项/添加新语言支持")]),s._v(" "),t("p",[s._v("对于已安装内置评测机的用户（无论内置评测机是否启动），在 控制面板>系统设置 中修改 judge.langs 配置项即可；对于没有安装内置评测机的用户，需要在 "),t("code",[s._v("~/.config/hydro/langs.yaml")]),s._v(" 中配置。")]),s._v(" "),t("p",[s._v("按照 "),t("a",{attrs:{href:"https://github.com/hydro-dev/Hydro/blob/71bb2f0b517be8f6966f97f835f2521f179b3d84/packages/hydrooj/setting.yaml#L12",target:"_blank",rel:"noopener noreferrer"}},[s._v("此处"),t("OutboundLink")],1),s._v(" 格式即可。")]),s._v(" "),t("p",[s._v("如果您添加了新的语言，您还需要前往 控制面板>系统设置 中修改 Language Highlight ID 与 Monaco language modes。"),t("br"),s._v("\n分别表示选择对应的语言后的高亮设置（基于 PrismJS）和 Monaco 编辑器语法规则设置。")]),s._v(" "),t("p",[s._v("修改完后重启 Hydro 和 hydrojudge 即可。")]),s._v(" "),t("h2",{attrs:{id:"测试数据格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试数据格式"}},[s._v("#")]),s._v(" 测试数据格式")]),s._v(" "),t("p",[s._v("参照 "),t("RouterLink",{attrs:{to:"/docs/user/problem/#测试数据格式"}},[s._v("测试数据格式")]),s._v(" 配置。")],1),s._v(" "),t("h2",{attrs:{id:"调整沙箱空间大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调整沙箱空间大小"}},[s._v("#")]),s._v(" 调整沙箱空间大小")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("如果不调整沙箱的空间大小，当您的评测使用文件 IO 且输入输出文件较大时可能会引发错误。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("可以在服务器上运行下面的代码找到 hydro-sandbox 的运行目录：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pm2 info hydro-sandbox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec cwd"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("p",[s._v("将 "),t("a",{attrs:{href:"https://github.com/criyle/go-judge/blob/master/mount.yaml",target:"_blank",rel:"noopener noreferrer"}},[s._v("mount.yaml"),t("OutboundLink")],1),s._v(" 下载并放置在 sandbox 的运行目录下。然后修改第 50 行和第 54 行的 "),t("code",[s._v("size")]),s._v(" 和 "),t("code",[s._v("nr_inodes")]),s._v(" 的大小至您想要的大小，保存后重启 sandbox 即可完成更改。")]),s._v(" "),t("h2",{attrs:{id:"c-c-彩色编译错误信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-c-彩色编译错误信息"}},[s._v("#")]),s._v(" C/C++ 彩色编译错误信息")]),s._v(" "),t("ol",[t("li",[s._v("确认您安装了支持彩色输出的编译器；")]),s._v(" "),t("li",[s._v("在系统设置中，将 C/C++ 编译命令后加上 "),t("code",[s._v("-fdiagnostics-color=always")])])]),s._v(" "),t("p",[s._v("例：")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("c")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("compile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /usr/bin/gcc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("O2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Wall "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("std=c99 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" foo.c "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("lm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("fdiagnostics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("color=always\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"开大程序运行栈空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开大程序运行栈空间"}},[s._v("#")]),s._v(" 开大程序运行栈空间")]),s._v(" "),t("p",[s._v("在很多时候系统默认为程序提供的栈空间并不能满足我们的需求，此时我们需要手动为用户程序提供更大的栈空间。")]),s._v(" "),t("p",[s._v("修改 pm2 中 hydro-sandbox 的启动参数为 "),t("code",[s._v("ulimit -s unlimited && /path-to/sandbox")]),s._v(" 即可：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),t("p",[s._v("您需要将 "),t("code",[s._v("/path-to/sandbox")]),s._v(" 更换为您机器上 sandbox 的绝对路径。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pm2 del hydro-sandbox\npm2 start "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ulimit -s unlimited && /path-to/sandbox"')]),s._v(" --name hydro-sandbox\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"提高测评精度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提高测评精度"}},[s._v("#")]),s._v(" 提高测评精度")]),s._v(" "),t("p",[s._v("禁用 CPU 频率缩放与 Intel 睿频加速技术，防止 CPU 频率波动。")]),s._v(" "),t("p",[s._v("禁用内存地址空间随机化，以使得存在内存寻址错误的代码能够得到更多可重复的结果，可以通过在 "),t("code",[s._v("/etc/sysctl.conf")]),s._v(" 中添加下面这行并运行 "),t("code",[s._v("sudo sysctl -p")]),s._v(" 实现：")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kernel.randomize_va_space = 0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);