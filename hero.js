class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.Item = [];
    }

    getHealth(){
        return this.#health;
    }

    getName(){
        console.log(this.name);
    }
    getAttack(){
        console.log(this.attack);
    }

    getStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
    }
}
addItem(item){
    this.Item.push(item);
    
class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }

}

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} casts Fireball!`);
    }
}

   class Item{
    constructor(name,bonusAttack);
    this.name = name;
    this.bonusAttack = bonusAttack;
   }
}

const sword = new Item("Sword",5);
const staff = new Item("Staff", 3);

const Thorin  = new Warrior("Thorin",100,10);
Thorin.useAbility();
Thorin.getAttack();

const Gandalf = new Mage("Gandalf",80,8,50);
//Gandalf.useAbility();
Gandalf.getStats();

function performAbility (hero){
    console.log("\n");
    hero.useAbility();
    }

 performAbility(Thorin);
performAbility(Gandalf);