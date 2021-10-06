import Bowerman from "../__classes__/bowerman";
import Daemon from "../__classes__/daemon";
import Magician from "../__classes__/magician";
import Swordsman from "../__classes__/swordsman";
import Undead from "../__classes__/undead";
import Zombie from "../__classes__/zombie";

test('Bowerman', () => {
  const hero = new Bowman('Bowman');
  expect(hero.name).toBe('Bowman');
  expect(hero.type).toBe('Bowman');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});

test('Swordsman', () => {
  const hero = new Swordsman('Swordsman');
  expect(hero.name).toBe('Swordsman');
  expect(hero.type).toBe('Swordsman');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(40);
  expect(hero.defence).toBe(10);
});
test('Magician', () => {
  const hero = new Magician('Magician');
  expect(hero.name).toBe('Magician');
  expect(hero.type).toBe('Magician');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(10);
  expect(hero.defence).toBe(40);
});

test('Undead', () => {
  const hero = new Undead('Undead');
  expect(hero.name).toBe('Undead');
  expect(hero.type).toBe('Undead');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});

test('Zombie', () => {
  const hero = new Zombie('Zombie');
  expect(hero.name).toBe('Zombie');
  expect(hero.type).toBe('Zombie');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(40);
  expect(hero.defence).toBe(10);
});

test('Daemon', () => {
  const hero = new Daemon('Daemon');
  expect(hero.name).toBe('Daemon');
  expect(hero.type).toBe('Daemon');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(10);
  expect(hero.defence).toBe(40);
});

