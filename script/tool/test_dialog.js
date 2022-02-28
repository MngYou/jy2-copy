/*
 * @Author: MngYou
 * @Date: 2022-01-09 19:28:30
 * @LastEditTime: 2022-01-09 19:28:31
 * @FilePath: \wx\test_dialog.js
 */
场景系统_隐藏 = function(arg){
				//场景系统_隐藏
				console.log('场景系统_隐藏');
			}
			场景系统_显示 = function(arg){
				//场景系统_显示
				console.log('场景系统_显示');
			}
			场景系统_设置背景图片 = function(arg){
				//场景系统_隐藏
				bg.loadTexture('map' + arg.toString(16).substring(4));
				bg.width = game.width;
				bg.height = game.height;
			}
			对话系统_显示主角对话 = function(arg){
				dialog_box_name.text = '云行深';
				dialog_box_head.loadTexture('head0001');
				dialog_box_text.text = arg.slice(0,28)+'\n'+arg.slice(28);
			}
			对话系统_显示NPC对话 = function(){
				var name = arguments[0];
				var head = arguments[1];
				var text = arguments[2];
				dialog_box_name.text = name;
				dialog_box_head.loadTexture('head' + head.toString(16).substring(4));
				dialog_box_text.text = text.slice(0,28)+'\n'+text.slice(28);
			}
			场景系统_添加静态人物 = function(){
				var headImage = arguments[0];
				var i = arguments[1];
				var name = arguments[2];
				var nil = arguments[3];
				heads.children[i].loadTexture('head' + headImage.toString(16).substring(4));
				heads.children[i].name = name;
			}
			var G = {};
			G.call = function(){
				fun = arguments[0];
				if (fun=='场景系统_隐藏') {
					场景系统_隐藏();
				}
				if (fun=='场景系统_显示') {
					场景系统_显示();
				}
				if (fun=='场景系统_设置背景图片') {
					场景系统_设置背景图片(arguments[1]);
				}
				if (fun=='对话系统_显示主角对话') {
					对话系统_显示主角对话(arguments[1]);
				}
				if (fun=='场景系统_添加静态人物') {
					//参数1 头像图标 参数2横坐标 参数3纵坐标 参数4人物名称 参数5 null == nil
					场景系统_添加静态人物(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
				}
				if (fun=='对话系统_显示NPC对话') {
					//参数1 人物名称 参数2 头像图标 参数3 对话内容
					对话系统_显示NPC对话(arguments[1],arguments[2],arguments[3]);
				}
			}

			
			G.call("场景系统_设置背景图片",0x56060003);
			G.call("场景系统_添加静态人物",0x56020002,0,"医生",null);
			G.call("场景系统_添加静态人物",0x56020003,4,"母亲",null);
			G.call("对话系统_显示主角对话","大夫！大夫！你开开门！怎么可以见死不救呢？！你还有没有医德？！我娘要是有个三长两短，我不会放过你的。")
			G.call("对话系统_显示NPC对话","大夫",0x56020002,"小子，你知道老夫出一次诊的诊金是多少吗？是20两纹银！你有吗？如果没有，就少在这里扯淡！");

            
			/* var dialog_box_npc = game.add.image(game.width,0,'dialog_UI');
			dialog_box_npc.y = game.height - dialog_box_npc.height;
			dialog_box_npc.scale.setTo(-1,1); */