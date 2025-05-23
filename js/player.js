class Player {
  constructor(name, health, attackPower, special, maxHealth) {
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth || health; //health bar fixed this needed
    this.attackPower = attackPower;
    this.special = special;
  }

  normalAttack(target) {
    const damage = this.attackPower;
    target.health = Math.max(0, target.health - damage);
    return `${this.name} hits ${target.name} for ${damage}!`;
  }

  specialAttack(target) {
    const damage = this.attackPower + 10;
    target.health = Math.max(0, target.health - damage);
    return `${this.name} uses ${this.special} for ${damage}!`;
  }

  heal() {
    const healAmount = Math.floor(Math.random() * 15) + 10;
    this.health = Math.min(this.health + healAmount, this.maxHealth);
    return `${this.name} heals for ${healAmount} HP.`;
  }
}
