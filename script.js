
class RPG {
    constructor() {
        this.monsters = [
            {id: 0, name: "Mimic", hp: 50000, ap: 8, armor:0, text: "The mimic bites you, you take ", img: 'img/mimic.svg'},
            {id: 1, name: "Beholder", hp: 100000, ap: 15, armor:2, text: "The beholder uses Disintigrate, you take ", img: 'img/beholder.svg'}
        ]
        this.initalPlayer =  {name: "Nott the Brave!", hp: 1, ap: 10, armor:0, weapon: 0, text: "You stab the monster using your dagger, it takes "}
        this.currentMonster = 0
        this.monster = {
            setHp(newHp) {
                hp = newHp
            },
            setAll(monster) {
                this.name= monster.name
                this.img= monster.img
                this.hp= monster.hp
                this.ap= monster.ap
                this.armor= monster.armor
                this.text= monster.text
            },
            name: "Beholder", hp: 100, ap: 15, armor:2, text: "The beholder uses Disintigrate, you take ", img: 'img/beholder.svg'
        }

        this.player = {
            setHp(newHp) {
                hp = newHp
            },
            setGold(newGold) {
                gold = newGold
            },
            setAll(player) {
                this.hp= player.hp
                this.ap= player.ap
                this.armor= player.armor
            },
            name: "Nott the Brave!", hp: 100, ap: 10, armor:10, weapon: 0, text: "You stab the monster using your dagger, it takes ", img: 'img/nottthebrave.svg' 
        } 
        
    }
    //Denne funksjonen skal kjøres før spillet starter på nytt. 
    //Dermed må vi ha et objekt som inneholder start data for en spiller. 
    initialize(){
        this.player.setAll(this.initalPlayer)

        //Her legges spillerdataen til html filen. Men på nettsiden mangler HP, armor og ap(attack power)
        document.getElementById("started").hidden = false
        document.getElementById("playerImg").src = this.player.img
        document.getElementById("playerName").innerHTML = this.player.name
        document.getElementById("playerAp").innerHTML = "Attack Power: " + this.player.ap
        document.getElementById("playerText") = ""

        this.selectMonster(0)
        
    }
    //Her skal monsteret bli valgt ved å bruke en id
    selectMonster(id)  {
        this.monster.setAll(this.monsters[id])
        document.getElementById("monsterName").innerHTML = this.monster.name

    }
    attack() {
        const playerDmg = Math.max(0,((Math.floor(Math.random() * this.player.ap+5) + this.player.ap-5) - this.monster.armor))
        const monsterDmg = Math.max(0, ((Math.floor(Math.random() * this.monster.ap+5) + this.monster.ap-5) - this.player.armor))
        this.player.hp = this.player.hp - monsterDmg
        //Ånei! Monstret sin hp endres ikke. Dette er en umulig kamp for helten vår!
        


        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("monsterText").innerHTML = this.player.text + playerDmg + " damage."
        
        //hvis spilleren får under 0 hp kjøres koden under
        if(this.player.hp <= 0){ 

            // hvilke andre ting i html filen burde skjules eller vises her?

            document.getElementById("started").hidden = true

            //Her burde det skrives ut en beskjed til brukeren om at spillet er tapt.
        } 


        // hvis monstret får mindre enn 0 hp kjører koden under. 
        if(this.monster.hp <= 0)  {
            // hvilke andre ting i html filen burde skjules eller vises her?
            document.getElementById("started").hidden = true
            


            //Her burde det skrives ut en beskjed til brukeren om at monsteret er beseiret!.


            // til slutt bør butikken og next knappen vises. 
            
        } 


        //Nedenfor skrives ny hp ut og en beskjed om angrepene gjort i en runde. 
        //Noe informasjon mangler her. 
        
    }


    next () {
        this.currentMonster =  this.currentMonster + 1
        // funksjonen under trenger id'en til det nye monsteret som skal beseires!
        this.selectMonster()
    }
    buySword(){
    }
    buyArmor() {
    }
   

}