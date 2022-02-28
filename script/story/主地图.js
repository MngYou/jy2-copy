/*
 * @Author: MngYou
 * @Date: 2022-02-01 14:55:43
 * @LastEditTime: 2022-02-16 18:32:54
 * @FilePath: \wx\script\story\主地图.js
 */

var mapState = function(game){
    this.create=function(){
        audio = game.add.audio(`mp3000e`);
        audios[a_i] = audio;
        a_i++;
        audio.play();
        var 主地图UI = game.add.group();
        var 背景图像 = story_[剧情名称][场景索引].背景图片.toString(16).substring(4);
        var 主地图背景 = game.add.image(0,0,'map' + 背景图像);
        主地图背景.width = game.width;
        主地图背景.height = game.height;
        主地图UI.add(主地图背景);
        var small_map = story_[剧情名称][场景索引].引导按钮;
        console.log(small_map);
        var small_map_btn = game.add.group();
        var small_map_title = game.add.group();
        主地图UI.add(small_map_btn);
        主地图UI.add(small_map_title);
        var 场景_切换 = [];
        small_map.forEach((item,i) => {
            场景_切换[i] = function(){
                剧情名称 = item.跳转剧情.剧情名称;
                场景索引 = item.跳转剧情.场景索引;
                console.log(`${剧情名称},${场景索引}`);
                game.state.start('game');
            }
            if(i<23){
                var btn = game.add.button(item.坐标.x, item.坐标.y, item.图标, 场景_切换[i], this, 1, 0, 2);
                btn.anchor.setTo(0.5,0.5);
                var text = game.add.text(item.坐标.x,item.坐标.y,item.名称,{fill:'red',fontSize:16});
                text.anchor.setTo(0.5,0.4);
                small_map_btn.add(btn);
                small_map_title.add(text);
            }else{
                var btn = game.add.image(item.坐标.x, item.坐标.y, item.图标);
                btn.animations.add('loop');
                btn.animations.play('loop',10,true);
                btn.anchor.setTo(0.5,0.5);
                btn.inputEnabled = true;
                btn.events.onInputDown.add(function(){
                    /* console.log(item.名称);//可以根据名称来决定对手||黄野区则随机从三名小怪抽取一位||我就不写了……
                    var 跳转战斗 = item.跳转战斗;
                    if (跳转战斗) {
                        var 跳转战斗名称 = item.跳转战斗名称;
                        胜利时跳转 = item.胜利时跳转;
                        失败时跳转 = item.失败时跳转;
                        剧情 = 跳转战斗名称;
                        game.state.start('fight');
                    } */
                    场景索引 = 0;
                    var rnd = game.rnd.between(1,9);
                    console.log(item.名称);
                    if(item.名称=='红野区'){
                        剧情名称 = '剧情_神仙劫道';
                        if(rnd<9){
                            剧情名称 = '剧情_红野区_恶霸';
                            }
                    }
                    if(item.名称=='黄野区'){
                        剧情名称 = '剧情_神仙劫道';
                        if(rnd<9){
                            剧情名称 = '剧情_黄野区_恶贼';
                            }
                        if(rnd<8){
                            剧情名称 = '剧情_黄野区_毛贼';
                            }
                        if(rnd<5){
                            剧情名称 = '剧情_黄野区_老虎';
                            }
                    }
                    game.state.start('game');
                },this);
                small_map_btn.add(btn);
            }
        });																				//启动场景loader
    }; 
}
