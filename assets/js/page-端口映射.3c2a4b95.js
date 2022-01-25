(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{492:function(s,t,a){s.exports=a.p+"assets/img/pict1.1c38a5cc.png"},493:function(s,t,a){s.exports=a.p+"assets/img/pict2.8f4ef880.png"},535:function(s,t,a){"use strict";a.r(t);var r=a(1),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"端口映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[s._v("#")]),s._v(" 端口映射")]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),r("p",[s._v("如果您希望让外网访问 Hydro，但是服务器没有外网ip，那么您可能需要这篇教程。"),r("br"),s._v("\n本文将引导您将内外的 Hydro 对外网开放。您可以选择以下方案中的一种。")])]),s._v(" "),r("h2",{attrs:{id:"ngrok"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ngrok"}},[s._v("#")]),s._v(" ngrok")]),s._v(" "),r("p",[s._v("ngrok 是一款操作简单的软件，可以把内网的 web 服务映射到外网。")]),s._v(" "),r("p",[s._v("大部分的 ngrok 服务是免费的。例如："),r("a",{attrs:{href:"https://www.ngrok.cc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ngrok.cc"),r("OutboundLink")],1)]),s._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),r("p",[s._v("ngrok 的缺点：")]),s._v(" "),r("ul",[r("li",[s._v("速度比较慢")]),s._v(" "),r("li",[s._v("数据并不保密，ngrok 服务提供者有能力监听 OJ 的通讯。")])])]),s._v(" "),r("p",[s._v("虽然有这几个缺点，ngrok 仍然不失为一个好的选择。具体的配置，请参见 "),r("a",{attrs:{href:"https://www.ngrok.cc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ngrok.cc"),r("OutboundLink")],1),s._v(" 网站。")]),s._v(" "),r("h2",{attrs:{id:"ssh-转发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssh-转发"}},[s._v("#")]),s._v(" ssh 转发")]),s._v(" "),r("p",[s._v("这个方案需要您有一台 VPS，且 VPS 需要拥有外网 IP。")]),s._v(" "),r("p",[s._v("首先，您需要在本地机器通过 "),r("code",[s._v("ssh-keygen")]),s._v(" 来生成一个您的密钥：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("ssh-keygen -t rsa\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("一直按 "),r("code",[s._v("enter")]),s._v(" 键，然后您将会在 "),r("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" 取得您的公钥。"),r("br"),s._v(" "),r("img",{attrs:{src:a(492),alt:"生成公钥"}})]),s._v(" "),r("p",[s._v("然后登录您的VPS，把上面的公钥扔进"),r("code",[s._v("~/.ssh/authorized_keys")]),s._v("，如下图所示："),r("br"),s._v(" "),r("img",{attrs:{src:a(493),alt:"VPS"}})]),s._v(" "),r("p",[s._v("现在，您在本地机器上使用如下命令，应该可以免密码登录VPS：")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VPS_user"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VPS_ip"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("如果不能登录，您可能对上面过程的理解存在偏差。"),r("br"),s._v("\n接下来，在本地机器上安装 autossh，它是稳定的 ssh 连接工具：")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autossh\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("最后运行下面的指令，将本地的 80 端口映射到 VPS 的 80 端口：")]),s._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("autossh -M "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5698")]),s._v(" -NfR "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VPS的ip"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":80:"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地机器的ip"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":80 "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VPS用户名"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VPS的ip"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如：")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# autossh -M 5698 -NfR 23.23.23.23:80:127.0.0.1:80 blue@23.23.23.23")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5698 是监听端口，用于测试 ssh 连接是否稳定。如果您运行了多个 autossh，请保证它们的监听端口不同。")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br")])]),r("p",[s._v("访问 VPS 的 IP，您应该可以看到 Hydro 了。"),r("br"),s._v("\n如果您有域名，请添加一条 A 记录，指向 VPS 的 IP，然后就能用域名访问了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);