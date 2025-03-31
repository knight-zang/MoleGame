import { _decorator, Component, EventKeyboard,Sprite ,Input, input,Animation ,instantiate, Node, Prefab,log, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
export const BLOCK_SIZE = 40;

@ccclass('MonsterController')
export class MonsterController extends Component {

    @property({type:Node})
    private monsterNode = null;

    @property(Animation)
    bodyAnim:Animation = null;

    @property
    step:Number = 20;

    private timeCounter: number = 0;
    private interval: number = 1; // 4秒间隔


    sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

    
    // 获取一个有范围的随机数
    start() {
        this.bodyAnim.play('snake_down');
    }

  

    update(deltaTime: number) {
        //通过计时器，降低函数调用频率
        this.timeCounter += deltaTime;
        if (this.timeCounter >= this.interval) {
            this.timeCounter = 0;
            this.moveRandomDic();
        }
    }

    getRandomInt(min: number =1 , max: number = 10): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
    // 获取一个随机方向
    moveRandomDic() {
        let pos = this.monsterNode.position;
        var dicNum = this.getRandomInt(1,4).toString();
        var stepCount:number = this.getRandomInt(3,100); 
        var step = 1; 
        if(dicNum == '1' ){
            while (stepCount >= 1) { 
                pos.x -= step;
                this.monsterNode.setPosition(pos);
                this.bodyAnim.play('snake_left');
                stepCount--; 
            }
        }
        if(dicNum == '2' ){
            while (stepCount >= 1) { 
                pos.x += step;
                this.monsterNode.setPosition(pos);
                this.bodyAnim.play('snake_right');
                stepCount--; 
            }
        }
        if(dicNum == '3' ){
            while (stepCount >= 1) { 
                pos.y -= step;
                this.monsterNode.setPosition(pos);
                this.bodyAnim.play('snake_down');
                stepCount--; 
            }
        }
        if(dicNum == '4' ){
            while (stepCount >= 1) { 
                pos.y += step;
                this.monsterNode.setPosition(pos);
                this.bodyAnim.play('snake_up');
                stepCount--; 
            }
        }
        
        
    }

}



