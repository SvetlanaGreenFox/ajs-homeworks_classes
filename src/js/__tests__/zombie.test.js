import Zombie from '../__classes__/zombie';

test('Создание Zombie', () => {
  const character = 'Zombie';
  const type = 'Zombie';

  const expected = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newCharacter = new Zombie(character, type);

  expect(newCharacter).toEqual(expected);
});
