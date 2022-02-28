/*
 * @Author: MngYou
 * @Date: 2022-02-27 21:07:04
 * @LastEditTime: 2022-02-27 21:35:15
 * @FilePath: \wx\script\story\主角数据可视化UI.js
 */
var 主角数据可视化UI = function(game,场景容器UI){//城市界面、 场景界面

    var 主角属性窗口UI = game.add.group();
    var 主角属性窗口 = game.add.image(10,5,'0041');
    主角属性窗口.scale.setTo(1);
    主角属性窗口UI.add(主角属性窗口);
    var 主角头像图片 = '';
    if(typeof(story_[剧情名称][场景索引].主角头像)=='undefined'){
        主角头像图片 = '0001';//0x56020001
    }else{
        主角头像图片 = story_[剧情名称][场景索引].主角头像.toString(16).substring(4);
    }
    var 主角头像 = game.add.image(0,0,'head'+主角头像图片);
    //var 主角头像 = game.add.image(0,0,'head'+story_[剧情名称][场景索引].主角头像.toString(16).substring(4));
    主角头像.scale.setTo(-0.5,0.5);
    主角头像.x = -主角头像.width;
    主角头像.y = 43;
    主角头像.anchor.setTo(0.5);
    主角属性窗口UI.add(主角头像);
    var 主角名称 = game.add.text(76,15,游戏数据[0].主角.姓名,{fill:'white',fontSize:12});
    var 主角称号 = game.add.text(130,16.5,游戏数据[0].主角.称号,{fontSize:12});
    var 主角生命 = game.add.text(70,36,'生命',{fontSize:12});
    var 主角内力 = game.add.text(70,48,'内力',{fontSize:12});
    var 主角经验 = game.add.text(70,60,'经验',{fontSize:12});
    var 主角生命条 = game.add.image(75+主角生命.width,38,'0082');
    主角生命条.scale.setTo(1.3,0.5);
    var 主角内力条 = game.add.image(75+主角内力.width,50,'0083');
    主角内力条.scale.setTo(1.3,0.5);
    var 主角经验条 = game.add.image(75+主角经验.width,62,'0084');
    主角经验条.scale.setTo(1.3,0.5);
    主角属性窗口UI.add(主角名称);
    主角属性窗口UI.add(主角称号);
    主角属性窗口UI.add(主角生命);
    主角属性窗口UI.add(主角内力);
    主角属性窗口UI.add(主角经验);
    主角属性窗口UI.add(主角生命条);
    主角属性窗口UI.add(主角内力条);
    主角属性窗口UI.add(主角经验条);
    //当前值/上限值
    var 选项卡_切换 = [];
    var 人物属性窗口UI;
    var 人物属性窗口;
    var 武学招式窗口UI;
    var 武学招式窗口;
    var 背包窗口UI,秘籍窗口UI;
    场景容器UI.add(主角属性窗口UI);
    var 我方对象 = playerData;
    for (let i = 0; i < 6; i++) {
        var 武器加力道 = 0;
        var 防具加护体 = 0;
        选项卡_切换[i] = function(){
            switch (i) {
                case 0:
                    if(typeof(人物属性窗口UI)=='undefined'){
                        人物属性窗口UI = game.add.group();
                        场景容器UI.add(人物属性窗口UI);
                        人物属性窗口 = game.add.image(0,0,'0043');
                        var 姓名 = game.add.text(0,0,游戏数据[0].主角.姓名,{fontSize:12,fill:'white'});
                        var 等级 = game.add.text(0,0,游戏数据[0].主角.等级,{fontSize:12,fill:'white'});
                        var 门派 = game.add.text(0,0,游戏数据[0].主角.门派,{fontSize:12,fill:'black'});
                        var 称号 = game.add.text(0,0,游戏数据[0].主角.称号,{fontSize:12,fill:'black'});
                        var 生命 = game.add.text(0,0,游戏数据[0].主角.生命||100,{fontSize:12,fill:'white'});
                        var 内力 = game.add.text(0,0,游戏数据[0].主角.内力||100,{fontSize:12,fill:'white'});
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
                    break;
                    case 1:
                        if (typeof(武学招式窗口UI)=='undefined') {
                            武学招式窗口UI = game.add.group();
                            场景容器UI.add(武学招式窗口UI);
                            武学招式窗口 = game.add.image(0,0,'0044');
                            武学招式窗口.inputEnabled = true;
                            武学招式窗口.input.enableDrag(false, false);
                            var 解封的武学名称 = [];
                            var 解封的武学名称组 = game.add.group();
                            var 武学类型切换 = function(类型){
                                if (类型=='无') {
                                    return false;
                                }
                                if (我方对象.所有武学[类型].length > 0) {
                                    for (let i = 0; i < 我方对象.所有武学[类型].length; i++) {
                                        if (typeof(解封的武学名称[i])!=='undefined') {
                                            解封的武学名称[i].text = '';
                                        }
                                        if (typeof(解封的武学UI组.children[5])=='undefined') {
                                            var 解封的武学UI = 解封的武学UI组.create(武学招式窗口.x + 10, 武学招式窗口.y + Math.floor(i/1)*40 + 40, 'fight_ui');
                                            解封的武学名称[i] = game.add.text(武学招式窗口.x + 60, 武学招式窗口.y + Math.floor(i/1)*40 + 40,'');
                                            解封的武学名称组.add(解封的武学名称[i]);
                                            if (我方对象.可用武学[类型][i]!==''&&我方对象.可用武学[类型][i].可用) {
                                                解封的武学UI.frame = 我方对象.所有武学[类型][i].图标;
                                                解封的武学名称[i].text = 我方对象.可用武学[类型][i].名称;
                                                kungfu['o_kungfu'].forEach(function(item){
                                                    if(item.名称 == 我方对象.可用武学[类型][i].名称){
                                                        解封的武学名称[i].text = 我方对象.可用武学[类型][i].名称 + ' ' + item.等级 + '级';
                                                    }
                                                });
                                            }else{//武学不可用时 武学将被封印
                                                解封的武学UI.frame = 10;
                                                解封的武学名称[i].text = '';
                                            }
                                        }else{
                                            解封的武学UI组.getChildAt(i).loadTexture('fight_ui');
                                            if (我方对象.可用武学[类型][i]!==''&&我方对象.可用武学[类型][i].可用) {
                                                解封的武学UI组.getChildAt(i).frame = 我方对象.所有武学[类型][i].图标;
                                                解封的武学名称[i].text = 我方对象.可用武学[类型][i].名称;
                                                kungfu['o_kungfu'].forEach(function(item){
                                                    if(item.名称 == 我方对象.可用武学[类型][i].名称){
                                                        解封的武学名称[i].text = 我方对象.可用武学[类型][i].名称 + ' ' + item.等级 + '级';
                                                    }
                                                });
                                            }else{//武学不可用时 武学将被封印
                                                解封的武学UI组.getChildAt(i).frame = 10;
                                                解封的武学名称[i].text = '';
                                            }
                                        }
                                    }
                                }else{//未检测到武学时 武学将被封印
                                    解封的武学UI组.children[i].frame = 10;
                                }
                            }
                            var 武学_切换 = [];
                            var 武学种类 = '';
                            var 按钮组 = game.add.group();
                            for (let i = 0; i < 6; i++) {
                                武学_切换[i] = function(){
                                    switch (i) {
                                        case 0:
                                            武学种类 = '拳';
                                            break;
                                            case 1:
                                                武学种类 = '掌';
                                                break;
                                                case 2:
                                                    武学种类 = '指';
                                                    break;
                                                    case 3:
                                                        武学种类 = '剑';
                                                        break;
                                                        case 4:
                                                            武学种类 = '内';
                                                            break;
                                    
                                        default:
                                            武学招式窗口UI.alpha = 0;
                                            武学招式窗口.inputEnabled = false;
                                            武学种类 = '无';
                                            break;
                                    }
                                    武学类型切换(武学种类);
                                }
                                var 按钮 = game.add.button(i%6*40, 0, 'fight_ui', 武学_切换[i], this, 51, 50, 51);
                                按钮.width = 40;
                                按钮.height = 20;
                                按钮.alpha = 0;
                                按钮组.add(按钮);
                                
                            }
                            var 解封的武学UI组 = game.add.group();
                            武学类型切换('拳');
                            武学招式窗口UI.add(武学招式窗口);
                            武学招式窗口UI.add(解封的武学UI组);
                            武学招式窗口UI.add(解封的武学名称组);
                            武学招式窗口UI.add(按钮组);
                            武学招式窗口.update = function(){
                                for (let i = 0; i < 6; i++) {
                                    按钮组.children[i].x = 武学招式窗口.x + i%6*40;
                                    按钮组.children[i].y = 武学招式窗口.y;
                                    解封的武学UI组.children[i].x = 武学招式窗口.x + 10;
                                    解封的武学UI组.children[i].y = 武学招式窗口.y + Math.floor(i/1)*40 + 40;
                                    解封的武学名称组.children[i].x = 武学招式窗口.x + 60;
                                    解封的武学名称组.children[i].y = 武学招式窗口.y + Math.floor(i/1)*40 + 40;
                                } 
                            }
                        }else{
                            武学招式窗口UI.alpha = 1;
                            武学招式窗口.inputEnabled = true;
                        }
                        break;
                        case 2:
                            console.log('包裹'); 
                            if (typeof(背包窗口UI)=='undefined'){
                                var bags = game.add.group();
                                var _item;
                                var btns = game.add.group();
                                var 切换按钮;
                                var 背包选项卡_切换 = [];
                                背包窗口UI = game.add.group();
                                场景容器UI.add(背包窗口UI);
                                var 装备UI = game.add.group();
                                var 已装备标记UI = game.add.group();
                                var 武器已装备 = false;
                                var 暗器已装备 = false;
                                var 防具已装备 = false;
                                var 卸兵;
                                var 卸甲;
                                var 丹药UI = game.add.group();
                                var 丹药数量UI = game.add.group();
                                var 丹药数量标记;
                                var 事件UI = game.add.group();
                                var 装备按钮文字 = game.add.text(18,5,'装备',{fontSize:12});
                                var 丹药按钮文字 = game.add.text(78,5,'丹药',{fontSize:12});
                                var 事件按钮文字 = game.add.text(138,5,'事件',{fontSize:12});
                                var 背包窗口 = game.add.image(00,00,'0046');

                                var 装备名称UI = game.add.group();
                                var 丹药名称UI = game.add.group();
                                var 事件名称UI = game.add.group();
                                
                                背包窗口.update = function(){
                                    x.x = 背包窗口.x + 背包窗口.width - x.width - 5;
                                    x.y = 背包窗口.y - 5;
                                    卸兵.x = 背包窗口.x + 背包窗口.width - 95;
                                    卸兵.y = 背包窗口.y + 背包窗口.height - 55;
                                    卸甲.x = 背包窗口.x + 背包窗口.width - 45;
                                    卸甲.y = 背包窗口.y + 背包窗口.height - 55;
                                    装备按钮文字.x = 背包窗口.x + 18;
                                    装备按钮文字.y = 背包窗口.y + 5;
                                    丹药按钮文字.x = 背包窗口.x + 78;
                                    丹药按钮文字.y = 背包窗口.y + 5;
                                    事件按钮文字.x = 背包窗口.x + 138;
                                    事件按钮文字.y = 背包窗口.y + 5;
                                    for (let i = 0; i < btns.length; i++) {
                                        btns.children[i].x = 背包窗口.x + i%3*60;
                                        btns.children[i].y = 背包窗口.y;
                                    }
                                    for (let i = 0; i < 装备UI.length; i++) {
                                        装备UI.children[i].x = 背包窗口.x + i%4*50 + 10;
                                        装备UI.children[i].y = 背包窗口.y + Math.floor(i/4)*55 + 55;
                                        装备名称UI.children[i].x = 装备UI.children[i].x;
                                        装备名称UI.children[i].y = 装备UI.children[i].y + 39;
                                    }
                                    for (let i = 0; i < 已装备标记UI.length; i++) {
                                        已装备标记UI.children[i].x = 背包窗口.x + i%4*50 + 10;
                                        已装备标记UI.children[i].y = 背包窗口.y + Math.floor(i/4)*55 + 55 + 10;
                                    }
                                    for (let i = 0; i < 丹药UI.length; i++) {
                                        丹药UI.children[i].x = 背包窗口.x + i%4*50 + 10;
                                        丹药UI.children[i].y = 背包窗口.y + Math.floor(i/4)*55 + 55;
                                        丹药数量UI.children[i].x = 背包窗口.x + i%4*50 + 40;
                                        丹药数量UI.children[i].y = 背包窗口.y + Math.floor(i/4)*55 + 75;
                                        丹药名称UI.children[i].x = 丹药UI.children[i].x;
                                        丹药名称UI.children[i].y = 丹药UI.children[i].y + 39;
                                    }
                                    for (let i = 0; i < 事件UI.length; i++) {
                                        事件UI.children[i].x = 背包窗口.x + i%4*50 + 10;
                                        事件UI.children[i].y = 背包窗口.y + Math.floor(i/4)*55 + 55;
                                        事件名称UI.children[i].x = 事件UI.children[i].x;
                                        事件名称UI.children[i].y = 事件UI.children[i].y + 39;
                                    }

                                }
                                var x = game.add.text(0,0,'x',{fill:'red',fontSize:21});
                                x.x = 背包窗口.x + 背包窗口.width - x.width - 5;
                                x.y = 背包窗口.y - 5;
                                x.alpha = 0;
                                x.inputEnabled = true;
                                x.events.onInputDown.add(function(){
                                    背包窗口UI.alpha = 0;
                                    背包窗口.inputEnabled = false;
                                },this);
                                卸兵 = game.add.text(背包窗口.x + 背包窗口.width - 95,背包窗口.y + 背包窗口.height - 55,'卸兵',{fontSize:12,fill:'blue'});
                                卸甲 = game.add.text(背包窗口.x + 背包窗口.width - 45,背包窗口.y + 背包窗口.height - 55,'卸甲',{fontSize:12,fill:'blue'});
                                卸兵.inputEnabled = true;
                                卸甲.inputEnabled = true;
                                卸兵.events.onInputDown.add(function(){
                                    for (let i = 0; i < 已装备标记UI.length; i++) {
                                        if(已装备标记UI.children[i].type == '武器'){
                                            已装备标记UI.children[i].visible = false;
                                        }
                                    }
                                    游戏数据[0].主角.力道 = 主角数据.力道 -= 武器加力道;
                                    游戏数据[0].主角.已装备武器 = '';
                                    console.log(武器加力道);
                                },this);
                                卸甲.events.onInputDown.add(function(){
                                    for (let i = 0; i < 已装备标记UI.length; i++) {
                                        if(已装备标记UI.children[i].type == '防具'){
                                            已装备标记UI.children[i].visible = false;
                                        }
                                    }
                                    游戏数据[0].主角.护体 = 主角数据.护体 -= 防具加护体;
                                    游戏数据[0].主角.已装备防具 = '';
                                    console.log(防具加护体);
                                },this);

                                背包窗口.inputEnabled = true;
                                背包窗口.input.enableDrag(false, false);
                                for (let i = 0; i < 3; i++) {
                                    背包选项卡_切换[i] = function(){//切换时的显示隐藏UI
                                        switch (i) {
                                            case 0:
                                                装备UI.visible = true;
                                                装备名称UI.visible = true;
                                                已装备标记UI.visible = true;
                                                卸兵.visible = true;
                                                卸甲.visible = true;
                                                丹药UI.visible = false;
                                                丹药名称UI.visible = false;
                                                丹药数量UI.visible = false;
                                                事件UI.visible = false;
                                                事件名称UI.visible = false;
                                                break;
                                                case 1:
                                                    装备UI.visible = false;
                                                    装备名称UI.visible = false;
                                                    已装备标记UI.visible = false;
                                                    卸兵.visible = false;
                                                    卸甲.visible = false;
                                                    丹药UI.visible = true;
                                                    丹药名称UI.visible = true;
                                                    丹药数量UI.visible = true;
                                                    事件UI.visible = false;
                                                    事件名称UI.visible = false;
                                                    break;
                                        
                                            default:
                                                装备UI.visible = false;
                                                装备名称UI.visible = false;
                                                已装备标记UI.visible = false;
                                                卸兵.visible = false;
                                                卸甲.visible = false;
                                                丹药UI.visible = false;
                                                丹药名称UI.visible = false;
                                                丹药数量UI.visible = false;
                                                事件UI.visible = true;
                                                事件名称UI.visible = true;
                                                break;
                                        }
                                        
                                    }
                                    切换按钮 = game.add.button(i%3*60,0, 'sys_btn', 背包选项卡_切换[i], this, 0, 1, 2);
                                    切换按钮.width = 60;
                                    btns.add(切换按钮);
                                    
                                }

                                item['o_item'].forEach(function(item,i){
                                    //if (item.名称!=='空' && item.名称!=='生死符') {
                                        _item = bags.create(i%4*50 + 10,Math.floor(i/4)*55 + 55,'item' + item.名称);
                                        var UI对应名称 = game.add.text(_item.x,_item.y+39,item.名称,{fontSize:9});
                                        if (UI对应名称.text=='空') UI对应名称.visible=false;
                                        var 已装备标记 = game.add.text(_item.x,_item.y + 10,'已装备',{fontSize:12,fill:'red'});
                                        已装备标记.type = item.类型;
                                        已装备标记UI.add(已装备标记);
                                        _item.tag = item.名称;
                                        _item.type = item.类型;
                                        _item.inputEnabled = true;
                                        _item.events.onInputDown.add(function(){
                                            if (item.类型 == '武器') {
                                                for (let i = 0; i < 已装备标记UI.length; i++) {
                                                    if(已装备标记UI.children[i].type == '武器' && 已装备标记UI.children[i].visible==true){
                                                        武器已装备 = true;
                                                        break;
                                                    }
                                                }
                                                if (武器已装备) {
                                                    console.log('武器已装备');
                                                }else{
                                                    console.log('装备加力道:' + item.装备加力道);
                                                    武器加力道 = item.装备加力道;
                                                    游戏数据[0].主角.力道 = 主角数据.力道 += 武器加力道;
                                                    已装备标记UI.children[i].visible = true;
                                                    游戏数据[0].主角.已装备武器 = 主角数据.已装备武器 = item.名称;
                                                }
                                            }
                                            if (item.类型 == '暗器') {
                                                for (let i = 0; i < 已装备标记UI.length; i++) {
                                                    if(已装备标记UI.children[i].type == '暗器' && 已装备标记UI.children[i].visible==true){
                                                        暗器已装备 = true;
                                                        break;
                                                    }
                                                }
                                                if (暗器已装备) {
                                                    console.log('暗器已装备');
                                                }else{
                                                    已装备标记UI.children[i].visible = true;
                                                    游戏数据[0].主角.已装备暗器 = 主角数据.已装备暗器 = item.名称;
                                                }
                                            }
                                            if (item.类型 == '防具') {
                                                for (let i = 0; i < 已装备标记UI.length; i++) {
                                                    if(已装备标记UI.children[i].type == '防具' && 已装备标记UI.children[i].visible==true){
                                                        防具已装备 = true;
                                                        break;
                                                    }
                                                }
                                                if (防具已装备) {
                                                    console.log('防具已装备');
                                                }else{
                                                    console.log('装备加护体:' + item.装备加护体);
                                                    防具加护体 = item.装备加护体;
                                                    游戏数据[0].主角.护体 = 主角数据.护体 += 防具加护体;
                                                    已装备标记UI.children[i].visible = true;
                                                    游戏数据[0].主角.已装备防具 = 主角数据.已装备防具 = item.名称;
                                                }
                                            }
                                            if (item.类型 == '丹药') {
                                                console.log(item.药物效果['加内力%']);
                                                if(typeof(item.药物效果['加生命上限%'])!=='undefined'){
                                                    游戏数据[0].主角.生命上限 = 主角数据.生命上限 *= (1 + item.药物效果['加生命上限%']);
                                                }
                                                if(typeof(item.药物效果['加内力上限%'])!=='undefined'){
                                                    游戏数据[0].主角.内力上限 = 主角数据.内力上限 *= (1 + item.药物效果['加内力上限%']);
                                                }
                                                if(typeof(item.药物效果['加生命%'])!=='undefined'){
                                                    游戏数据[0].主角.生命 = 主角数据.生命 = 游戏数据[0].主角.生命上限 * (item.药物效果['加生命%']);
                                                }
                                                if(typeof(item.药物效果['加内力%'])!=='undefined'){
                                                    游戏数据[0].主角.内力 = 主角数据.内力 = 游戏数据[0].主角.内力上限 * (item.药物效果['加内力%']);
                                                }
                                                if(typeof(item.药物效果['加力道'])!=='undefined'){
                                                    游戏数据[0].主角.力道 = 主角数据.力道 += item.药物效果['加力道'];
                                                }
                                                if(typeof(item.药物效果['加护体'])!=='undefined'){
                                                    游戏数据[0].主角.护体 = 主角数据.护体 += item.药物效果['加护体'];
                                                }
                                                if(typeof(item.药物效果['身法'])!=='undefined'){
                                                    游戏数据[0].主角.身法 = 主角数据.身法 += item.药物效果['加身法'];
                                                }
                                                if(typeof(item.药物效果['御剑'])!=='undefined'){
                                                    游戏数据[0].主角.御剑 = 主角数据.御剑 += item.药物效果['加御剑'];
                                                }
                                                if(typeof(item.药物效果['加拳掌'])!=='undefined'){
                                                    游戏数据[0].主角.拳掌 = 主角数据.拳掌 += item.药物效果['加拳掌'];
                                                };
                                                if(typeof(item.药物效果['加暗器'])!=='undefined'){
                                                    游戏数据[0].主角.暗器 = 主角数据.暗器 += item.药物效果['加暗器'];
                                                }
                                                if(typeof(item.药物效果['加解毒'])!=='undefined'){
                                                    游戏数据[0].主角.解毒 = 主角数据.解毒 += item.药物效果['加解毒'];
                                                }
                                                console.log(游戏数据[0].主角);
                                            }
                                        });
                                        switch (item.类型) {
                                            case '武器'://武器暗器防具 第一序列 0 ~ 4 行
                                                //console.log(`武器：${item.名称}`);
                                                装备UI.add(_item);
                                                装备名称UI.add(UI对应名称);
                                                break;
                                                case '暗器':
                                                    //console.log(`暗器${item.名称}`);
                                                    装备UI.add(_item);
                                                    装备名称UI.add(UI对应名称);
                                                    break;
                                                    case '防具':
                                                        //console.log(`防具${item.名称}`);
                                                        装备UI.add(_item);
                                                        装备名称UI.add(UI对应名称);
                                                        break;
                                                        case '丹药':
                                                            //console.log(`丹药${item.名称}`);
                                                            _item.y -= 4*55;
                                                            丹药UI.add(_item);
                                                            UI对应名称.x = _item.x;
                                                            UI对应名称.y = _item.y + 39;
                                                            丹药名称UI.add(UI对应名称);
                                                            丹药数量标记 = game.add.text(_item.x,_item.y,0,{fontSize:12});
                                                            丹药数量UI.add(丹药数量标记);
                                                            break;
                                                            case '事件':
                                                                //console.log(`事件${item.名称}`);
                                                                _item.y -= 8*55;
                                                                事件UI.add(_item);
                                                                UI对应名称.x = _item.x;
                                                                UI对应名称.y = _item.y + 39;
                                                                事件名称UI.add(UI对应名称);
                                                                break;
                                        
                                            default://秘籍
                                            //console.log(`秘籍${item.名称}`);
                                            //	_item = bags.create(i%4*50 + 10,Math.floor(i/4)*55 - 12 * 55 + 55,'item' + item.名称);//从第十三行开始  另一个窗口内容
                                            //	_item.tag = item.名称;
                                                break;
                                        }
                                    //}
                                    if (item.名称=='空') {
                                        _item.visible = false;
                                    }
                                });
                                //初始化显示隐藏UI
                                已装备标记UI.visible = true;
                                for (let i = 0; i < 已装备标记UI.length; i++) {
                                    已装备标记UI.children[i].visible = false;
                                }
                                装备UI.visible = true;
                                for (let i = 0; i < 装备UI.length; i++) {
                                    装备UI.children[i].visible = false;
                                    装备名称UI.children[i].visible = false;
                                    for (let j = 0; j < 游戏数据[0].主角.装备.length; j++) {
                                        if(游戏数据[0].主角.装备[j] == 装备UI.children[i].tag){
                                            装备UI.children[i].visible = true;
                                            装备名称UI.children[i].visible = true;
                                        }
                                    }
                                    if(游戏数据[0].主角.已装备武器 == 装备UI.children[i].tag){
                                        已装备标记UI.children[i].visible = true;
                                    }
                                    if(游戏数据[0].主角.已装备防具 == 装备UI.children[i].tag){
                                        已装备标记UI.children[i].visible = true;
                                    }
                                    if(游戏数据[0].主角.已装备暗器 == 装备UI.children[i].tag){
                                        已装备标记UI.children[i].visible = true;
                                    }
                                }
                                
                                丹药UI.visible = false;
                                丹药数量UI.visible = false;
                                for (let i = 0; i < 丹药UI.length; i++) {
                                    丹药UI.children[i].visible = false;
                                    丹药名称UI.children[i].visible = false;
                                    丹药数量UI.children[i].visible = false;
                                    for (let j = 0; j < 游戏数据[0].主角.丹药.length; j++) {
                                        if(游戏数据[0].主角.丹药[j].名称 == 丹药UI.children[i].tag&&游戏数据[0].主角.丹药[j].数量>0){
                                            丹药UI.children[i].visible = true;
                                            丹药名称UI.children[i].visible = true;
                                            丹药数量UI.children[i].visible = true;
                                            丹药数量UI.children[i].text = 游戏数据[0].主角.丹药[j].数量;
                                        }
                                    }
                                }
                                事件UI.visible = false;
                                for (let i = 0; i < 事件UI.length; i++) {
                                    事件UI.children[i].visible = false;
                                    事件名称UI.children[i].visible = false;
                                    for (let j = 0; j < 游戏数据[0].主角.事件.length; j++) {
                                        if(游戏数据[0].主角.事件[j].名称 == 事件UI.children[i].tag){
                                            事件UI.children[i].visible = true;
                                            事件名称UI.children[i].visible = true;
                                        }
                                    }
                                }
                                背包窗口UI.add(背包窗口);
                                背包窗口UI.add(bags);
                                背包窗口UI.add(装备UI);
                                背包窗口UI.add(已装备标记UI);
                                背包窗口UI.add(丹药UI);
                                背包窗口UI.add(丹药数量UI);
                                背包窗口UI.add(事件UI);
                                背包窗口UI.add(装备名称UI);
                                背包窗口UI.add(丹药名称UI);
                                背包窗口UI.add(事件名称UI);
                                背包窗口UI.add(btns);
                                背包窗口UI.add(装备按钮文字);
                                背包窗口UI.add(丹药按钮文字);
                                背包窗口UI.add(事件按钮文字);
                                背包窗口UI.add(x);
                                背包窗口UI.add(卸兵);
                                背包窗口UI.add(卸甲);
                            }else{
                                背包窗口UI.alpha = 1;
                            }
                            break;
                            case 3:
                                console.log('秘籍');
                                秘籍窗口UI = game.add.group();
                                场景容器UI.add(秘籍窗口UI);
                                var 秘籍窗口 = game.add.image(00,00,'0045');
                                var 秘籍图谱 = game.add.group();
                                var 秘籍名称 = game.add.group();
                                秘籍窗口.inputEnabled = true;
                                秘籍窗口.input.enableDrag(false, false);
                                var 学习点 = game.add.text(秘籍窗口.x + 秘籍窗口.width/2,秘籍窗口.y + 秘籍窗口.height - 23,游戏数据[0].主角.学点,{fontSize:16,fill:'black'});
                                var x = game.add.text(0,0,'x',{fill:'red',fontSize:36});
                                x.alpha = 0;
                                x.inputEnabled = true;
                                x.events.onInputDown.add(function(){
                                    秘籍窗口UI.destroy();
                                },this);
                                秘籍窗口.update = function(){
                                    for (let i = 0; i < 秘籍图谱.length; i++) {
                                        x.x = 秘籍窗口.x + 秘籍窗口.width - 21;
                                        x.y = 秘籍窗口.y - 12;
                                        学习点.x = 秘籍窗口.x + 秘籍窗口.width/2;
                                        学习点.y = 秘籍窗口.y + 秘籍窗口.height - 23;
                                        秘籍图谱.children[i].x = 秘籍窗口.x + i%4*60 + 15;
                                        秘籍图谱.children[i].y = 秘籍窗口.y + Math.floor(i/4)*65 + 50
                                        秘籍名称.children[i].x = 秘籍图谱.children[i].x;
                                        秘籍名称.children[i].y = 秘籍图谱.children[i].y + 40;
                                    }
                                }
                                item['o_item'].forEach(function(item,i){
                                    if(i>=48){		
                                        mjtp = 秘籍图谱.create(i%4*60 + 15,Math.floor(i/4)*65 - 12 * 65 + 50,'item' + item.名称);
                                        var 名称UI = game.add.text(mjtp.x,mjtp.y+40,item.名称,{fontSize:12});
                                        秘籍名称.add(名称UI);
                                        mjtp.tag = item.名称;
                                        mjtp.type = item.类型;
                                        mjtp.inputEnabled = true;
                                        mjtp.events.onInputDown.add(function(mjtp){
                                            if(item.修炼层数==5||游戏数据[0].主角.学点==0){return false;}
                                            游戏数据[0].主角.学点 = 主角数据.学点 -=1;
                                            学习点.text = 游戏数据[0].主角.学点;
                                            item.修炼层数++;
                                            if(mjtp.tag!=='北冥神功'){
                                                if(typeof(item.修炼效果[item.修炼层数]['加生命上限%'])!=='undefined'){
                                                    主角数据.生命上限 *= (1 + item.修炼效果[item.修炼层数]['加生命上限%']);
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加内力上限%'])!=='undefined'){
                                                    主角数据.内力上限 *= (1 + item.修炼效果[item.修炼层数]['加内力上限%']);
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加生命上限'])!=='undefined'){
                                                    主角数据.生命上限 += item.修炼效果[item.修炼层数]['加生命上限'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加内力上限'])!=='undefined'){
                                                    主角数据.内力上限 += item.修炼效果[item.修炼层数]['加内力上限'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加生命%'])!=='undefined'){
                                                    主角数据.生命 = 游戏数据[0].主角.生命 + 游戏数据[0].主角.生命上限 * (item.修炼效果[item.修炼层数]['加生命%']);
                                                    if(主角数据.生命>游戏数据[0].主角.生命上限){
                                                        主角数据.生命 = 游戏数据[0].主角.生命上限;
                                                    }
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加内力%'])!=='undefined'){
                                                    主角数据.内力 = 游戏数据[0].主角.内力 +游戏数据[0].主角.内力上限 * (item.修炼效果[item.修炼层数]['加内力%']);
                                                    if(主角数据.内力>游戏数据[0].主角.内力上限){
                                                        主角数据.内力 = 游戏数据[0].主角.内力上限;
                                                    }
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加力道'])!=='undefined'){
                                                    主角数据.力道 += item.修炼效果[item.修炼层数]['加力道'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加护体'])!=='undefined'){
                                                    主角数据.护体 += item.修炼效果[item.修炼层数]['加护体'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加身法'])!=='undefined'){
                                                    主角数据.身法 += item.修炼效果[item.修炼层数]['加身法'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加御剑'])!=='undefined'){
                                                    主角数据.御剑 += item.修炼效果[item.修炼层数]['加御剑'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加拳掌'])!=='undefined'){
                                                    主角数据.拳掌 += item.修炼效果[item.修炼层数]['加拳掌'];
                                                };
                                                if(typeof(item.修炼效果[item.修炼层数]['加暗器'])!=='undefined'){
                                                    主角数据.暗器 += item.修炼效果[item.修炼层数]['加暗器'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加解毒'])!=='undefined'){
                                                    主角数据.解毒 += item.修炼效果[item.修炼层数]['加解毒'];
                                                }
                                                if(typeof(item.修炼效果[item.修炼层数]['加医疗'])!=='undefined'){
                                                    主角数据.医疗 += item.修炼效果[item.修炼层数]['加医疗'];
                                                }
                                            }else{
                                                //获得武学招式北冥神功
                                                playerData.可用武学.内[2].可用 = true;
                                                console.log(主角数据);
                                                console.log(游戏数据[0].主角);
                                            }
                                            console.log(item);
                                            for(var k in 主角数据){
                                                游戏数据[0].主角[k] = 主角数据[k];
                                            }
                                        });
                                        
                                        /* for (let i = 0; i < 游戏数据[0].主角.秘籍.length; i++) {
                                            if(mytp.tag!==游戏数据[0].主角.秘籍[i].名称){
                                                mjtp.visible = false;
                                            }else{
                                                mjtp.visible = true;
                                            }
                                        } */
                                        
                                        
                                    }
                                    if (item.名称=='空') {
                                    }
                                });
                                
                                for (let i = 0; i < 秘籍图谱.length; i++) {
                                    秘籍图谱.children[i].visible = false;
                                    秘籍名称.children[i].visible = false;
                                    for (let j = 0; j < 游戏数据[0].主角.秘籍.length; j++) {
                                        if(游戏数据[0].主角.秘籍[j].名称 == 秘籍图谱.children[i].tag){
                                            秘籍图谱.children[i].visible = true;
                                            秘籍名称.children[i].visible = true;
                                        }
                                    }
                                }

                                秘籍窗口UI.add(秘籍窗口);
                                秘籍窗口UI.add(秘籍图谱);
                                秘籍窗口UI.add(秘籍名称);
                                秘籍窗口UI.add(学习点);
                                秘籍窗口UI.add(x);
                                break;
                                case 4:
                                    console.log('存档');
                                    //记录当前剧情名称、场景索引、主角数据以及经历过且不可重复的剧情即可
                                    break;
                                    case 5:
                                        console.log('退出游戏，回到主界面');
                                        var 离开窗口UI = game.add.group();
                                        var 离开弹窗 = game.add.image(game.world.centerX,game.world.centerY,'0037');
                                        离开弹窗.anchor.setTo(0.5);
                                        离开弹窗.inputEnabled = true;
                                        var 离开询问 = game.add.text(game.world.centerX,game.world.centerY - 15,'你真的决定离开江湖吗。');
                                        离开询问.anchor.setTo(.5);
                                        离开窗口UI.add(离开弹窗);
                                        离开窗口UI.add(离开询问);
                                        var 离开与否_切换 = [];
                                        for (let i = 0; i < 2; i++) {
                                            离开与否_切换[i] = function(){
                                                if(i==0){
                                                    game.state.start('menu');
                                                }else{
                                                    离开窗口UI.destroy();
                                                }
                                            }
                                            var btn = game.add.button(game.world.centerX - 90 + i * 160, game.world.centerY + 30, 'sys_btn3', 离开与否_切换[i], this, 1, 0, 2);
                                            btn.anchor.setTo(.5);
                                            var text = game.add.text(btn.x,btn.y,'',{fill:'black',fontSize:16});
                                            text.anchor.setTo(.5);
                                            if(i==0){
                                                text.text = '确定';
                                            }else{
                                                text.text = '取消';
                                            }
                                            离开窗口UI.add(btn);
                                            离开窗口UI.add(text);
                                        }

                                        break;
            
                default:
                    break;
            }
        }
        var tabUI = game.add.button(10 + i % 6 * 202/6, 主角属性窗口.y+主角属性窗口.height, '0042', 选项卡_切换[i], this, i, i, i);
        场景容器UI.add(tabUI);
        
    }
}