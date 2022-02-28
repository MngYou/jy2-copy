/*
 * @Author: MngYou
 * @Date: 2022-01-19 10:39:56
 * @LastEditTime: 2022-02-28 18:41:27
 * @FilePath: \wx\script\menuState.js
 */

var menuState = function(game){
		
    this.init = function(){
        //this.stage.backgroundColor="#3C3C3C";
    }
    

    this.create=function(){//创建 
        
        
		audio = game.add.audio(`mp30028`);
		audios[a_i] = audio;
		a_i++;
		audio.play();

        
        game.time.events.add(Phaser.Timer.SECOND * 1.2, function(){//这里是定时器延时       剧情数据里面没加上以后看情况再决定加不加…
            audio = game.add.audio(`mp3000f`);
            audios[a_i] = audio;
            a_i++;
            audio.play();
        }, this);

        var main_UI = game.add.group();
        var bgImage = game.add.image(0,0,'bgImage');
        bgImage.width = game.width;
        bgImage.height = game.height;
        var logo = game.add.sprite(game.world.centerX, 0, 'logo');
        logo.anchor.setTo(0.5,-1.25);
        logo.scale.setTo(0.75);
        var anim_logo =  logo.animations.add('logo');
        anim_logo.play(10,false);
        anim_logo.onComplete.add(function(){
            var scroll = game.add.sprite(game.world.centerX, 0, 'scroll');
            main_UI.add(scroll);
            scroll.anchor.setTo(0.5,-1.5);
            var anim_scroll =  scroll.animations.add('scroll');
            anim_scroll.play(10,false);
            anim_scroll.onComplete.add(function(){
                var logo_buff = game.add.image(game.world.centerX,game.world.centerY,'logo_buff');
                main_UI.add(logo_buff);
                logo_buff.anchor.setTo(0,3);
                var fontStyle = {fill:'Maroon',fontSize:24};
                var copyrightText = game.add.text(0,game.height - 24,'该游戏版权所有【半瓶神仙醋】游戏图片版权归游戏公司所有',fontStyle);
                var warningText = game.add.text(0,game.height -12,'未经许可擅自转载违者必究',fontStyle); 
                copyrightText.scale.setTo(0.5);
                warningText.scale.setTo(0.5);
                main_UI.add(copyrightText);
                main_UI.add(warningText);
                copyrightText.anchor.setTo(-0.1,2);
                warningText.anchor.setTo(-0.22,1.5);
                var 初入江湖 = function(){
                    //console.log('初入江湖');
                    main_UI.destroy();
                    var 主角数据初始化 = function(){
                        var 主角数据初始化界面 = game.add.group();
                        var 背景图片 = game.add.image(0,0,'role_data_init_setting');
                        背景图片.width = game.width;
                        背景图片.height = game.height;
                        var style = { font: "bold 16px Arial", fill: "dimgray", boundsAlignH: "center", boundsAlignV: "middle" };
                        var 姓_文本框 = game.add.text(game.width*0.495,game.height*0.175,'云', style);
                        var 名_文本框 = game.add.text(game.width*0.495,game.height*0.24,'行深',style);
                        var 头像文本 = game.add.text(0,0,'自订头像',style);
                        头像文本.x = 名_文本框.x*0.95;
                        头像文本.y = 名_文本框.y*1.3;

                        var 生命_文本框 = game.add.text(game.width*0.337,game.height*0.485,1000,style);
                        var 力道_文本框 = game.add.text(game.width*0.337,game.height*0.54,0,style);
                        var 身法_文本框 = game.add.text(game.width*0.337,game.height*0.595,0,style);
                        var 用毒_文本框 = game.add.text(game.width*0.337,game.height*0.65,0,style);
                        var 拳掌_文本框 = game.add.text(game.width*0.337,game.height*0.705,0,style);
                        var 暗器_文本框 = game.add.text(game.width*0.337,game.height*0.76,0,style);
                        var 内力_文本框 = game.add.text(game.width*0.52,game.height*0.485,1000,style);
                        var 护体_文本框 = game.add.text(game.width*0.52,game.height*0.54,0,style);
                        var 医疗_文本框 = game.add.text(game.width*0.52,game.height*0.595,0,style);
                        var 解毒_文本框 = game.add.text(game.width*0.52,game.height*0.65,0,style);
                        var 御剑_文本框 = game.add.text(game.width*0.52,game.height*0.705,0,style);
                        var 悟性_文本框 = game.add.text(game.width*0.52,game.height*0.76,0,style);
                        var 生命,内力,力道,护体,身法,拳掌,御剑,暗器,医疗,用毒,解毒,悟性,福缘;
                        var 初始化角色属性 = function(){
                            生命 = game.rnd.between(30,50);
                            内力 = game.rnd.between(10,50);
                            力道 = game.rnd.between(5,30);
                            护体 = game.rnd.between(5,30);
                            身法 = game.rnd.between(5,30);
                            拳掌 = game.rnd.between(5,30);
                            御剑 = game.rnd.between(5,30);
                            暗器 = game.rnd.between(5,30);
                            医疗 = game.rnd.between(5,30);
                            用毒 = game.rnd.between(5,30);
                            解毒 = game.rnd.between(5,30);
                            悟性 = game.rnd.between(10,100);
                            福缘 = game.rnd.between(10,100);
                            生命_文本框.text = 生命;
                            内力_文本框.text = 内力;
                            力道_文本框.text = 力道;
                            护体_文本框.text = 护体;
                            身法_文本框.text = 身法;
                            拳掌_文本框.text = 拳掌;
                            御剑_文本框.text = 御剑;
                            暗器_文本框.text = 暗器;
                            医疗_文本框.text = 医疗;
                            用毒_文本框.text = 用毒;
                            解毒_文本框.text = 解毒;
                            悟性_文本框.text = 悟性;
                        }
                        初始化角色属性();
                        var style = { font: "bold 12px Arial", fill: "#fffg", boundsAlignH: "center", boundsAlignV: "middle" };
                        var 属性介绍文本 = game.add.text(game.width*0.7,game.height*0.15,`
生命：主角受到伤害时，
生命减少。生命为0时，
主角死亡
内力：足够的内力才能
使用更具威力的招式。
力道：影响普通攻击造
成的伤害
护体：影响受伤害程度
身法：影响出招速度
医疗：用以治病救人
用毒：影响使毒效果
解毒：影响解毒效果
拳掌：拳掌类的功力
御剑：兵器类的功力
暗器：使暗器的功力
悟性：影响主角修炼
武功的效率
                        `,style);
                        var 随机按钮 = game.add.button(game.world.centerX*0.85, game.height *0.87, 'sys_btn2', 初始化角色属性, this, 1, 0, 1);
                        随机按钮.anchor.setTo(.5);
                        var 随机按钮文本 = game.add.text(0,0,'随机',{fill:'black',fontSize:16});
                        随机按钮文本.anchor.setTo(.5);
                        随机按钮文本.x = 随机按钮.x;
                        随机按钮文本.y = 随机按钮.y;
                        var 确定 = function(){
                            主角数据 = {
                                '姓' : 姓_文本框.text,
                                '名' : 名_文本框.text,
                                '姓名' : `${姓_文本框.text}${名_文本框.text}`,
                                '生命上限' : parseInt(生命_文本框.text),
                                '内力上限' : parseInt(内力_文本框.text),
                                '生命' : parseInt(生命_文本框.text),
                                '内力' : parseInt(内力_文本框.text),
                                '力道' : parseInt(力道_文本框.text),
                                '护体' : parseInt(护体_文本框.text),
                                '身法' : parseInt(身法_文本框.text),
                                '拳掌' : parseInt(拳掌_文本框.text),
                                '御剑' : parseInt(御剑_文本框.text),
                                '暗器' : parseInt(暗器_文本框.text),
                                '医疗' : parseInt(医疗_文本框.text),
                                '用毒' : parseInt(用毒_文本框.text),
                                '解毒' : parseInt(解毒_文本框.text),
                                '悟性' : parseInt(悟性_文本框.text),
                                '福缘': parseInt(福缘),
                                '秘籍':[],
                                '声望':0,
                                '银两':0,
                                '经验':0,
                                '学点':0,
                                '等级':1,'秘籍':[],'事件':[],'丹药':[//此排开始皆为调试数值
                                    {'名称':'金创药','数量':1},
                                    {'名称':'小还丹','数量':2},
                                    {'名称':'玉真散','数量':0},
                                    {'名称':'大还丹','数量':0},
                                    {'名称':'九转熊蛇丸','数量':0},
                                    {'名称':'九花玉露丸','数量':0},
                                    {'名称':'黑玉断续膏','数量':0},
                                    {'名称':'腊八粥','数量':0},
                                    {'名称':'豹胎易筋丸','数量':0},
                                    {'名称':'莽牯朱蛤','数量':0},
                                    {'名称':'天山雪莲','数量':0},
                                    {'名称':'大蟠桃','数量':0},
                                    {'名称':'玄冰烈火酒','数量':0},
                                ],'装备':['铁剑','金蛇剑','玄铁剑','乌蚕衣','飞镖','布衣','铁甲','生死符'],
                                '已装备武器':'','已装备防具':'','已装备暗器':'',
                                '杀孽':0,'侠义':50,'天赋':[],'打神仙':0,'拜神仙':0,'败给岳灵珊':0,'向岳不群请教武功':0,'少林思过':0,
                            };
                            游戏数据 = base['o_base'];
                            for(var k in playerData){
                                游戏数据[0].主角[k] = playerData[k];
                            }
                            for(var k in 主角数据){
                                游戏数据[0].主角[k] = 主角数据[k];
                            }
                            主角数据初始化界面.destroy();
                            game.state.start('game');
                        }
                        var 确定按钮 = game.add.button(game.world.centerX*1.465, game.height *0.86, 'sys_btn', 确定, this, 1, 0, 1);
                        确定按钮.scale.setTo(1.6,2.2);
                        var 确定按钮文本 = game.add.text(确定按钮.x+确定按钮.width*0.33,确定按钮.y+确定按钮.height*0.33,'确定',{font: "bold 16px Arial", fill: "dimgray", boundsAlignH: "center", boundsAlignV: "middle"});
                        主角数据初始化界面.add(背景图片);
                        主角数据初始化界面.add(姓_文本框);
                        主角数据初始化界面.add(名_文本框);
                        主角数据初始化界面.add(头像文本);
                        主角数据初始化界面.add(生命_文本框);
                        主角数据初始化界面.add(内力_文本框);
                        主角数据初始化界面.add(力道_文本框);
                        主角数据初始化界面.add(护体_文本框);
                        主角数据初始化界面.add(身法_文本框);
                        主角数据初始化界面.add(拳掌_文本框);
                        主角数据初始化界面.add(御剑_文本框);
                        主角数据初始化界面.add(暗器_文本框);
                        主角数据初始化界面.add(医疗_文本框);
                        主角数据初始化界面.add(用毒_文本框);
                        主角数据初始化界面.add(解毒_文本框);
                        主角数据初始化界面.add(悟性_文本框);
                        主角数据初始化界面.add(属性介绍文本);
                        主角数据初始化界面.add(随机按钮);
                        主角数据初始化界面.add(随机按钮文本);
                        主角数据初始化界面.add(确定按钮);
                        主角数据初始化界面.add(确定按钮文本);
                    }
                    主角数据初始化();
                }
                var 风云再起 = function(){
                    //console.log('风云再起');
                    var 存档盒子容器;
                    if(typeof(存档盒子容器)=='undefined'){
                        存档盒子容器 = game.add.group();
                        var 存档盒子 = game.add.image(game.world.centerX,game.world.centerY,'loadOrSaveBox');
                        存档盒子.scale.setTo(0.7,1);
                        存档盒子.anchor.setTo(.5);
                        存档盒子.inputEnabled = true;
                        var 存档1 = game.add.text(存档盒子.x,存档盒子.y,'记录一 0级 无门派\n',{fontSize:12});
                        存档1.anchor.setTo(0.5,2.1);
                        var 存档2 = game.add.text(存档盒子.x,存档盒子.y,'记录二 6级 少林派\n2022.1.7 22:34:45',{fontSize:12});
                        存档2.anchor.setTo(0.5);
                        var 存档3 = game.add.text(存档盒子.x,存档盒子.y,'记录三 0级 无门派\n',{fontSize:12});
                        存档3.anchor.setTo(0.5,-1.25);
                        var 存档盒子标题 = game.add.text(0,0,'读取记录',{fontSize:21});
                        存档盒子标题.x = 存档盒子.x;
                        存档盒子标题.y = 存档盒子.y;
                        存档盒子标题.anchor.setTo(0.5,4.25);
                        var 关闭 = function(){
                            存档盒子容器.alpha = 0;
                            存档盒子.inputEnabled = false;
                        }
                        var 存档盒子按钮 = game.add.button(game.world.centerX, 0, 'sys_btn', 关闭, this, 0, 1, 2);
                        存档盒子按钮.y = 存档盒子.y + 存档盒子.height*0.5-存档盒子按钮.height*0.9;
                        存档盒子按钮.anchor.setTo(.5);
                        var 存档盒子按钮文本 = game.add.text(game.world.centerX,0,'关闭',{fontSize:12,fill:'dimgray'});
                        存档盒子按钮文本.anchor.setTo(.5);
                        存档盒子按钮文本.y = 存档盒子按钮.y;
                        存档盒子容器.add(存档盒子);
                        存档盒子容器.add(存档盒子标题);
                        存档盒子容器.add(存档盒子按钮);
                        存档盒子容器.add(存档盒子按钮文本);
                        存档盒子容器.add(存档1);
                        存档盒子容器.add(存档2);
                        存档盒子容器.add(存档3);
                    }else{
                        存档盒子容器.alpha = 1;
                        存档盒子.inputEnabled = true;
                    }	
                }
                var 群英荟萃 = function(){
                    //console.log('群英荟萃');
                    var 信息盒子容器;
                    if(typeof(信息盒子容器)=='undefined'){
                        信息盒子容器 = game.add.group();
                        var 信息盒子 = game.add.image(game.world.centerX,game.world.centerY,'infoBox');
                        信息盒子.scale.setTo(0.7,1);
                        信息盒子.anchor.setTo(.5);
                        信息盒子.inputEnabled = true;
                        var 信息文本 = game.add.text(game.world.centerX,0,`  制作人：半瓶神仙醋
  特别鸣谢：小涵 水晶橙子
                        `,{fill:'dimgray',fontSize:21});
                        信息文本.anchor.setTo(0.5,-1.25);
                        var 关闭 = function(){
                            信息盒子容器.alpha = 0;
                            信息盒子.inputEnabled = false;
                        }
                        var 信息盒子按钮 = game.add.button(0, 0, 'sys_btn', 关闭, this, 0, 1, 2);
                        信息盒子按钮.x = 信息盒子.x + (信息盒子.width - 信息盒子按钮.width)*0.5 - 信息盒子按钮.width*0.64;
                        信息盒子按钮.y = 信息盒子.y + (信息盒子.height - 信息盒子按钮.height)*0.5 - 信息盒子按钮.height;
                        信息盒子按钮.anchor.setTo(.5);
                        var 信息盒子按钮文本 = game.add.text(0,0,'关闭',{fontSize:12,fill:'dimgray'});
                        信息盒子按钮文本.anchor.setTo(.5);
                        信息盒子按钮文本.x = 信息盒子按钮.x;
                        信息盒子按钮文本.y = 信息盒子按钮.y;
                        信息盒子容器.add(信息盒子);
                        信息盒子容器.add(信息文本);
                        信息盒子容器.add(信息盒子按钮);
                        信息盒子容器.add(信息盒子按钮文本);
                    }else{
                        信息盒子容器.alpha = 1;
                        信息盒子.inputEnabled = true;
                    }
                }
                var 封剑归隐 = function(){
                    //console.log('封剑归隐');
                }
                var scroll_button1 = game.add.button(game.world.centerX * 0.8, game.world.centerY * 1.25, 'scroll_button', 初入江湖, this, 1, 0, 1);
                var scroll_button2 = game.add.button(game.world.centerX * 0.975, game.world.centerY * 1.25, 'scroll_button', 风云再起, this, 3, 2, 3);
                var scroll_button3 = game.add.button(game.world.centerX * 1.145, game.world.centerY * 1.25, 'scroll_button', 群英荟萃, this, 5, 4, 5);
                var scroll_button4 = game.add.button(game.world.centerX * 1.315, game.world.centerY * 1.25, 'scroll_button', 封剑归隐, this, 7, 6, 7);
                scroll_button1.anchor.setTo(0.5, 0.5);
                scroll_button2.anchor.setTo(0.5, 0.5);
                scroll_button3.anchor.setTo(0.5, 0.5);
                scroll_button4.anchor.setTo(0.5, 0.5);
                main_UI.add(scroll_button1);
                main_UI.add(scroll_button2);
                main_UI.add(scroll_button3);
                main_UI.add(scroll_button4);
            }, this);
        }, this);

        main_UI.add(bgImage);
        main_UI.add(logo);
    }; 
}