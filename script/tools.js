/*
 * @Author: MngYou
 * @Date: 2022-02-28 18:46:31
 * @LastEditTime: 2022-02-28 18:46:54
 * @FilePath: \wx\script\tools.js
 */

是否存在秘籍  = function(秘籍){
	let count = 0;
	let result = false;
	for (let i = 0; i < 游戏数据[0].主角.秘籍.length; i++) {
		if(游戏数据[0].主角.秘籍[i].名称 == 秘籍){
			count++;
		}
	}
	if(count>0){
		result = true;
	}else{
		result = false;
	}
	return result;
}
是否存在天赋  = function(天赋){
	let count = 0;
	let result = false;
	for (let i = 0; i < 游戏数据[0].主角.天赋.length; i++) {
		if(游戏数据[0].主角.天赋[i] == 天赋){
			count++;
		}
	}
	if(count>0){
		result = true;
	}else{
		result = false;
	}
	return result;
}