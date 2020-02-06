
class RPG {
    constructor() {
        this.monsters = [
            {id: 0, name: "Mimic", hp: 50, ap: 8, armor:0, text: "The mimic bites you, you take ", img: 'img/mimic.svg'},
            {id: 1, name: "Beholder", hp: 100, ap: 15, armor:2, text: "The beholder uses Disintigrate, you take ", img: 'img/beholder.svg'}
        ]
        this.initalPlayer =  {name: "Nott the Brave!", hp: 100, ap: 10, armor:0, weapon: 0, text: "You stab the monster using your dagger, it takes ", gold: 0}
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
                this.gold= player.gold
            },
            name: "Nott the Brave!", hp: 100, ap: 10, armor:10, weapon: 0, text: "You stab the monster using your dagger, it takes ", img: 'img/nottthebrave.svg', gold: 0 
        } 
        
    }

    initialize(){
        this.player.setAll(this.initalPlayer)
        this.selectMonster(0)
        
    }
    selectMonster(id)  {
        this.monster.setAll(this.monsters[id])
        document.getElementById("started").hidden = false
        document.getElementById("btnAttack").hidden = false
        document.getElementById("btnStart").hidden = true
        document.getElementById("shop").hidden = true
        document.getElementById("btnNext").hidden = true
        document.getElementById("monsterImg").src = this.monster.img
        document.getElementById("playerImg").src = this.player.img
        document.getElementById("playerName").innerHTML = this.player.name
        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("playerAp").innerHTML = "Attack Power: " + this.player.ap
        document.getElementById("playerArmor").innerHTML = "Armor Rating: " + this.player.armor
        document.getElementById("monsterName").innerHTML = this.monster.name
        document.getElementById("monsterHp").innerHTML = this.monster.hp
        document.getElementById("monsterAp").innerHTML = "Attack Power: " + this.monster.ap
        document.getElementById("monsterArmor").innerHTML = "Armor Rating: " + this.monster.armor
        document.getElementById("playerText").innerHTML = ""
        document.getElementById("monsterText").innerHTML = ""
    }
    next () {
        this.currentMonster++
        this.selectMonster(this.currentMonster)
    }
    buySword(){
        this.player.ap +=2
        document.getElementById("sword").hidden = true

    }
    buyArmor() {
        this.player.armor +=2
        document.getElementById("armor").hidden = true
    }
    attack() {
        const playerDmg = Math.max(0,((Math.floor(Math.random() * this.player.ap+5) + this.player.ap-5) - this.monster.armor))
        const monsterDmg = Math.max(0, ((Math.floor(Math.random() * this.monster.ap+5) + this.monster.ap-5) - this.player.armor))
        this.player.hp = this.player.hp - monsterDmg
        this.monster.hp = this.monster.hp - playerDmg
        

        
        if(this.player.hp <= 0){ 
            document.getElementById("started").hidden = true
            document.getElementById("btnAttack").hidden = true
            document.getElementById("btnStart").hidden = false
            document.getElementById("btnNext").hidden = true
            this.player.gold +=5
            alert("Game over!")
        } 

        if(this.monster.hp <= 0)  {
            document.getElementById("started").hidden = true
            document.getElementById("btnAttack").hidden = true
            document.getElementById("shop").hidden = false
            document.getElementById("armor").hidden = false
            document.getElementById("sword").hidden = false
            document.getElementById("btnNext").hidden = false

            alert("Congratulations! You killed the dangerous monster.")

        } 

        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("monsterHp").innerHTML = this.monster.hp
        document.getElementById("playerText").innerHTML = this.player.text + playerDmg + " damage."
        document.getElementById("monsterText").innerHTML = this.monster.text + monsterDmg + " damage."
    }

}