/*
 * @Description: 在页面上监听鼠标悬停 "topGroup" 元素的事件。当鼠标移出 "topGroup" 元素时，会显示名为 "todayCard" 的元素，并将其置于其他元素的前面（层叠顺序为 1）。当鼠标悬停在 "topGroup" 元素上时，不执行任何操作。这可能用于创建一种效果，当鼠标移入特定区域时显示一个卡片，鼠标移出时隐藏它。
 * @LastEditors: 他们叫我跃总 Dec27-Lee
 * @Date: 2023-10-03 15:34:12
 * @LastEditTime: 2023-10-03 16:24:03
 * @FilePath: \Dec27-Lee.github.iof:\Develop_F\Blog\source\config\js\home-top.topGroup.js
 */
var bywind = {
    hideTodayCard: function () {
        document.getElementById("todayCard") && document.getElementById("todayCard").classList.add("hide")
    }
}
$(".topGroup").hover((function () { }
), (function () {
    document.getElementById("todayCard").classList.remove("hide"),
        document.getElementById("todayCard").style.zIndex = 1
}
))