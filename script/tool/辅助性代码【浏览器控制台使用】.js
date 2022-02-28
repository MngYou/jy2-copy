/*
 * @Author: MngYou
 * @Date: 2022-01-10 20:46:37
 * @LastEditTime: 2022-01-10 20:46:37
 * @FilePath: \wx\辅助性代码【浏览器控制台使用】.js
 */
//获取鼠标在浏览器文档上的位置
function getPointer(ev)
{
Ev= ev || window.event;
var mousePos = mouseCoords(ev);
console.log(mousePos.x);
console.log(mousePos.y);
}
function mouseCoords(ev)
{
if(ev.pageX || ev.pageY){
return {x:ev.pageX, y:ev.pageY};
}
return{
x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
y:ev.clientY + document.body.scrollTop - document.body.clientTop
};
}
document.onclick = getPointer;