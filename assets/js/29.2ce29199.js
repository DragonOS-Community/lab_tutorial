(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{308:function(t,a,_){"use strict";_.r(a);var v=_(14),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"实验四-页面置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验四-页面置换算法"}},[t._v("#")]),t._v(" 实验四 - 页面置换算法")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("（1）为什么要引入页面置换？")]),t._v(" "),a("p",[t._v("（2）页面置换的性能指标是什么")]),t._v(" "),a("p",[t._v("（3）页面置换算法的实现")]),t._v(" "),a("h2",{attrs:{id:"一、实验目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、实验目的"}},[t._v("#")]),t._v(" 一、实验目的")]),t._v(" "),a("p",[t._v("​\t请求页式管理是现代通用操作系统中最常用的一种虚拟存储管理技术，本实验的目的是通过模拟请求页式存储管理中的页面替换算法，了解虚拟存储技术的特点，认识操作系统对内存的管理。")]),t._v(" "),a("h2",{attrs:{id:"二、实验原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、实验原理"}},[t._v("#")]),t._v(" 二、实验原理")]),t._v(" "),a("p",[t._v("（1）回顾请求页式管理：")]),t._v(" "),a("p",[t._v("​\t进程运行时，若其访问的页面不在内存中，而需将其调入，但是内存已无空闲内存时，就需要从内存中调出一页程序或数据，送入磁盘的对换区(swap分区)。"),a("strong",[t._v("选择调出页面的算法就叫页面置换算法。")])]),t._v(" "),a("p",[t._v("（2）页面算法好坏的评估指标：")]),t._v(" "),a("p",[t._v("​\t好的页面置换算法应有较低的页面更换频率，即应将以后不会再访问或以后较长时间不会访问的页面先调出。总的来说就是：具有较小的缺页中断次数。")]),t._v(" "),a("ul",[a("li",[t._v("缺页中断：CPU在检索页表的时候发现进程要访问的页面不在物理内存中，就会发出一个Page Fault。")])]),t._v(" "),a("h2",{attrs:{id:"三、实验步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、实验步骤"}},[t._v("#")]),t._v(" 三、实验步骤")]),t._v(" "),a("h3",{attrs:{id:"_1-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据类型"}},[t._v("#")]),t._v(" 1. 数据类型")]),t._v(" "),a("p",[t._v("（1）你需要一个class类或者struct来表示已经存在物理内存中的页框Page的信息，至少需要包含：")]),t._v(" "),a("ul",[a("li",[t._v("page_number表示页号")]),t._v(" "),a("li",[t._v("read、write来表示页面是否被读写，以便在页面替换的时候判断是否需要把页面写回磁盘。")])]),t._v(" "),a("p",[t._v("​\t此外，根据你实验的算法的不同，你可以为该Page类添加更多的成员变量，比如：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("变量名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("内涵")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("time_arrive")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面调入物理内存的时间点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("time_access")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("最近一次被访问的时间点")])])])]),t._v(" "),a("p",[t._v("（2）你需要设置一个变量MemPageNumber来表示内存中实页的数量。")]),t._v(" "),a("h3",{attrs:{id:"_2-算法模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-算法模型"}},[t._v("#")]),t._v(" 2. 算法模型")]),t._v(" "),a("p",[t._v("​\t选取以下算法为主题，实现一个页面调度算法，并输出"),a("strong",[t._v("页面命中率")]),t._v("或者"),a("strong",[t._v("缺页次数")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("FIFO")]),t._v(" "),a("li",[t._v("LRU")]),t._v(" "),a("li",[t._v("CLOCK")])]),t._v(" "),a("h2",{attrs:{id:"课外资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课外资料"}},[t._v("#")]),t._v(" 课外资料")])])}),[],!1,null,null,null);a.default=e.exports}}]);