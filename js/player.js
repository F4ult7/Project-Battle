// player.js
class Player {
  constructor(name, health, attack, special) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.special = special;
  }

  attack(target) {
    const damage = this.attack; 
    target.health = Math.max(0, target.health - damage);
    return `${this.name} hits ${target.name} for ${damage}!`;
  }

  specialAttack(target) {
    const damage = this.attack + 10; // Special does attack + 10
    target.health = Math.max(0, target.health - damage);
    return `${this.name} uses ${this.special} for ${damage}!`;
  }

  heal() {
    const amount = 10 + Math.floor(Math.random() * 10); // Heal 10-20 HP
    this.health = Math.min(100, this.health + amount); // stop at 100
    return `${this.name} heals ${amount} HP.`;
  }
}