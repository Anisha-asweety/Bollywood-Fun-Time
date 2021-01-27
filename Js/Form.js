class Form {
    constructor(){
        this.title=createElement('h2')
        this.textbox=createInput("Name")
        this.button=createButton("PLAY")
        this.greeting=createElement('h4')
        this.reset=createButton("Reset")
        this.teamA=createButton("TeamA")
        this.teamB=createButton("TeamB")
        this.flag=0
    }
    hide(){
     this.button.hide()
     this.textbox.hide()
     this.greeting.hide()
    }
    display(){
       
        this.title.html("Bollywood Fun Time")
        this.title.position(displayWidth/2-10,0)
        
        this.textbox.position(displayWidth/2-40,displayHeight/2-40)
       
        this.button.position(displayWidth/2,displayHeight/2)
        this.reset.position(displayWidth-40,20)
        
        this.teamA.hide();
        this.teamB.hide();
        
        this.button.mousePressed(()=>{
            this.textbox.hide();
            this.button.hide();
            player.playerName=this.textbox.value();

            this.greeting.html("Hello "+player.playerName+" ,please choose your team ")
            this.greeting.position(displayWidth/2-40,displayHeight/2-60)

            this.teamA.show();
            this.teamB.show();
            this.teamA.position(displayWidth/2,displayHeight/2)
            this.teamB.position(displayWidth/2,displayHeight/2+40)
            this.flag=0

           //playerCount=playerCount+1
            /*player.index=playerCount
            player.updateCount(playerCount)
            player.update()
        })
       this.reset.mousePressed(()=>{
           game.update(0);
           player.updateCount(0);*/
       })
       this.teamA.mousePressed(()=>{
           if(this.flag===0){
           console.log(playerCountTeamA)
           playerCountTeamA=playerCountTeamA+1
           player.updatePlayerCountA(playerCountTeamA);
           console.log(playerCountTeamA)
           player.playerAIndex=playerCountTeamA
           console.log(player.playerAIndex)
           player.updateTeamA();
           this.flag=1
           }else{
               alert("you have already choosen Team")
           }
       })

       this.teamB.mousePressed(()=>{
           if(this.flag===0){
           console.log(playerCountTeamB)
           playerCountTeamB=playerCountTeamB+1
           player.updatePlayerCountB(playerCountTeamB);
           console.log(playerCountTeamB)
           player.playerBIndex=playerCountTeamB
           console.log(player.playerBIndex)
           player.updateTeamB();
           this.flag=1
           }else{
              alert("you have already choosen Team")
           }
    })

    }
}