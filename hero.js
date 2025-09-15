class Hero{
    #health;
    constructor(name, health, attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }
    gethealth(){
        return this.#health;
    }
} 

class Warrior extends Hero{
    
}