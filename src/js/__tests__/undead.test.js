import Undead from '../__classes__/undead';

test('Создание Undead', () => {
  const character = 'Undead';
  const type = 'Undead';

  const expected = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newCharacter = new Undead(character, type);

  expect(newCharacter).toEqual(expected);
});
