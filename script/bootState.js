/*
 * @Author: MngYou
 * @Date: 2022-01-19 10:35:48
 * @LastEditTime: 2022-01-19 10:35:55
 * @FilePath: \wx\script\bootState.js
 */

var bootState = function(game){
		
    this.init=function(){ 		
        /* if(!game.device.desktop){//移动端时 适配竖屏的全屏
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.forcePortrait = true;
            this.scale.refresh();
        }	 */
    }
    this.preload=function(){
        game.load.image('loading','./images/UI/preloader.gif');	//加载图片
        
        Phaser.World.prototype.displayObjectUpdateTransform = function() {
            if(!game.scale.correct) {
            this.x = game.camera.y + game.width;
            this.y = -game.camera.x;
            this.rotation = Phaser.Math.degToRad(Phaser.Math.wrapAngle(90));
            } else {
            this.x = -game.camera.x;
            this.y = -game.camera.y;
            this.rotation = 0;
            }
        
            PIXI.DisplayObject.prototype.updateTransform.call(this);
        } 
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL//EXACT_FIT;//SHOW_ALL;
        if(game.scale.isLandscape) {
            game.scale.correct = true;
            game.scale.setGameSize(WIDTH, HEIGHT);
        } else {
            game.scale.correct = false;
            game.scale.setGameSize(HEIGHT, WIDTH);
        }			
        game.scale.onOrientationChange.add(function() {
            if(game.scale.isLandscape) {
              game.scale.correct = true;
              game.scale.setGameSize(WIDTH, HEIGHT);
            } else {
              game.scale.correct = false;
              game.scale.setGameSize(HEIGHT, WIDTH);
            }
        }, this)								
    };
    this.create=function(){
        game.state.start('loader'); 																				//启动场景loader
    }; 
}