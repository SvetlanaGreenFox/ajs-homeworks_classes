import Magician from '../__classes__/magician';

test('Создание Magician', () => {
  const character = 'Magician';
  const type = 'Magician';

  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newCharacter = new Magician(character, type);

  expect(newCharacter).toEqual(expected);
});
