(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{426:function(n,t,s){"use strict";s.r(t);var a=s(11),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"一、什么是二分查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是二分查找"}},[n._v("#")]),n._v(" 一、什么是二分查找？")]),n._v(" "),s("p",[n._v("二分查找针对的是一个有序的数据集合，每次通过跟区间中间的元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间缩小为0。")]),n._v(" "),s("h2",{attrs:{id:"二、时间复杂度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、时间复杂度分析"}},[n._v("#")]),n._v(" 二、时间复杂度分析？")]),n._v(" "),s("ol",[s("li",[n._v("时间复杂度\n假设数据大小是n，每次查找后数据都会缩小为原来的一半，最坏的情况下，直到查找区间被缩小为空，才停止。所以，每次查找的数据大小是：n，n/2，n/4，…，n/(2^k)，…，这是一个等比数列。当n/(2^k)=1时，k的值就是总共缩小的次数，也是查找的总次数。而每次缩小操作只涉及两个数据的大小比较，所以，经过k次区间缩小操作，时间复杂度就是O(k)。通过n/(2^k)=1，可求得k=log2n，所以时间复杂度是O(logn)。")]),n._v(" "),s("li",[n._v("认识O(logn)\n"),s("ul",[s("li",[n._v("①这是一种极其高效的时间复杂度，有时甚至比O(1)的算法还要高效。为什么？")]),n._v(" "),s("li",[n._v("②因为logn是一个非常“恐怖“的数量级，即便n非常大，对应的logn也很小。比如n等于2的32次方，也就是42亿，而logn才32。")]),n._v(" "),s("li",[n._v("③由此可见，O(logn)有时就是比O(1000)，O(10000)快很多。")])])])]),n._v(" "),s("p",[n._v("代码练习")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class BanarySearchUtils {\n\n\tpublic static void main(String[] args) {\n\t\tint[] a = { 10, 20, 23, 18, 19, 23, 25 };\n\t\tArrays.sort(a);\n\t\tSystem.out.print(banarySearch(a, 20));\n\n\t}\n\n\tprivate static int banarySearch(int arr[], int value) {\n\t\tint low = 0;\n\t\tint high = arr.length - 1;\n\t\twhile (low <= high) {\n\t\t\tint mid = (high + low) / 2;\n\t\t\tif (arr[mid] < value) {\n\t\t\t\tlow = mid + 1;\n\t\t\t} else if (arr[mid] > value) {\n\t\t\t\thigh = mid - 1;\n\t\t\t} else {\n\t\t\t\treturn mid;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t}\n\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);