(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{558:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vjudge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vjudge"}},[s._v("#")]),s._v(" Vjudge")]),s._v(" "),a("h2",{attrs:{id:"codeforces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codeforces"}},[s._v("#")]),s._v(" Codeforces")]),s._v(" "),a("p",[s._v("由于 vjudge 更新了反爬虫机制，Codeforces RemoteJudge 需要一些特殊手段才能正常工作。"),a("br"),s._v("\n详情请 "),a("a",{attrs:{href:"https://github.com/hydro-dev/Hydro/blob/master/packages/vjudge/src/providers/codeforces.ts",target:"_blank",rel:"noopener noreferrer"}},[s._v("阅读源码"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("安装插件后创建名为 codeforces 的域，进入数据库 "),a("code",[s._v("db.domain.updateOne({_id:'codeforces'},{$set:{mount:'codeforces'}});")])]),s._v(" "),a("p",[s._v("在 codeforces 的域设置中，将 "),a("code",[s._v("allowedLangs")]),s._v(" 如下配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("codeforces,codeforces.43,codeforces.52,codeforces.50,codeforces.54,codeforces.59,codeforces.61,codeforces.65,codeforces.9,codeforces.28,codeforces.32,codeforces.12,codeforces.60,codeforces.36,codeforces.48,codeforces.19,codeforces.3,codeforces.4,codeforces.51,codeforces.13,codeforces.6,codeforces.7,codeforces.31,codeforces.40,codeforces.41,codeforces.67,codeforces.49,codeforces.20,codeforces.34,codeforces.55\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在 vjudge 表中插入如下条目：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'codeforces'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" handle"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<codeforces login handle>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<codeforces login password>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将如下配置添加至 langs 设置末尾：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Codeforces\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("domain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" codeforces "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Allow domain 'codeforces' to use these languages")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.43")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GNU GCC C11 5.1.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.52")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Clang++17 Diagnostics\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GNU G++14 6.4.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.54")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GNU G++17 7.3.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.59")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Microsoft Visual C++ 2017\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.61")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("c\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GNU G++17 9.2.0 (64 bit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msys 2)\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cs\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" csharp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 8, .NET Core 3.1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cpp astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cs\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" csharp\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Mono 6.8")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" d\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" plain\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" D DMD32 v2.091.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Go 1.15.6\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" haskell\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Haskell GHC 8.10.1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" java astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("java\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" java\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Java 11.0.6\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.36")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" java astyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("java\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" java\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Java 1.8.0_241\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.48")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kotlin\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Kotlin 1.4.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ocaml\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("monaco")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" plain\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" OCaml 4.02.1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pascal\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Delphi 7\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pascal\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Free Pascal 3.0.2\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.51")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pascal\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PascalABC.NET 3.4.2\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" perl\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Perl 5.20.1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" php\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PHP 7.2.13\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Python 2.7.18\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Python 3.9.1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PyPy 2.7 (7.3.0)\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PyPy 3.7 (7.3.0)\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.67")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ruby\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ruby 3.0.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.49")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" rust\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Rust 1.49.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" scala\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Scala 2.12.8\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.34")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" javascript\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JavaScript V8 4.8.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codeforces.55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("highlight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" javascript\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Node.js 12.6.3\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" //\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br"),a("span",{staticClass:"line-number"},[s._v("130")]),a("br"),a("span",{staticClass:"line-number"},[s._v("131")]),a("br"),a("span",{staticClass:"line-number"},[s._v("132")]),a("br"),a("span",{staticClass:"line-number"},[s._v("133")]),a("br")])]),a("p",[s._v("之后再重启 Hydro 即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);