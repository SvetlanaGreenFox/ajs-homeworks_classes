import Swordsman from '../__classes__/swordsman';

test('Создание Swordsman', () => {
  const character = 'Swordsman';
  const type = 'Swordsman';

  const expected = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newCharacter = new Swordsman(character, type);

  expected(newCharacter).toEqual(expected);
});
