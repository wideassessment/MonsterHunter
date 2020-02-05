const Monsters = [
    {name: "", hp: 100, ap: 15, armor:2, monsterText: "The beholder uses Disintigrate, you take ", img: 'img/beholder.svg'},
    {name: "Beholder", hp: 100, ap: 15, armor:2, monsterText: "The beholder uses Disintigrate, you take ", img: 'img/beholder.svg'}
]

class RPG {
    constructor() {
        console.log("const")
        this.initalPlayer =  {name: "Nott the Brave!", hp: 50, ap: 10, armor:0, weapon: 0, playerText: "You stab the monster using your dagger, it takes "}
        this.monster = {
            setHp(newHp) {
                hp = newHp
            },
            name: "Beholder", hp: 100, ap: 15, armor:2, monsterText: "The beholder uses Disintigrate, you take ", img: 'img/beholder.svg'
        }

        this.player = {
            setHp(newHp) {
                hp = newHp
            },
            name: "Nott the Brave!", hp: 100, ap: 10, armor:10, weapon: 0, playerText: "You stab the monster using your dagger, it takes ", img: 'img/nottthebrave.svg'
        } 
    }
    get playerName(){
       
        return this.player.name
    }
    /**
     * @param {(arg0: number) => void} skade
     */
    get playerHp(){
        return this.player.hp
    }
    get monterName(){
        return this.monster.name
    }
    get monterHp(){
        return this.monster.hp
    }
    set setMonsterHp(skade){
        this.monster.hp = this.monster.hp - skade
    }
    initialize(){
        console.log("inside here")
        document.getElementById("monsterImg").src = this.monster.img
        document.getElementById("playerImg").src = this.player.img
        document.getElementById("playerName").innerHTML = this.player.name
        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("monsterName").innerHTML = this.monster.name
        document.getElementById("monsterHp").innerHTML = this.monster.hp
        
        document.getElementById("playerText").innerHTML = ""
        document.getElementById("monsterText").innerHTML = ""
    }
    attack() {
        this.player.hp = this.player.hp - (this.monster.ap - this.player.armor)
        this.monster.hp = this.monster.hp - (this.player.ap - this.monster.armor)
        
        if(this.player.hp <= 0) alert("Game over!")
        if(this.monster.hp <= 0)  {
            alert("Congratulations! You killed the dangerous monster.")

        } 

        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("monsterHp").innerHTML = this.monster.hp
        document.getElementById("playerText").innerHTML = this.player.playerText + (this.player.ap - this.monster.armor) + " damage."
        document.getElementById("monsterText").innerHTML = this.monster.monsterText + (this.monster.ap - this.player.armor) + " damage."
    }

}