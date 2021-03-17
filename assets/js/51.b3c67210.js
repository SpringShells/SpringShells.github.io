(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{436:function(n,t,s){"use strict";s.r(t);var a=s(11),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"一、分治思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、分治思想"}},[n._v("#")]),n._v(" 一、分治思想")]),n._v(" "),s("ol",[s("li",[n._v("分治思想：分治，顾明思意，就是分而治之，将一个大问题分解成小的子问题来解决，小的子问题解决了，大问题也就解决了。")]),n._v(" "),s("li",[n._v("分治与递归的区别：分治算法一般都用递归来实现的。分治是一种解决问题的处理思想，递归是一种编程技巧。")])]),n._v(" "),s("h3",{attrs:{id:"二、归并排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、归并排序"}},[n._v("#")]),n._v(" 二、归并排序")]),n._v(" "),s("ol",[s("li",[n._v("算法原理\n先把数组从中间分成前后两部分，然后对前后两部分分别进行排序，再将排序好的两部分合并到一起，这样整个数组就有序了。这就是归并排序的核心思想。如何用递归实现归并排序呢？写递归代码的技巧就是分写得出递推公式，然后找到终止条件，最后将递推公式翻译成递归代码。递推公式怎么写？如下\n递推公式：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("merge_sort(p…r) = merge(merge_sort(p…q), merge_sort(q+1…r))\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[n._v("终止条件：p >= r 不用再继续分解\n2. 性能分析")]),n._v(" "),s("ol",[s("li",[n._v("算法稳定性：\n归并排序稳不稳定关键要看merge()函数，也就是两个子数组合并成一个有序数组的那部分代码。在合并的过程中，如果 A[p…q] 和 A[q+1…r] 之间有值相同的元素，那我们就可以像伪代码中那样，先把 A[p…q] 中的元素放入tmp数组，这样 就保证了值相同的元素，在合并前后的先后顺序不变。所以，归并排序是一种稳定排序算法。")]),n._v(" "),s("li",[n._v("时间复杂度：分析归并排序的时间复杂度就是分析递归代码的时间复杂度\n如何分析递归代码的时间复杂度？\n递归的适用场景是一个问题a可以分解为多个子问题b、c，那求解问题a就可以分解为求解问题b、c。问题b、c解决之后，我们再把b、c的结果合并成a的结果。若定义求解问题a的时间是T(a)，则求解问题b、c的时间分别是T(b)和T(c)，那就可以得到这样的递推公式：T(a) = T(b) + T(c) + K，其中K等于将两个子问题b、c的结果合并成问题a的结果所消耗的时间。这里有一个重要的结论：不仅递归求解的问题可以写成递推公式，递归代码的时间复杂度也可以写成递推公式。套用这个公式，那么归并排序的时间复杂度就可以表示为：")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("T(1) = C； n=1 时，只需要常量级的执行时间，所以表示为 C。\nT(n) = 2*T(n/2) + n； n>1，其中n就是merge()函数合并两个子数组的的时间复杂度O(n)。\nT(n) = 2*T(n/2) + n\n     = 2*(2*T(n/4) + n/2) + n = 4*T(n/4) + 2*n\n     = 4*(2*T(n/8) + n/4) + 2*n = 8*T(n/8) + 3*n\n     = 8*(2*T(n/16) + n/8) + 3*n = 16*T(n/16) + 4*n\n     ......\n     = 2^k * T(n/2^k) + k * n\n     ......\n当T(n/2^k)=T(1) 时，也就是 n/2^k=1，我们得到k=log2n。\n将k带入上面的公式就得到T(n)=Cn+nlog2n。如用大O表示法，T(n)就等于O(nlogn)。\n所以，归并排序的是复杂度时间复杂度就是O(nlogn)。\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[n._v("空间复杂度：归并排序算法不是原地排序算法，空间复杂度是O(n)\n为什么？因为归并排序的合并函数，在合并两个数组为一个有序数组时，需要借助额外的存储空间。为什么空间复杂度是O(n)而不是O(nlogn)呢？如果我们按照分析递归的时间复杂度的方法，通过递推公式来求解，那整个归并过程需要的空间复杂度就是O(nlogn)，但这种分析思路是有问题的！因为，在实际上，递归代码的空间复杂度并不是像时间复杂度那样累加，而是这样的过程，即在每次合并过程中都需要申请额外的内存空间，但是合并完成后，临时开辟的内存空间就被释放掉了，在任意时刻，CPU只会有一个函数在执行，也就只会有一个临时的内存空间在使用。临时空间再大也不会超过n个数据的大小，所以空间复杂度是O(n)。")])]),n._v(" "),s("p",[n._v("代码练习")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("public class MergeSortUtils {\n\n\tpublic static void main(String[] args) {\n\t\tint[] a = { 10, 20, 23, 18, 19, 23, 25 };\n\t\tMergeSortUtils.mergeSort(a, 0, 6);\n\t\tSystem.out.print(Arrays.toString(a));\n\t}\n\n\tpublic static void mergeSort(int arr[], int left, int right) {\n\t\tif (left >= right) {\n\t\t\treturn;\n\t\t}\n\t\tint q = (left + right) / 2;\n\t\tmergeSort(arr, left, q);\n\t\tmergeSort(arr, q + 1, right);\n\t\tmerge(arr, left, q, right);\n\t}\n\n\tprivate static void merge(int[] arr, int left, int q, int right) {\n\t\tint tmp[] = new int[right - left + 1];\n\t\tint i = left;\n\t\tint j = q + 1;\n\t\tint k = 0;\n\t\twhile (i <= q && j <= right) {\n\t\t\tif (arr[i] <= arr[j]) {\n\t\t\t\ttmp[k++] = arr[i++];\n\t\t\t} else {\n\t\t\t\ttmp[k++] = arr[j++];\n\t\t\t}\n\t\t}\n\t\tint start = i;\n\t\tint end = q;\n\t\tif (j <= right) {\n\t\t\tstart = j;\n\t\t\tend = right;\n\t\t}\n\t\twhile (start <= end) {\n\t\t\ttmp[k++] = arr[start++];\n\t\t}\n\t\tfor (int l = 0; l <= right - left; l++) {\n\t\t\tarr[l+left] = tmp[l];\n\t\t}\n\t}\n}\n\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);