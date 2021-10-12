import Zombie from '../__classes__/zombie';

test('Создание Zombie', () => {
  const character = 'Zombie';
  const type = 'Zombie';

  const expected = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newCharacter = new Zombie(character, type);

  expected(newCharacter).toEqual(expected);
});
