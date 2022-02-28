/*
 * @Author: MngYou
 * @Date: 2022-01-26 09:56:02
 * @LastEditTime: 2022-01-26 18:57:19
 * @FilePath: \wx\script\deathState.js
 */
var deathState=function(game){
    this.create=function(){
        var UI = game.add.group();
        var role_death = game.add.image(game.world.centerX,game.world.centerY,'fight_ui');
        role_death.frame = 96;
        role_death.anchor.setTo(.5);
        role_death.scale.setTo(2);
        var sentence_1 = game.add.image(0,0,'fight_ui');
        var sentence_2 = game.add.image(0,0,'fight_ui');
        var sentence_2_2 = game.add.image(0,0,'fight_ui');
        var sentence_3 = game.add.image(0,0,'fight_ui');
        sentence_1.frame = 97;
        sentence_2.frame = 98;
        sentence_2_2.frame = 99;
        sentence_3.frame = 100;
        sentence_1.x = game.width - 50;
        sentence_1.y = 50;
        sentence_2.x = game.width - 100;
        sentence_2.y = 55;
        sentence_2_2.x = game.width - 100;
        sentence_2_2.y = 150;
        sentence_3.x = game.width - 150;
        sentence_3.y = 50;
        var restart = function(){
            剧情名称 = '剧情_序';
            场景索引 = 0;
            game.state.start('menu');
        }
        var reStart = game.add.button(50, 400, 'fight_ui', restart, this, 102, 101, 102);
        role_death.alpha = 0;
        sentence_1.alpha = 0;
        sentence_2.alpha = 0;
        sentence_2_2.alpha = 0;
        sentence_3.alpha = 0;
        reStart.alpha = 0;
        UI.add(role_death);
        UI.add(sentence_1);
        UI.add(sentence_2);
        UI.add(sentence_2_2);
        UI.add(sentence_3);
        UI.add(reStart);
        game.add.tween(role_death).to( { alpha: 1 }, 700, null, true).onComplete.add(function(){
            game.add.tween(sentence_1).to( { alpha: 1 }, 700, null, true).onComplete.add(function(){
                game.add.tween(sentence_2).to( { alpha: 1 }, 700, null, true).onComplete.add(function(){
                    game.add.tween(sentence_2_2).to( { alpha: 1 }, 700, null, true).onComplete.add(function(){
                        game.add.tween(sentence_3).to( { alpha: 1 }, 700, null, true).onComplete.add(function(){
                            game.add.tween(reStart).to( { alpha: 1 }, 700, null, true);
                        },this);
                    },this);
                },this);
            },this);
        },this); 

    };
}