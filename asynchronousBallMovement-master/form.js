class form {
    constructor(){}
display(){
    var title=createElement("h1")
    title.html("GO CART RACE")
    var input=createInput("name")
    var button=createButton("START")
    title.position(130,0)
    input.position(130,160)
    button.position(250,200)
    var greet=createElement("h2")
    button.mousePressed(function(){
        input.hide()
        button.hide()
        playerCount=playerCount+1
        player.updateCount(playerCount)
        var name=input.value()
        player.updateName(name)
        greeting.html("welcome to go kart race "+ name)
        greeting.position(130,160)
        
    })

}
}