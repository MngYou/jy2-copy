/*
 * @Author: MngYou
 * @Date: 2022-01-21 13:31:19
 * @LastEditTime: 2022-02-28 19:28:47
 * @FilePath: \wx\script\fightState.js
 */
var fightState=function(game){
    this.create=function(){

        var 逃跑跳转剧情 = {
            '剧情名称':所处场景,
            '场景索引':0,
        };
        
        var 战斗界面 = game.add.group();
        var 背景图像 = game.add.image(0,0,'map1001');
        背景图像.width = game.width;
        背景图像.height = game.height;

        var 敌人可视化数据UI = game.add.group();
        var 敌人头像框 = game.add.image(0,0,'fight_ui');
        敌人头像框.frame = 82;
        敌人头像框.scale.setTo(0.7,1);
        var 敌人头像 = game.add.image(23,24,'head0057');
        敌人头像.scale.set(0.55,0.85);
        var 敌人血力槽 = game.add.image(0,0,'fight_ui');
        敌人血力槽.frame = 83;
        敌人血力槽.scale.setTo(0.5,1);
        敌人血力槽.x = 敌人头像框.x + 敌人头像框.width*0.84;
        敌人血力槽.y = 敌人头像框.height * 0.12;
        var 敌人血条 = game.add.image(0,0,'fight_ui');
        敌人血条.frame = 84;
        敌人血条.scale.setTo(0.5,1);
        敌人血条.x = 敌人头像框.x + 敌人头像框.width*0.85;
        敌人血条.y = 41;
        var 敌人血条值 = 敌人血条.width;
        var 敌人蓝条 = game.add.image(0,0,'fight_ui');
        敌人蓝条.frame = 85;
        敌人蓝条.scale.setTo(0.5,1);
        敌人蓝条.x = 敌人头像框.x + 敌人头像框.width*0.85;
        敌人蓝条.y = 65;
        var 敌人蓝条值 = 敌人蓝条.width;
        var 敌人生命文本框 = game.add.text(敌人血条.x,敌人血条.y,'敌人生命/敌人生命上限',{fill:'white',fontSize:12});
        var 敌人内力文本框 = game.add.text(敌人蓝条.x,敌人蓝条.y,'敌人内力/敌人内力上限',{fill:'white',fontSize:12});
        var 敌人行动速度槽 = game.add.image(0,0,'fight_ui');
        敌人行动速度槽.frame = 27;
        敌人行动速度槽.scale.setTo(.59,.7);
        敌人行动速度槽.tint = 0xeeeee;
        敌人行动速度槽.x = 90;
        敌人行动速度槽.y = 105;
        var 敌人行动速度条 = game.add.image(0,0,'fight_ui');
        敌人行动速度条.frame = 27;
        敌人行动速度条.scale.setTo(.58,.4);
        敌人行动速度条.tint = 0xff0000;
        敌人行动速度条.x = 90;
        敌人行动速度条.y = 107;
        var 敌人行动进度值 = 敌人行动速度条.width;
        敌人行动速度条.width = 0;
        敌人可视化数据UI.add(敌人头像框);
        敌人可视化数据UI.add(敌人头像);
        敌人可视化数据UI.add(敌人血力槽);
        敌人可视化数据UI.add(敌人血条);
        敌人可视化数据UI.add(敌人蓝条);
        敌人可视化数据UI.add(敌人生命文本框);
        敌人可视化数据UI.add(敌人内力文本框);
        敌人可视化数据UI.add(敌人行动速度槽);
        敌人可视化数据UI.add(敌人行动速度条);

        var 我方对象 = 游戏数据[0].主角;
        
        var 主角可视化数据UI = game.add.group();
        var 主角头像框 = game.add.image(0,0,'fight_ui');
        主角头像框.frame = 82;
        主角头像框.scale.setTo(0.7,1);
        var 主角头像 = game.add.image(23,24,'head0001');
        主角头像.scale.set(0.55,0.85);
        var 主角血力槽 = game.add.image(0,0,'fight_ui');
        主角血力槽.frame = 83;
        主角血力槽.scale.setTo(0.5,1);
        主角血力槽.x = 主角头像框.x + 主角头像框.width*0.84;
        主角血力槽.y = 主角头像框.height * 0.12;
        var 主角血条 = game.add.image(0,0,'fight_ui');
        主角血条.frame = 84;
        主角血条.scale.setTo(0.5,1);
        主角血条.x = 主角头像框.x + 主角头像框.width*0.85;
        主角血条.y = 41;
        var 主角血条值 = 主角血条.width;
        var 主角蓝条 = game.add.image(0,0,'fight_ui');
        主角蓝条.frame = 85;
        主角蓝条.scale.setTo(0.5,1);
        主角蓝条.x = 主角头像框.x + 主角头像框.width*0.85;
        主角蓝条.y = 65;
        var 主角蓝条值 = 主角蓝条.width;
        var 主角生命文本框 = game.add.text(主角血条.x+143,主角血条.y,'主角生命/主角生命上限',{fill:'white',fontSize:12});
        var 主角内力文本框 = game.add.text(主角蓝条.x+143,主角蓝条.y,'主角内力/主角内力上限',{fill:'white',fontSize:12});
        主角生命文本框.scale.setTo(-1,1);
        主角内力文本框.scale.setTo(-1,1);
        主角可视化数据UI.add(主角头像框);
        主角可视化数据UI.add(主角头像);
        主角可视化数据UI.add(主角血力槽);
        主角可视化数据UI.add(主角血条);
        主角可视化数据UI.add(主角蓝条);
        主角可视化数据UI.add(主角生命文本框);
        主角可视化数据UI.add(主角内力文本框);
        主角可视化数据UI.scale.setTo(-1,1);
        主角可视化数据UI.x = game.width;
        if (我方对象.生命 < 0) {
            我方对象.生命 = 0;
        }
        主角生命文本框.text = `${我方对象.生命}/${我方对象.生命上限}`;
        主角血条.width = 主角血条值 * (我方对象.生命/我方对象.生命上限);
        if (我方对象.内力<0) {
            我方对象.内力 = 0;
        }
        主角蓝条.width = 主角蓝条值 * (我方对象.内力/我方对象.内力上限);
        主角内力文本框.text = `${我方对象.内力}/${我方对象.内力上限}`;

        var 主角行动可视化数据UI = game.add.group();
        var 底座 = game.add.image(0,0,'fight_ui');
        底座.frame = 26;
        底座.y = game.height - 底座.height * 1.1;
        var 拳_切换 = function(){
            武学类型切换('拳');
        }
        var 掌_切换 = function(){
            武学类型切换('掌');
        }
        var 指_切换 = function(){
            武学类型切换('指');
        }
        var 剑_切换 = function(){
            武学类型切换('剑');
        }
        var 内_切换 = function(){
            武学类型切换('内');
        }
        var 武学类型切换 = function(类型){
            if(解封的武学UI组.length > 0){//这里是为了跟禁止图标对应
                解封的武学UI组.children.forEach(function(UI){
                    UI.destroy();
                });
            }
            if(禁止的武学UI组.length > 0){//这里每检测到禁止图标的存在就删除掉【防止过多】
                禁止的武学UI组.children.forEach(function(UI){
                    UI.destroy();
                });
            }
            if (我方对象.所有武学[类型].length > 0) {
                for (let i = 0; i < 我方对象.所有武学[类型].length; i++) {
                    if (我方对象.可用武学[类型][i]!==''&&我方对象.可用武学[类型][i].可用) { //这里是用的一个一个生成图标  但是我需要6个一次生成 5个武功种类

                        if(解封的武学UI组.length < 30){//第二个办法 限制生成的个数【避免生成太多个【禁止】图标黑掉】
                            this.解封的武学UI = 解封的武学UI组.create(game.width*0.089+i*42.45, game.height *0.88, 'fight_ui');
                            var 禁止的武学UI = 禁止的武学UI组.create(game.width*0.089+i*42.45, game.height *0.88, 'fight_not');
                            禁止的武学UI.inputEnabled = true;
                            禁止的武学UI.alpha = 0.3;
                            this.解封的武学UI.frame = 我方对象.所有武学[类型][i].图标;
                            this.解封的武学UI.inputEnabled = true;
                        }
                        else
                        /* {
                            解封的武学UI组.children.forEach(function(UI){
                                UI.destroy();
                            });
                            禁止的武学UI组.children.forEach(function(UI){
                                UI.destroy();
                            });
                            this.解封的武学UI = 解封的武学UI组.create(game.width*0.089+i*42.45, game.height *0.88, 'fight_ui');
                            var 禁止的武学UI = 禁止的武学UI组.create(game.width*0.089+i*42.45, game.height *0.88, 'fight_not');
                            禁止的武学UI.inputEnabled = true;
                            禁止的武学UI.alpha = 0.3;
                            this.解封的武学UI.frame = 我方对象.所有武学[类型][i].图标;
                            this.解封的武学UI.inputEnabled = true;
                        } */
                        {
                            
                        }
                        var 解封的武学UI = this.解封的武学UI;
                        kungfu['o_kungfu'].forEach(function(item,j){//重新弄了个循环 不然循环内部后面的会继续向下执行
                            if(我方对象.所有武学[类型][i].名称==item.名称){
                                解封的武学UI.需集气 = item.需集气;
                                解封的武学UI.需内力 = item.需内力;
                            }
                        });
                        解封的武学UI.events.onInputDown.add(function(){
                            if (我方进行攻击) {
                                return false;//防止招式攻击重复点击bug
                            }
                            var 发动绝招 = false;
                            kungfu['o_kungfu'].forEach(function(item,j){//重新弄了个循环 不然循环内部后面的会继续向下执行
                                if(我方对象.所有武学[类型][i].名称==item.名称){
                                    if(我方对象.内力<item.需内力*item.等级){//武学招式耗内为武学等级乘以武学初始耗内
                                        发动绝招 = false;
                                    }else{
                                        发动绝招 = true;
                                        我方对象.内力 = 游戏数据[0].主角.内力 = 主角数据.内力 -= item.需内力*item.等级;//////需要更新游戏数据
                                        if (我方对象.内力<0) {
                                            我方对象.内力 = 0;
                                        }
                                        主角蓝条.width = 主角蓝条值 * (我方对象.内力/我方对象.内力上限);
                                        主角内力文本框.text = `${我方对象.内力}/${我方对象.内力上限}`;
                                    }
                                }
                            });
                            if(发动绝招==false){return false;}
                            主角行动速度条.width = 0;
                            我方进行攻击 = true;
                            敌方进度条行进 = false;
                            //console.log(我方对象.所有武学[类型][i].名称);
                            //主角的招式攻击动作
                            var 动作名称;
                            if (类型=='拳'||类型=='掌') {
                                动作名称 = 我方对象.动画.拳掌起手式;
                                
                                audio = game.add.audio(`mp3000d`);
                                audios[a_i] = audio;
                                a_i++;
                                audio.play();
                            }
                            if (类型=='指') {
                                动作名称 = 我方对象.动画.指法动作;

                                
                                audio = game.add.audio(`mp30003`);
                                audios[a_i] = audio;
                                a_i++;
                                audio.play();

                            }
                            if (类型=='剑') {
                                动作名称 = 我方对象.动画.剑法动作;
                                audio = game.add.audio(`mp30001`);

                                audios[a_i] = audio;
                                a_i++;
                                audio.play();

                            }
                            if (类型=='内') {
                                动作名称 = 我方对象.动画.内功动作;

                                
                                audio = game.add.audio(`mp30002`);
                                audios[a_i] = audio;
                                a_i++;
                                audio.play();

                            }
                            if (我方对象.所有武学[类型][i].名称=='太玄神功') {
                                动作名称 = 我方对象.动画.拳掌起手式;
                            }
                            if (我方对象.所有武学[类型][i].名称=='吐纳心法'||我方对象.所有武学[类型][i].名称=='北冥神功'||我方对象.所有武学[类型][i].名称=='寒冰真气') {
                                动作名称 = 我方对象.动画.内功辅助;
                            }
                            if (我方对象.所有武学[类型][i].名称=='九阳神功'||我方对象.所有武学[类型][i].名称=='龙象般若功') {
                                动作名称 = 我方对象.动画.内功攻击;
                            }
                            //主角的招式攻击特效
                            var 特效对象,武学招式攻击特效;
                            特效对象 = game.add.image(我方对象.所有武学[类型][i].坐标.x,我方对象.所有武学[类型][i].坐标.y,我方对象.所有武学[类型][i].名称);
                            武学招式攻击特效 = 特效对象.animations.add('武学招式攻击特效');
                            武学招式攻击特效.play(15,false);
                            武学招式攻击特效.onComplete.add(function(){
                                特效对象.destroy();
                            },this);
                            //伤害数值计算 根据各个武学威力系数与基础攻击 得出最终攻击力
                            kungfu['o_kungfu'].forEach(function(item,j){
                                if(我方对象.所有武学[类型][i].名称==item.名称){
                                    //悟性影响武学升级效率
                                    if (90 <= 游戏数据[0].主角.悟性) {
                                        item.经验 += 10;
                                    }else if (60 <= 游戏数据[0].主角.悟性){
                                        item.经验 += 5;
                                    }else if (0 < 游戏数据[0].主角.悟性){
                                        item.经验 += 2;
                                    }else {
                                        return ;
                                    }

                                    //item.等级 = 10;

                                    if (item.等级 < item.升级.length) {
                                        //console.log(`升级需经验：${item.升级[item.等级].需经验}`);
                                        if (item.经验 > item.升级[item.等级].需经验) {
                                            item.等级++;
                                            //G.call("通知系统_显示飘字","修为提升",0x4900001a,0xFF,'右下',0)
                                            游戏数据[0].主角.生命上限 = 主角数据.生命上限 += item.升级[item.等级].加生命;
                                            游戏数据[0].主角.内力上限 = 主角数据.内力上限 += item.升级[item.等级].加内力;
                                            游戏数据[0].主角.力道 = 主角数据.力道 += item.升级[item.等级].加力道;
                                            游戏数据[0].主角.护体 = 主角数据.护体 += item.升级[item.等级].加护体;
                                            游戏数据[0].主角.身法 = 主角数据.身法 += item.升级[item.等级].加身法;
                                            游戏数据[0].主角.拳掌 = 主角数据.拳掌 += item.升级[item.等级].加拳掌;
                                            游戏数据[0].主角.御剑 = 主角数据.御剑 += item.升级[item.等级].加御剑;
                                            游戏数据[0].主角.暗器 = 主角数据.御剑 += item.升级[item.等级].加暗器;
                                            游戏数据[0].主角.医疗 = 主角数据.医疗 += item.升级[item.等级].加医疗;
                                            游戏数据[0].主角.用毒 = 主角数据.用毒 += item.升级[item.等级].加用毒;
                                            游戏数据[0].主角.解毒 = 主角数据.解毒 += item.升级[item.等级].加解毒;
                                            if (typeof(item.升级[item.等级].经络受损) !== 'undefined' && item.升级[item.等级].经络受损 > 0){
                                                游戏数据[0].主角.生命上限 = 主角数据.生命上限 *= (1 - item.升级[item.等级].经络受损);
                                                //G.call("通知系统_显示飘字","经络受损",0x49000023,0xFF,'右下',500)
                                            }
                                            //G.call('通用_更新人物装备属性')
                                        }
                                    }
                                    
                                    //计算武学伤害
                                    var int_数值 = 0;
                                    var int_随机数值 = 0;
                                    int_数值 = item.效果[item.等级].基准值;
                                    if (item.名称=='吐纳心法') {
                                        int_数值 = item.效果[item.等级].基准值 * 我方对象.医疗 / 100;
                                    } else if (item.名称=='寒冰真气') {
                                        int_数值 = item.效果[item.等级].基准值;
                                    } else if (item.名称=='北冥神功') {
                                        
                                    } else if (item.名称=='太玄神功') {
                                        int_随机数值 = 100 * item.等级;
                                    } else if (item.名称=='自创武学【绝招】') {
                                        int_数值 = 我方对象.拳掌 + 我方对象.御剑 + 我方对象.用毒 + 我方对象.暗器;
                                        int_数值 = int_数值 * item.效果[item.等级].基准值 * 我方对象.力道 / 10000;
                                    } else {
                                        int_数值 = int_数值 + item.效果[item.等级].用毒系数 * 我方对象.用毒
                                        int_数值 = int_数值 + item.效果[item.等级].太极系数 * Math.floor(game.rnd.between(敌方对象.攻击伤害下限,敌方对象.攻击伤害上限));
                                        if (10 <= item.等级){
                                            int_数值 = int_数值 + item.效果[item.等级].侠义系数 * Math.floor(我方对象.侠义 / 20);
                                        } else {
                                            int_数值 = int_数值 + item.效果[item.等级].侠义系数 * Math.floor(我方对象.侠义 / 30);
                                        }
                                        if ("通常(大随机)" == item.效果类型 && item.等级 < 10 ){ 
                                            int_随机数值 = 我方对象.力道;
                                            int_随机数值 = int_随机数值 + item.效果[item.等级].拳掌系数 * 我方对象.拳掌;
                                            int_随机数值 = int_随机数值 + item.效果[item.等级].御剑系数 * 我方对象.御剑;
                                        }else{ 
                                            int_数值 = int_数值 + item.效果[item.等级].拳掌系数 * 我方对象.拳掌;
                                            int_数值 = int_数值 + item.效果[item.等级].御剑系数 * 我方对象.御剑;
                                            if ("通常(小随机)" == item.效果类型 && 10 <= item.等级){
                                                int_数值 = int_数值 + 我方对象.力道;
                                            }else{ 
                                                int_随机数值 = 我方对象.力道;
                                            }
                                        }
                                    }
                                    int_数值 = Math.floor(int_数值);
                                    int_随机数值 = Math.floor(int_随机数值);
                                    我方对象.攻击力 = game.rnd.between(int_数值,int_数值+int_随机数值);
                                    //console.log(我方对象.攻击力);

                                    
                                    //console.log(`武学名称${item.名称}：武学等级${item.等级}：武学经验${item.经验}武学伤害${我方对象.攻击力}`);
                                }
                                if (j<32) {
                                }
                            }); 

                            //伤害数值计算 根据各个武学威力系数与基础攻击 得出最终攻击力
                            var 武学招式攻击动作 = 主角.animations.add('武学招式攻击动作',动作名称);
                            武学招式攻击动作.play(50,false);
                            武学招式攻击动作.onComplete.add(function(){
                                if(我方对象.所有武学[类型][i].名称=='寒冰真气'){
                                    敌方对象.身法 -= 我方对象.攻击力;
                                    if (敌方对象.身法<0) {
                                        敌方对象.身法 = 0;
                                    }
                                    我方对象.攻击力 = 0;
                                }
                                if (我方对象.所有武学[类型][i].名称=='吐纳心法') {
                                    我方对象.生命 += 我方对象.攻击力;
                                    if (我方对象.生命 > 我方对象.生命上限) {
                                        我方对象.生命 = 我方对象.生命上限;
                                    }
                                    主角生命文本框.text = `${我方对象.生命}/${我方对象.生命上限}`;
                                    主角血条.width = 主角血条值 * (我方对象.生命/我方对象.生命上限);
                                    我方对象.攻击力 = 0;
                                }
                                if (我方对象.所有武学[类型][i].名称=='北冥神功') {
                                    敌方对象.内力 -= 我方对象.攻击力;
                                    我方对象.内力 += game.rnd.between(我方对象.攻击力,敌方对象.内力);
                                    if (我方对象.内力>我方对象.内力上限) {
                                        我方对象.内力 = 我方对象.内力上限;
                                    }
                                    主角蓝条.width = 主角蓝条值 * (我方对象.内力/我方对象.内力上限);
                                    主角内力文本框.text = `${我方对象.内力}/${我方对象.内力上限}`;
                                    if (敌方对象.内力<0) {
                                        敌方对象.内力 = 0;
                                    }
                                    敌人内力文本框.text = `${敌方对象.内力}/${敌方对象.内力上限}`;
                                    敌人蓝条.width = 敌人蓝条值 * (敌方对象.内力/敌方对象.内力上限);
                                    我方对象.攻击力 = 0;
                                }
                                if(是否存在天赋('左右互搏之术')){
                                    我方对象.攻击力 *= 2;
                                    //左右互搏之术下的攻击动画 即武学名称加上左右互搏之术的漂浮字【双份伤害数值】
                                    var 武学名称漂浮字 = game.add.text(game.world.centerX,game.world.centerY / 2,我方对象.所有武学[类型][i].名称,{fill:'red',fontSize:16});
                                    game.add.tween(武学名称漂浮字).to( { y: game.world.centerY / 4,alpha : 0 }, 700, "Linear", true).onComplete.addOnce(function(){
                                        武学名称漂浮字.destroy();
                                    });
                                    var rnd1 = game.rnd.between(0.4*我方对象.攻击力,0.5*我方对象.攻击力);
                                    var rnd2 = 我方对象.攻击力 - rnd1;
                                    var time1 = game.rnd.between(400,700);
                                    var time2 = 1200 - time1;
                                    var 伤害数值漂浮字1 = game.add.text(敌方对象.坐标.x - 150,game.world.centerY / 2,'-'+rnd1,{fill:'orange',fontSize:16});
                                    game.add.tween(伤害数值漂浮字1).to( { y: game.world.centerY / 4,alpha : 0 }, time1, "Linear", true).onComplete.addOnce(function(){
                                        伤害数值漂浮字1.destroy();
                                    });
                                    var 伤害数值漂浮字2 = game.add.text(敌方对象.坐标.x - 50,game.world.centerY / 2,'-'+rnd2,{fill:'orange',fontSize:16});
                                    game.add.tween(伤害数值漂浮字2).to( { y: game.world.centerY / 4,alpha : 0 }, time2, "Linear", true).onComplete.addOnce(function(){
                                        伤害数值漂浮字2.destroy();
                                    });
                                }else{
                                    //单次攻击的动画 即只有武学名称
                                    var 武学名称漂浮字 = game.add.text(game.world.centerX,game.world.centerY / 2,我方对象.所有武学[类型][i].名称,{fill:'red',fontSize:16});
                                    game.add.tween(武学名称漂浮字).to( { y: game.world.centerY / 4,alpha : 0 }, 700, "Linear", true).onComplete.addOnce(function(){
                                        武学名称漂浮字.destroy();
                                    });
                                    var 伤害数值漂浮字 = game.add.text(敌方对象.坐标.x - 100,game.world.centerY / 2,'-'+我方对象.攻击力,{fill:'yellow',fontSize:16});
                                    伤害数值漂浮字.anchor.setTo(.5);
                                    game.add.tween(伤害数值漂浮字).to( { y: game.world.centerY / 4,alpha : 0 }, 500, "Linear", true).onComplete.addOnce(function(){
                                        伤害数值漂浮字.destroy();
                                    });
                                }
                                敌方对象.生命 -= 我方对象.攻击力;
                                敌人生命文本框.text = `${敌方对象.生命}/${敌方对象.生命上限}`;
                                敌人血条.width = 敌人血条值 * (敌方对象.生命/敌方对象.生命上限);
                                if (敌方对象.生命<=0) {
                                    var 敌人死亡动画 = 敌人.animations.add('死亡动作',敌方对象.动画.死亡动作);
                                    敌人死亡动画.play(5,false);
                                    敌人死亡动画.onComplete.add(function(){
                                        我方胜利结算();
                                        //胜利音效 001c 失败音效001d
                                    },this);
                                    game.time.events.remove(敌人攻击控制器);
                                    game.time.events.remove(我方攻击控制器);
                                }
                                主角.animations.play('闲置动作',5,true);
                                我方进行攻击 = false;
                                敌方进度条行进 = true;
                            },this);
                            //console.log('进行武学招式攻击');
                        },this);
                    }else{//武学不可用时 武学将被封印
                        var 解封的武学UI = 解封的武学UI组.create(game.width*0.089+i*42.45, game.height *0.88, 'fight_ui');
                        解封的武学UI.frame = 10;
                        解封的武学UI.inputEnabled = true;
                        var 禁止的武学UI = 禁止的武学UI组.create(game.width*0.089+i*42.45, game.height *0.88, 'fight_not');
                        禁止的武学UI.inputEnabled = true;
                        禁止的武学UI.alpha = 0.5;
                    }
                }
            }else{//未检测到武学时 武学将被封印
                解封的武学UI组.children[i].frame = 10;
            }
        }
        var 拳_按钮 = game.add.button(game.width*0.2, game.height *0.81, 'fight_ui', 拳_切换, this, 51, 50, 51);
        var 掌_按钮 = game.add.button(game.width*0.24, game.height *0.81, 'fight_ui', 掌_切换, this, 53, 52, 53);
        var 指_按钮 = game.add.button(game.width*0.28, game.height *0.81, 'fight_ui', 指_切换, this, 55, 54, 55);
        var 剑_按钮 = game.add.button(game.width*0.32, game.height *0.81, 'fight_ui', 剑_切换, this, 7,56, 7);
        var 内_按钮 = game.add.button(game.width*0.36, game.height *0.81, 'fight_ui', 内_切换, this, 9, 8, 9);
        var 封印的武学 = function(){
            
        }
        var 封印的武学UI组 = game.add.group();
        var 解封的武学UI组 = game.add.group();
        var 禁止的武学UI组 = game.add.group();//应该只生成六个图标而不是与解封组一同生成【覆盖覆盖黑加黑】
        for (let i = 0; i < 6; i++) {
            var 封印的武学UI = game.add.button(game.width*0.089+i*42.45, game.height *0.88, 'fight_ui', 封印的武学, this, 10, 10, 10);
            封印的武学UI组.add(封印的武学UI);
        }
        var 逃跑 = function(){
            主角行动速度条.width = 0;
            我方进行攻击 = true;
            //部分剧情战斗是无法逃跑的，这里不做处理……emmm  可以是创建战斗时的传参，也可以是对手身上挂载的属性
            var 逃跑动作 = 主角.animations.add('逃跑动作',我方对象.动画.逃跑动作);
            逃跑动作.play(15,false);
            逃跑动作.onComplete.add(function(){//需要加一个不可逃跑的判定【剧情内不可逃跑，大地图可以】
                if(game.rnd.between(0,29)<游戏数据[0].主角.身法){
                    剧情名称 = 逃跑跳转剧情.剧情名称;
                    场景索引 = 逃跑跳转剧情.场景索引;
                    战斗界面.destroy();
                    game.state.start('game');
                    console.log('逃跑成功');
                }else{
                    主角.animations.play('闲置动作',5,true);
                    console.log('逃跑失败');
                    我方进行攻击 = false;
                }
            },this);
        }
        var 逃跑图标 = game.add.button(game.width*0.026, game.height *0.854, 'fight_ui', 逃跑, this, 81, 80, 81);
        var 信息弹窗 = function(){
            console.log(`弹出角色数据信息窗口`);
            var 人物属性窗口UI,人物属性窗口;
            if(typeof(人物属性窗口UI)=='undefined'){
                人物属性窗口UI = game.add.group();
                人物属性窗口 = game.add.image(0,0,'0043');
                var 姓名 = game.add.text(0,0,游戏数据[0].主角.姓名,{fontSize:12,fill:'white'});
                var 等级 = game.add.text(0,0,游戏数据[0].主角.等级,{fontSize:12,fill:'white'});
                var 门派 = game.add.text(0,0,游戏数据[0].主角.门派,{fontSize:12,fill:'black'});
                var 称号 = game.add.text(0,0,游戏数据[0].主角.称号,{fontSize:12,fill:'black'});
                var 生命 = game.add.text(0,0,游戏数据[0].主角.生命,{fontSize:12,fill:'white'});
                var 内力 = game.add.text(0,0,游戏数据[0].主角.内力,{fontSize:12,fill:'white'});
                var 生命上限 = game.add.text(0,0,游戏数据[0].主角.生命上限,{fontSize:12,fill:'white'});
                var 内力上限 = game.add.text(0,0,游戏数据[0].主角.内力上限,{fontSize:12,fill:'white'});
                var 福缘 = game.add.text(0,0,游戏数据[0].主角.福缘,{fontSize:12,fill:'white'});
                var 悟性 = game.add.text(0,0,游戏数据[0].主角.悟性,{fontSize:12,fill:'white'});
                var 护体 = game.add.text(0,0,游戏数据[0].主角.护体,{fontSize:12,fill:'white'});
                var 拳掌 = game.add.text(0,0,游戏数据[0].主角.拳掌,{fontSize:12,fill:'white'});
                var 暗器 = game.add.text(0,0,游戏数据[0].主角.暗器,{fontSize:12,fill:'white'});
                var 用毒 = game.add.text(0,0,游戏数据[0].主角.用毒,{fontSize:12,fill:'white'});
                var 声望 = game.add.text(0,0,游戏数据[0].主角.声望,{fontSize:12,fill:'white'});
                var 力道 = game.add.text(0,0,游戏数据[0].主角.力道,{fontSize:12,fill:'white'});
                var 身法 = game.add.text(0,0,游戏数据[0].主角.身法,{fontSize:12,fill:'white'});
                var 御剑 = game.add.text(0,0,游戏数据[0].主角.御剑,{fontSize:12,fill:'white'});
                var 医疗 = game.add.text(0,0,游戏数据[0].主角.医疗,{fontSize:12,fill:'white'});
                var 解毒 = game.add.text(0,0,游戏数据[0].主角.解毒,{fontSize:12,fill:'white'});
                var 银两 = game.add.text(0,0,游戏数据[0].主角.银两,{fontSize:12,fill:'white'});
                var x = game.add.text(0,0,'x',{fill:'red',fontSize:21});
                人物属性窗口UI.add(人物属性窗口);
                人物属性窗口UI.add(姓名);
                人物属性窗口UI.add(等级);
                人物属性窗口UI.add(门派);
                人物属性窗口UI.add(称号);
                人物属性窗口UI.add(生命);
                人物属性窗口UI.add(内力);
                人物属性窗口UI.add(生命上限);
                人物属性窗口UI.add(内力上限);
                人物属性窗口UI.add(福缘);
                人物属性窗口UI.add(悟性);
                人物属性窗口UI.add(护体);
                人物属性窗口UI.add(拳掌);
                人物属性窗口UI.add(暗器);
                人物属性窗口UI.add(用毒);
                人物属性窗口UI.add(声望);
                人物属性窗口UI.add(力道);
                人物属性窗口UI.add(身法);
                人物属性窗口UI.add(御剑);
                人物属性窗口UI.add(医疗);
                人物属性窗口UI.add(解毒);
                人物属性窗口UI.add(银两);
                人物属性窗口UI.add(x);
                人物属性窗口.inputEnabled = true;
                人物属性窗口.input.enableDrag(false, false);
                人物属性窗口.update = function(){
                    姓名.x = 人物属性窗口.x + 35;
                    姓名.y = 人物属性窗口.y + 17;
                    等级.x = 人物属性窗口.x + 140;
                    等级.y = 人物属性窗口.y + 15;
                    门派.x = 人物属性窗口.x + 30;
                    门派.y = 人物属性窗口.y + 40;
                    称号.x = 人物属性窗口.x + 90;
                    称号.y = 人物属性窗口.y + 40;
                    生命.x = 人物属性窗口.x + 60;
                    生命.y = 人物属性窗口.y + 72;
                    内力.x = 人物属性窗口.x + 60;
                    内力.y = 人物属性窗口.y + 90;
                    生命上限.x = 人物属性窗口.x + 115;
                    生命上限.y = 人物属性窗口.y + 72;
                    内力上限.x = 人物属性窗口.x + 115;
                    内力上限.y = 人物属性窗口.y + 90;

                    福缘.x = 人物属性窗口.x + 70;
                    福缘.y = 人物属性窗口.y + 115;
                    悟性.x = 人物属性窗口.x + 70;
                    悟性.y = 人物属性窗口.y + 135;
                    护体.x = 人物属性窗口.x + 70;
                    护体.y = 人物属性窗口.y + 155;
                    拳掌.x = 人物属性窗口.x + 70;
                    拳掌.y = 人物属性窗口.y + 175;
                    暗器.x = 人物属性窗口.x + 70;
                    暗器.y = 人物属性窗口.y + 195;
                    用毒.x = 人物属性窗口.x + 70;
                    用毒.y = 人物属性窗口.y + 215;
                    
                    声望.x = 人物属性窗口.x + 145;
                    声望.y = 人物属性窗口.y + 115;
                    力道.x = 人物属性窗口.x + 145;
                    力道.y = 人物属性窗口.y + 135;
                    身法.x = 人物属性窗口.x + 145;
                    身法.y = 人物属性窗口.y + 155;
                    御剑.x = 人物属性窗口.x + 145;
                    御剑.y = 人物属性窗口.y + 175;
                    医疗.x = 人物属性窗口.x + 145;
                    医疗.y = 人物属性窗口.y + 195;
                    解毒.x = 人物属性窗口.x + 145;
                    解毒.y = 人物属性窗口.y + 215;

                    银两.x = 人物属性窗口.x + 70;
                    银两.y = 人物属性窗口.y + 人物属性窗口.height - 25;
                    
                    姓名.text = 游戏数据[0].主角.姓名;
                    等级.text = 游戏数据[0].主角.等级;
                    门派.text = 游戏数据[0].主角.门派;
                    称号.text = 游戏数据[0].主角.称号;
                    生命.text = 游戏数据[0].主角.生命;
                    内力.text = 游戏数据[0].主角.内力;
                    生命上限.text = 游戏数据[0].主角.生命上限;
                    内力上限.text = 游戏数据[0].主角.内力上限;
                    福缘.text = 游戏数据[0].主角.福缘;
                    悟性.text = 游戏数据[0].主角.悟性;
                    护体.text = 游戏数据[0].主角.护体;
                    拳掌.text = 游戏数据[0].主角.拳掌;
                    暗器.text = 游戏数据[0].主角.暗器;
                    用毒.text = 游戏数据[0].主角.用毒;
                    声望.text = 游戏数据[0].主角.声望;
                    力道.text = 游戏数据[0].主角.力道;
                    身法.text = 游戏数据[0].主角.身法;
                    御剑.text = 游戏数据[0].主角.御剑;
                    医疗.text = 游戏数据[0].主角.医疗;
                    解毒.text = 游戏数据[0].主角.解毒;
                    银两.text = 游戏数据[0].主角.银两;

                    x.x = 人物属性窗口.x + 人物属性窗口.width - x.width - 5;
                    x.y = 人物属性窗口.y - 5;
                    x.inputEnabled = true;
                    x.events.onInputDown.add(function(){
                        人物属性窗口UI.alpha = 0;
                        人物属性窗口.inputEnabled = false;
                    },this);
                }
            }else{
                人物属性窗口UI.alpha = 1;
                人物属性窗口.inputEnabled = true;
            }
        }
        var 信息图标 = game.add.button(game.width*0.112, game.height *0.747, 'fight_ui', 信息弹窗, this, 79, 78, 79);
        var 显示药品格子 = false;
        var 药品格子 = game.add.group();
        var 切换内容 = function(){
            console.log(`切换武学与背包战斗可用物品`);
            显示药品格子 = !显示药品格子;//单次点击则打开 双次点击则关闭
            if(显示药品格子){
                if(药品格子.length<1){
                    for (let i = 0; i < 6; i++) {
                        var 格子 = game.add.button(game.width*0.089+i*42.45, game.height *0.88, 'fight_gird');
                        药品格子.add(格子);
                        var 丹药 = game.add.image(game.width*0.089+i*42.45, game.height *0.88, 'item'+item['o_item'][i+16].名称);
                        丹药.名称 = item['o_item'][i+16].名称;
                        丹药.数量 = item['o_item'][i+16].数量;
                        丹药.药物效果 = item['o_item'][i+16].药物效果;
                        药品格子.add(丹药);
                        丹药.inputEnabled = true;
                        丹药.events.onInputDown.add(function(丹药){
                            if(丹药.数量>0){
                                游戏数据[0].主角.丹药[i].数量 = 丹药.数量 -= 1;
                            }else{
                                return false;
                            }
                            if(typeof(丹药.药物效果['加生命%'])!=='undefined'){
                                我方对象.生命 += 我方对象.生命上限 * (丹药.药物效果['加生命%']);
                            }
                            if(typeof(丹药.药物效果['加内力%'])!=='undefined'){
                                我方对象.内力 += 我方对象.内力上限 * (丹药.药物效果['加内力%']);
                            }
                        },this);
                        if(游戏数据[0].主角.丹药[i].数量>0){
                            丹药.数量 = 游戏数据[0].主角.丹药[i].数量;
                            var text = game.add.text(game.width*0.09+i*42.45, game.height *0.88,丹药.数量,{fill:'red',fontSize:12});
                            药品格子.add(text);
                        }
                    }
                }else{
                    药品格子.visible = true;
                }
            }else{
                药品格子.visible = false;
            }
        }
        var 切换图标 = game.add.button(game.width*0.42, game.height *0.805, 'fight_ui', 切换内容, this, 77, 24, 77);
        var 普攻攻击 = function(){
            敌方进度条行进 = false;
            audio = game.add.audio(`mp30001`);
            audios[a_i] = audio;
            a_i++;
            audio.play();
            var 普攻动作 = 主角.animations.add('普攻动作',我方对象.动画.普攻动作);
            普攻动作.play(30,false);
            普攻动作.onComplete.add(function(){						
                敌方对象.生命 -= 我方对象.攻击力;
                敌人生命文本框.text = `${敌方对象.生命}/${敌方对象.生命上限}`;
                敌人血条.width = 敌人血条值 * (敌方对象.生命/敌方对象.生命上限);
                if (敌方对象.生命<=0) {
                    var 敌人死亡动画 = 敌人.animations.add('死亡动作',敌方对象.动画.死亡动作);
                    敌人死亡动画.play(10,false);
                    敌人死亡动画.onComplete.add(function(){
                        我方胜利结算();
                    },this);
                    game.time.events.remove(敌人攻击控制器);
                    game.time.events.remove(我方攻击控制器);
                }

                主角.animations.play('闲置动作',5,true);
                我方进行攻击 = false;
                敌方进度条行进 = true;
            },this);

            //console.log('进行普通攻击');
            主角行动速度条.width = 0;
            我方进行攻击 = true;
        }
        var 普攻图标 = game.add.button(game.width*0.53, game.height *0.885, 'fight_ui', 普攻攻击, this, 23, 22, 23);
        var 主角行动速度条  = game.add.image(0,0,'fight_ui');
        主角行动速度条.frame = 27;
        主角行动速度条.x = 45;
        主角行动速度条.y = 569;
        var 我方行动进度值 = 主角行动速度条.width;
        主角行动可视化数据UI.add(底座);
        主角行动可视化数据UI.add(拳_按钮);
        主角行动可视化数据UI.add(掌_按钮);
        主角行动可视化数据UI.add(指_按钮);
        主角行动可视化数据UI.add(剑_按钮);
        主角行动可视化数据UI.add(内_按钮);
        主角行动可视化数据UI.add(逃跑图标);
        主角行动可视化数据UI.add(信息图标);
        主角行动可视化数据UI.add(切换图标);
        主角行动可视化数据UI.add(普攻图标);
        主角行动可视化数据UI.add(封印的武学UI组);
        主角行动可视化数据UI.add(解封的武学UI组);
        主角行动可视化数据UI.add(禁止的武学UI组);
        主角行动可视化数据UI.add(主角行动速度条);
        战斗界面.add(背景图像);
        战斗界面.add(敌人可视化数据UI);
        战斗界面.add(主角可视化数据UI);
        战斗界面.add(主角行动可视化数据UI);

        
        for(var k in story_[剧情]){
            游戏数据[0][k] = story_[剧情][k];
        }
        
        for(var k in 主角数据){
            游戏数据[0].主角[k] = 主角数据[k];
        }
        
        //console.log(游戏数据);
        
        //战斗模块
        var 敌人,主角;
        var 敌人攻击控制器,我方攻击控制器;
        var 敌方进度条行进 = true;
        var 我方进行攻击 = false;//另类我方进度条行进【控制进度条行进与防止二次点击【攻击时 不可再次点击 攻击时 进度条不可行进】】
        我方对象.攻击力 = 我方对象.力道;//这里直接按力道值 没有分别计算基本剑法与基本拳掌
        var 敌方对象 = story_[剧情].对手;
        for (const key in 敌方对象['强度']) {
            敌方对象[key] *= (Math.floor(我方对象.等级 / 敌方对象['强度'][key])+1);
        }

        if(敌方对象.名称=='武馆馆主'){
            敌方对象.生命上限 = 1000 * 对手功力;
            敌方对象.生命 = 1000 * 对手功力;
            敌方对象.攻击伤害下限 = 200 * 对手功力;
            敌方对象.攻击伤害上限 = 200 * 对手功力;
            敌方对象.奖励经验 = 150 * 对手功力;
        }
        if(敌方对象.名称=='侠客岛_岛主2'){
            敌方对象.生命上限 = 18000 * 对手功力;
            敌方对象.内力上限 = 17500 * 对手功力;
            敌方对象.攻击伤害下限 = 1100 * 对手功力;
            敌方对象.攻击伤害上限 = 1100 * 对手功力;
            敌方对象.绝招伤害下限 = 3200 * 对手功力;
            敌方对象.绝招伤害上限 = 3200 * 对手功力;
            敌方对象.绝招耗内 = 3000 * 对手功力;
            敌方对象.奖励经验 = 5000 * 对手功力;
        }



        
        武学类型切换('拳');

        
        
        /* for(var k in 我方对象){
            console.log(k);
            游戏数据[0]['主角'][k] = story_[剧情].主角[k];
            游戏数据[0]['对手'][k] = story_[剧情].对手[k];
        } */
        
        敌人头像.loadTexture(`head${敌方对象.头像.toString(16).substring(4)}`);
        主角头像.loadTexture(`head${我方对象.头像.toString(16).substring(4)}`);
        /////////////////////////////////////
        敌人 = 战斗界面.create(敌方对象.坐标.x,敌方对象.坐标.y,敌方对象.名称);
        敌人.anchor.setTo(0.5);
        敌人.animations.add('闲置动作',敌方对象.动画.闲置动作);
        敌人.animations.play('闲置动作',5,true);
                            
        主角 = 战斗界面.create(我方对象.坐标.x,我方对象.坐标.y,我方对象.名称);
        主角.anchor.setTo(0.5);
        主角.animations.add('闲置动作',我方对象.动画.闲置动作);
        主角.animations.play('闲置动作',3,true);

        var s = 0;
        敌方对象.生命 = 敌方对象.生命上限// = 100000000;
        敌方对象.内力 = 敌方对象.内力上限// = 100000000;
        我方对象.生命 = 游戏数据[0].主角.生命// = 100000000;
        我方对象.内力 = 游戏数据[0].主角.内力// = 100000000;
        敌人生命文本框.text = `${敌方对象.生命}/${敌方对象.生命上限}`;
        敌人内力文本框.text = `${敌方对象.内力}/${敌方对象.内力上限}`;
        主角生命文本框.text = `${我方对象.生命}/${我方对象.生命上限}`;
        主角内力文本框.text = `${我方对象.内力}/${我方对象.内力上限}`;
        var 敌人行动进度分成100份 = 敌人行动进度值*0.01;
        敌人攻击控制器 = game.time.events.loop(Phaser.Timer.SECOND * 0.1, function(){
            if (敌方进度条行进==false) {
                return false;
            }
            s++;
            s += 敌方对象.身法*0.01;
            敌人行动速度条.width =  敌人行动进度分成100份 * s;
            if (s>=100) {
                var r = game.rnd.between(0,100);
                if (敌方对象.绝招耗内>敌方对象.内力 || r/100 > 敌方对象.绝招使用率) {
                    敌方进度条行进 = false;
                    //普攻
                    var 敌人攻击动作1 = 敌人.animations.add('攻击动作1',敌方对象.动画.普攻动作);
                    敌人攻击动作1.play(10,false);
                    敌人攻击动作1.onComplete.add(function(){
                        敌方对象.攻击力 = game.rnd.between(敌方对象.攻击伤害下限,敌方对象.攻击伤害上限);
                        敌方对象.攻击力 = 敌方对象.攻击力 - 我方对象.护体;
                        if(敌方对象.攻击力<=0){
                            敌方对象.攻击力 = 1;
                        }
                        console.log('敌方发起普攻,普攻伤害:'+敌方对象.攻击力);
                        我方对象.生命 -= 敌方对象.攻击力;
                        if(我方对象.生命<0){
                            我方对象.生命 = 0;
                        }
                        主角生命文本框.text = `${我方对象.生命}/${我方对象.生命上限}`;
                        主角血条.width = 主角血条值 * (我方对象.生命/我方对象.生命上限);
                        if (主角血条.width <=0 ) {
                            game.time.events.remove(敌人攻击控制器);
                            game.time.events.remove(我方攻击控制器);
                            console.log('胜败乃兵家常事.');
                            战斗结算();
                            audio = game.add.audio(`mp3001d`);
                            audios[a_i] = audio;
                            a_i++;
                            audio.play();
                            剧情名称 = 失败时跳转.剧情名称;
                            场景索引 = 失败时跳转.场景索引;
                            战斗界面.destroy();
                            game.state.start('game');

                        }
                        敌人.animations.play('闲置动作',5,true);
                        敌方进度条行进 = true;
                    },this);
                }else{
                    敌方进度条行进 = false;
                    //绝招
                    敌方对象.攻击力 = game.rnd.between(敌方对象.绝招伤害下限,敌方对象.绝招伤害上限);
                    敌方对象.内力 -= 敌方对象.绝招耗内;
                    敌人内力文本框.text = `${敌方对象.内力}/${敌方对象.内力上限}`;
                    敌人蓝条.width = 敌人蓝条值 * (敌方对象.内力/敌方对象.内力上限);
                    console.log('敌方发动绝招:' + 敌方对象.绝招.名称 + '绝招伤害:' + 敌方对象.攻击力);
                    if (敌方对象.绝招.名称=='吐纳心法') {
                        敌方对象.攻击力 = 0;
                        敌方对象.生命 += 1800;
                        if (敌方对象.生命 > 敌方对象.生命上限) {
                            敌方对象.生命 = 敌方对象.生命上限;
                        }
                        敌人血条.width = 敌人血条值 * (敌方对象.生命/敌方对象.生命上限);
                        敌人生命文本框.text = `${敌方对象.生命}/${敌方对象.生命上限}`;
                    }
                    if (敌方对象.绝招.名称=='寒冰真气') {
                        敌方对象.攻击力 = 0;
                        我方对象.身法 -= 15;
                    }
                    if (敌方对象.绝招.名称=='北冥神功') {
                        敌方对象.攻击力 = 0;
                        我方对象.内力 -= 1800;
                        敌方对象.内力 += game.rnd.between(1800,我方对象.内力);
                        if (敌方对象.内力>敌方对象.内力上限) {
                            敌方对象.内力 = 敌方对象.内力上限;
                        }
                        敌人蓝条.width = 敌人蓝条值 * (敌方对象.内力/敌方对象.内力上限);
                        敌人内力文本框.text = `${敌方对象.内力}/${敌方对象.内力上限}`;
                        if (我方对象.内力<0) {
                            我方对象.内力 = 0;
                        }
                        主角内力文本框.text = `${我方对象.内力}/${我方对象.内力上限}`;
                        主角蓝条.width = 主角蓝条值 * (我方对象.内力/我方对象.内力上限);
                    }
                    if (typeof(敌方对象.绝招.名称)!=='undefined') {
                        var 特效对象,武学招式攻击特效;
                        特效对象 = game.add.image(敌方对象.绝招.坐标.x,敌方对象.绝招.坐标.y,敌方对象.绝招.名称);
                        特效对象.scale.setTo(-1,1);
                        武学招式攻击特效 = 特效对象.animations.add('武学招式攻击特效');
                        武学招式攻击特效.play(10,false);
                        武学招式攻击特效.onComplete.add(function(){
                            特效对象.destroy();
                        },this);
                    }
                    var 敌人攻击动作2 = 敌人.animations.add('攻击动作2',敌方对象.动画.绝招动作);
                    敌人攻击动作2.play(10,false);
                    敌人攻击动作2.onComplete.add(function(){
                        敌方对象.攻击力 -=  我方对象.护体*2;
                        if(敌方对象.攻击力<=0){
                            敌方对象.攻击力 = 1;
                        }
                        我方对象.生命 -= 敌方对象.攻击力;
                        if(我方对象.生命<0){
                            我方对象.生命 = 0;
                        }
                        主角生命文本框.text = `${我方对象.生命}/${我方对象.生命上限}`;
                        主角血条.width = 主角血条值 * (我方对象.生命/我方对象.生命上限);
                        if (主角血条.width <=0 ) {
                            game.time.events.remove(敌人攻击控制器);
                            game.time.events.remove(我方攻击控制器);
                            console.log('胜败乃兵家常事.');
                            战斗结算();
                            audio = game.add.audio(`mp3001c`);
                            audios[a_i] = audio;
                            a_i++;
                            audio.play();
                            剧情名称 = 失败时跳转.剧情名称;
                            场景索引 = 失败时跳转.场景索引;
                            战斗界面.destroy();
                            game.state.start('game');

                        }
                        敌人.animations.play('闲置动作',5,true);
                        敌方进度条行进 = true;
                    },this);
                }
                s = 0;
            }
        }, this);
        var t = 0;
        var 我方行动进度分成100份 = 我方行动进度值*0.01;
        //主角蓝条.width = 主角蓝条值 * (我方对象.内力/我方对象.内力上限);
        var 禁止普攻 = game.add.image(0,0,'fight_ui');
        主角行动可视化数据UI.add(禁止普攻);
        禁止普攻.frame = 21;
        禁止普攻.x = 普攻图标.x;
        禁止普攻.y = 普攻图标.y;
        var 禁止逃跑 = game.add.image(0,0,'fight_ui');
        主角行动可视化数据UI.add(禁止逃跑);
        禁止逃跑.frame = 95;
        禁止逃跑.x = 逃跑图标.x;
        禁止逃跑.y = 逃跑图标.y;
        我方攻击控制器 = game.time.events.loop(Phaser.Timer.SECOND * 0.1, function(){//封禁图标 预先创建六个即可 然后在此根据集气与内力判断是否显示【封禁】
            主角行动速度条.width =  我方行动进度分成100份 * t;
            if (我方进行攻击) {
                禁止普攻.inputEnabled = true;//防止快速点击产生连击
                t = 0;
            }
            if (敌方进度条行进==false) {//敌方攻击时 进度条停止
                return false;
            }
            if (t>=50) {//集气3    速度条分成等比100份 则 1/2==50 【6个格子】 绝招集气为计算
                禁止普攻.alpha = 0;
                禁止普攻.inputEnabled = false;
            }else{
                禁止普攻.alpha = 1;
                禁止普攻.inputEnabled = true;
            }
            if (t>=33) {//集气2 【6个格子，集气2为2格==100/6*2】
                禁止逃跑.alpha = 0;
                禁止逃跑.inputEnabled = false;
            }else{
                禁止逃跑.alpha = 1;
                禁止逃跑.inputEnabled = true;
            }
            解封的武学UI组.children.forEach(function(item,i){
                if (t >= (100 / 6 * item.需集气) && 我方对象.内力 >= item.需内力 ) {
                    禁止的武学UI组.children[i].visible = false;
                }else{
                    禁止的武学UI组.children[i].visible = true;
                }
            });
            if (t>=100) {
                t=100;
            }
            t++;
            t += 我方对象.身法*0.01;
        }, this);
        var 我方胜利结算 = function(){
            //console.log(敌方对象.主角胜利感言);
            //console.log('敌人死亡,弹出胜利logo，进入下一个场景【由传入的参数决定】');
            //战斗结算
            战斗结算();

            
            audio = game.add.audio(`mp3001c`);
            audios[a_i] = audio;
            a_i++;
            audio.play();
            
            主角数据.声望 = 游戏数据[0].主角.声望 += 敌方对象.奖励声望;
            主角数据.银两 = 游戏数据[0].主角.银两 += 敌方对象.奖励银两;
            主角数据.经验 = 游戏数据[0].主角.经验 += 敌方对象.奖励经验;
            if (游戏数据[0].主角.经验 >= 游戏数据[0].升级需经验[游戏数据[0].主角.等级]) {
                主角数据.等级 = 游戏数据[0].主角.等级 += 1;
                主角数据.学点 = 游戏数据[0].主角.学点 += 1;
                游戏数据[0].主角.经验 = 主角数据.经验 = 0;
            }
            if (40 < 游戏数据[0].主角.等级){
                主角数据.生命上限 = 游戏数据[0].主角.生命上限 +=300;
            } else if (30 < 游戏数据[0].主角.等级){ 
                主角数据.生命上限 = 游戏数据[0].主角.生命上限 +=200;
            }else if (20 < 游戏数据[0].主角.等级) {
                主角数据.生命上限 = 游戏数据[0].主角.生命上限 +=100;
            }else if (10 < 游戏数据[0].主角.等级){
                主角数据.生命上限 = 游戏数据[0].主角.生命上限 +=50;
            }else if (1 < 游戏数据[0].主角.等级 ){
                主角数据.生命上限 = 游戏数据[0].主角.生命上限 +=20;
            }else {
                游戏数据[0].主角.生命上限 = 主角数据.生命上限 = 游戏数据[0].属性上限.生命上限;
                主角数据.力道 = 游戏数据[0].主角.力道 += game.rnd.between(0,1);
                主角数据.身法 = 游戏数据[0].主角.身法 += game.rnd.between(0,1);
                主角数据.护体 = 游戏数据[0].主角.护体 += game.rnd.between(0,1);
            }
            //console.log(游戏数据[0].主角);
            //场景跳转
            剧情名称 = 胜利时跳转.剧情名称;
            场景索引 = 胜利时跳转.场景索引;
            战斗界面.destroy();
            game.state.start('game');
            console.log(游戏数据[0].主角);
        }
        var 战斗结算 = function(){
            游戏数据[0].生命 = 主角数据.生命 = 我方对象.生命;
            游戏数据[0].内力 = 主角数据.内力 = 我方对象.内力;
        }
    };
}