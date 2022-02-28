/*
 * @Author: MngYou
 * @Date: 2022-02-04 19:57:00
 * @LastEditTime: 2022-02-27 21:13:06
 * @FilePath: \wx\script\story\场景.js
 */
var sceneState = function(game){
    this.create=function(){
        var 场景界面UI = game.add.group();
        var 背景图片 = story_[剧情名称][场景索引].背景图片;
        var 交互人物 = story_[剧情名称][场景索引].交互人物;
        var 引导按钮 = story_[剧情名称][场景索引].引导按钮;
        var bg = game.add.image(0,0,'map'+背景图片.toString(16).substring(4));
        bg.width = game.width;
        bg.height = game.height;
        场景界面UI.add(bg);

        主角数据可视化UI(game,场景界面UI);

        var 交互人物_剧情切换 = [];
        for (let i = 0; i < 交互人物.length; i++) {
            交互人物_剧情切换[i] = function(){
                //场景界面UI.destroy();
                剧情名称 = 交互人物[i].跳转剧情.剧情名称;
                场景索引 = 交互人物[i].跳转剧情.场景索引;
                console.log(`剧情名称${剧情名称}，场景索引${场景索引}`);
                game.state.start('game');
            }
            var btn = game.add.button(0, 0, 'head'+交互人物[i].头像.toString(16).substring(4), 交互人物_剧情切换[i], this, 1, 0, 2);
            btn.width = 50;
            btn.height = 75;
            btn.x = game.width - btn.width * 1.7;
            btn.y = btn.height/2 + btn.height * i * 1.2;
            场景界面UI.add(btn);
        }
        var 剧情_切换 = [];
        for (let i = 0; i < 引导按钮.length; i++) {
            剧情_切换[i] = function(){
                //场景界面UI.destroy();
                剧情名称 = 引导按钮[i].跳转剧情.剧情名称;
                场景索引 = 引导按钮[i].跳转剧情.场景索引;
                game.state.start('game');
            }
            var btn = game.add.button(0, 0, 'sys_btn', 剧情_切换[i], this, 1, 0, 2);
            btn.scale.setTo(1.3,1.2);
            btn.x = game.width - btn.width;
            btn.y = 480 + btn.height * i;
            var text = game.add.text(btn.x + btn.width / 2 - 12,btn.y + btn.height /2 - 6,引导按钮[i].名称,{fill:'black',fontSize:12});
            场景界面UI.add(btn);
            场景界面UI.add(text);
        }
    }; 
}
