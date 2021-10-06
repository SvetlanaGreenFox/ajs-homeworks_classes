export default class Character {
  constructor(name, type, attack, defence) {
    const players = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Придумайте другое имя!');
    }
    if (!players.includes(type)) {
      throw new Error('Такого игрока не существует!');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  };

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего!');
    }
    this.level = this.level + 1;
    this.attack = (this.attack / 100) * 20;
    this.defence = (this.defence / 100) * 20;
    this.health = 100;
  };
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  };
}