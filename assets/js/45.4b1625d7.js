(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{434:function(t,n,s){"use strict";s.r(n);var e=s(11),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("队列也是一种线性表数据结构。后进者后出，先进者前出，这就是典型的“队列”。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/attachment/DataStructureArithmetic/Queue/1.jpg",alt:"什么是队列"}})]),t._v(" "),s("p",[t._v("队列基本的操作是两个：入队，放一个数据到队列尾部；出队，从队列头部取一个元素。")]),t._v(" "),s("p",[t._v("队列的应用也非常广泛，特别是一些具有某些额外特性的队列，比如循环队列、阻塞队列、并发队列。")]),t._v(" "),s("p",[t._v("实际上，栈既可以用数组来实现，也可以用链表来实现。用数组实现的队列，我们叫作顺序队列，用链表实现的队列，我们叫作链式队列。")]),t._v(" "),s("p",[t._v("下面是队列的代码学习:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public class MyQueue {\n\tprivate int[] arr;\n\tprivate int elements;\n\tprivate int front;\n\tprivate int end;\n\n\tpublic MyQueue(int capacity) {\n\t\tarr = new int[capacity];\n\t\tthis.elements = capacity;\n\t}\n\n\tprivate boolean insert(int value) {\n\t\tif (end == elements) {\n\t\t\tif (front == 0)\n\t\t\t\treturn false;\n\t\t\tfor (int i = front; i < end; i++) {\n\t\t\t\tarr[i - front] = arr[i];\n\t\t\t}\n\t\t\tend = end - front;\n\t\t\tfront = 0;\n\t\t}\n\t\tarr[end++] = value;\n\t\treturn true;\n\t}\n\n\tprivate int remove() {\n\t\tif (end == front)\n\t\t\treturn -1;\n\t\tint vlaue = arr[front++];\n\t\treturn vlaue;\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tMyQueue myQueue = new MyQueue(4);\n\t\tmyQueue.insert(10);\n\t\tmyQueue.insert(11);\n\t\tmyQueue.insert(12);\n\t\tmyQueue.insert(13);\n\n\t\tSystem.out.print(myQueue.remove());\n\t\tSystem.out.print(myQueue.remove());\n\t\tSystem.out.print(myQueue.remove());\n\t\tSystem.out.print(myQueue.remove());\n\t\tSystem.out.print(myQueue.insert(14));\n\t\tSystem.out.print(myQueue.insert(15));\n\t\tSystem.out.print(myQueue.remove());\n\t\tSystem.out.print(myQueue.remove());\n\t\tSystem.out.print(myQueue.remove());\n\t}\n}\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);