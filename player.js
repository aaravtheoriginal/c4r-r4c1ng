class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
        this.rank=null

    }
    getCount(){
        db.ref('playerCount').on('value',function(data){
            playerCount=data.val()
            

        })

    }
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })


    }
    update(){
        var playerIndex="players/player"+this.index 
        db.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })

    }
    static getPlayerInfo(){
        db.ref("players").on("value",function(data){

            allPlayers=data.val()
        })
    }
    readFinish(){
        db.ref('Finish').on
        ("value",(data)=>{this.rank=data.val()})

    }

    static updateFinish(rank){
    db.ref("/").update({
    Finish:rank

    })
}
}