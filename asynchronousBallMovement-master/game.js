class Game{
constructor(){}
getState(){
    var path=database.ref("gameState")
    path.on("value",function(data){
        gameState=data.val()
    })
}
updateState(state){
    database.ref("/").update({
        gameState:state
    })

}
start(){
    if (gameState===0){
        player=new Player()
        player.getCount()
        Form=new form()
        Form.display()

    }
}
}