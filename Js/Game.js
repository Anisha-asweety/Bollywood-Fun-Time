class Game {
    constructor(){

    }
    start(){
        if(gameState===0){
            form=new Form();
            player=new Player();
            player.getPlayerCountA();
            player.getPlayerCountB();
            form.display();
            
        }
    }

    play(){

        drawSprites();
    }
}