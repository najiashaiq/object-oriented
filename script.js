const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion"],
  };
  adventurer.companion = {
    name: "Leo",
    type: "Cat",
    inventory: ["small hat", "sunglasses"],
  };

  adventurer.roll = function() {
    const result = Math.floor(Math.random() * 20) + 1;
    console.log(`${this.name} rolled a ${result}.`);
  };
  class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll() {
      const result = Math.floor(Math.random() * 20) + 1;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  const robin = new Character("Robin");
robin.inventory.push("sword", "potion");
class Adventurer extends Character {
    constructor(name) {
      super(name);
      this.inventory.push("bedroll", "50 gold coins");
    }
  }
  class AdventurerFactory {
    constructor() {
      this.adventurers = [];
    }
    generate(name) {
      const newAdventurer = new Adventurer(name);
      this.adventurers.push(newAdventurer);
      return newAdventurer;
    }
  }
  const factory = new AdventurerFactory();
  const newAdventurer = factory.generate("Warrior");

  console.log("Adventurer:", adventurer);
console.log("Character:", robin);
console.log("New Adventurer:", newAdventurer);
adventurer.roll();
robin.roll();
newAdventurer.roll();