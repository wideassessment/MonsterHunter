

class RPG {
    constructor() {
        this.monster = {
            setHp(newHp) {
                hp = newHp
            },
            name: "Beholder", hp: 100, ap: 15, armor:2
        }

        this.player = {
            setHp(newHp) {
                hp = newHp
            },
            name: "Sir KnightMan!", hp: 50, ap: 10, armor:4
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
        document.getElementById("playerName").innerHTML = this.player.name
        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("monsterName").innerHTML = this.monster.name
        document.getElementById("monsterHp").innerHTML = this.monster.hp
    }
    attack() {
        this.player.hp = this.player.hp - this.monster.ap
        this.monster.hp = this.monster.hp - this.player.ap


        document.getElementById("playerHp").innerHTML = this.player.hp
        document.getElementById("monsterHp").innerHTML = this.monster.hp
    }

}