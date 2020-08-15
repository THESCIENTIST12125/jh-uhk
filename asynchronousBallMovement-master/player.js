class Player {
    constructor(){}
getCount(){
    var path=database.ref("playerCount")
    path.on("value",function(data){
        playerCount=data.val()
    })
}
updateCount(state){
    database.ref("/").update({
        playerCount:state
    })
}
updateName(name){
var path="player"+playerCount
database.ref(path).update({
    name:name 
})


}
}