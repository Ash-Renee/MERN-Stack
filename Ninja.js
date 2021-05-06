class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log("Hello, may name is " + this.name + ". I am " + this.strength  +" stronk.  I gotta go " + this.speed + " fast and my hp is " + this.health);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log("I got drunk AF and somehow my health has increased by 10 to " + this.health);
        return this;
    }
}
var Ninja1 = new Ninja("Kitana", 666);
// Ninja1.showStats();
// Ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, wisdom);
    }
    senseiStats(){
        Sensei.health = 200;
        Sensei.speed = 10;
        Sensei.strength = 10;
        Sensei.wisdom = 10;
        console.log("Hello, may name is " + Sensei.name + ". I am " + Sensei.strength  +" stronk.  I gotta go " + Sensei.speed +
        " fast and my hp is " + Sensei.health + " and because I am a Sensei, I am smrt because my wisdom is " + Sensei.wisdom);
    }
    speakWisdom(){
        const message = super.drinkSake;
        return this;
        console.log(this.health + "An internship at the White House will be amazing on your resume- Monica Lewinsky");
    }

}
var Sensei1 = new Sensei("Splinter", 200, 10, 3, 10);
Sensei1.sayName();
Sensei1.senseiStats();
// Ninja1.showStats();
// Sensei1.senseiStats();
Sensei1.speakWisdom();
