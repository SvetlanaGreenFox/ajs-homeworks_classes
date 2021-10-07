import Bowerman from '../__classes__/bowerman';

describe('Test LevelUp', () => {
  test('Method works', () => {
    const hero = new Bowerman('Bill');
    hero.health = 50;
    hero.levelUp();
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(2);
    expect(hero.attack).toBe(30);
    expect(hero.defence).toBe(30);
  });

  test('Error ejection', () => {
    const hero = new Bowerman('Bill');
    hero.health = 0;
    expect(() => hero.levelUp()).toThrowError('Нельзя повысить левел умершего!');
  });
});

describe('Test Damage', () => {
  test('Method works', () => {
    const hero = new Bowerman('Bill');
    hero.damage(60);
    expect(hero.health).toBe(55);
  });

  test('health < 0', () => {
    const hero = new Bowerman('Bill');
    hero.health = -10;
    hero.damage(10);
    expect(hero.health).toBe(-10);
  });
});
