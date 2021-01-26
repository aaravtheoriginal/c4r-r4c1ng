class Form{
        constructor(){this.input=createInput("name")
    this.button=createButton("submit")
this.greeting=createElement("h1")
this.reset=createButton("RESET")
}

hide(){
    this.input.hide()
    this .button.hide()
    this.greeting.hide()
}
display(){
var title=createElement("h2")
title.html("Car Racing Game")
title.position(displayWidth/2,0)

this.input.position(displayWidth/2,displayHeight/2-200)
this.button.position(displayWidth/2+30,displayHeight/2)
this.reset.position(displayWidth-100,20)
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("WELCOME " +player.name)
    this.greeting.position(displayWidth/2,displayHeight/2)
})
this.reset.mousePressed(()=>{
    player.updateCount(0)
    game.update(0)
    Player.updateFinish(0)
    db.ref('players').remove()
})
}
}
