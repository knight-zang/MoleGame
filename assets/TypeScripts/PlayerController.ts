import { _decorator, Component, EventKeyboard,Sprite ,Input, input,Animation ,instantiate, Node, Prefab,log, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
export const BLOCK_SIZE = 40;

@ccclass('PlayerController')
export class PlayerController extends Component {

    @property({type:Node})
    private playerNode = null;

    @property(Animation)
    bodyAnim:Animation = null;

    @property
    step:Number = 20;

    //@property({type:Node})
    //viewNode:Node = null; //视线节点

    // @property({type:Node})
    // mapNode: Node = null; //地图

    private left : Boolean = false;
    private right : Boolean = false;
    private down : Boolean = false;
    private up : Boolean = false;

    public tag = 'play';


    start() {
        this.init();
        input.on(Input.EventType.KEY_DOWN,this.keyDown,this)
        input.on(Input.EventType.KEY_UP,this.keyUp,this)
    }

    init(){
        //if(this.playerNode){
            //this.playerNode.getPosition(Vec3.ZERO);
            this.bodyAnim.play('mole_down');
        //}
    }

    reset(){
        this.node.getPosition(Vec3.ZERO);
    }

    

    // 检查上下左右是不是按下
    keyDown(key: EventKeyboard){
        var dic:string = null;
        if(key.keyCode == 37){
            this.left = true //向左移动
            dic = 'left';
        }
        if(key.keyCode == 38){
            this.up = true //向下移动
            dic = 'up';
        }
        if(key.keyCode == 39){
            this.right = true //向右移动
            dic = 'right';
        }
        if(key.keyCode == 40){
            this.down = true //向上移动
            dic = 'down';
        }
        this.move();
    }

    // 检查上下左右是不是放开
    keyUp(key:EventKeyboard){

        if(key.keyCode == 37){
            this.left = false //向左移动
        }
        if(key.keyCode == 38){
            this.up = false //向下移动
        }
        if(key.keyCode == 39){
            this.right = false //向右移动
        }
        if(key.keyCode == 40){
            this.down = false //向上移动
        }
    }

    move(){
        let pos = this.playerNode.position //获取玩家坐标
        let dic = null; //移动方向

        if( this.left ){
            //向左移动
            pos.x -= this.step;
            dic = 'left';
        }
        if( this.right ){
            //向右移动
            pos.x += this.step;
            dic = 'right';
        }
        if( this.down ){
            //向下移动
            pos.y -= this.step;
            dic = 'down';
        }
        if( this.up ){
            //向上移动
            pos.y += this.step;
            dic = 'up';
        }
        this.bodyAnim.play('mole_'+dic);
        this.playerNode.setPosition(pos)
        
        // let worldRotation = this.node.getWorldRotation;
        // this.mapNode.setPosition(new Vec3(worldRotation.x, worldRotation.y, 0))
    }

    



    update(deltaTime: number) {
        
    }
}


