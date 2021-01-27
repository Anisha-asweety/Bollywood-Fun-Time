class Player {
    constructor(){
      this.playerAIndex=null
      this.playerBIndex=null
      this.playerName=null
    }
    updateTeamA(){
      var playerIndex="teams/teamA/player"+this.playerAIndex
      console.log(this.playerAIndex)
      console.log(playerIndex)
      database.ref(playerIndex).set({
          name:this.playerName
      })
    }
    updateTeamB(){
      var playerIndex="teams/teamB/player"+this.playerBIndex
      console.log(this.playerBIndex)
      console.log(playerIndex)
      database.ref(playerIndex).set({
          name:this.playerName
      })
    }
    getPlayerCountA(){
      var playerCountAref=database.ref('playerCountA')
      playerCountAref.on("value",(data)=>{
        playerCountTeamA=data.val();
      })
    }
    updatePlayerCountA(count){
      database.ref('/').update({
        playerCountA:count
      });
    }
    getPlayerCountB(){
      var playerCountBref=database.ref('playerCountB')
      playerCountBref.on("value",(data)=>{
        playerCountTeamB=data.val();
      })
    }
    updatePlayerCountB(count){
      database.ref('/').update({
        playerCountB:count
      });
    }
}
