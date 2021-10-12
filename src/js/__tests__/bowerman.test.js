import Bowerman from '../__classes__/bowerman';

test('Создание Bowerman', () => {
  const character = 'Bowerman';
  const type = 'Bowerman';

  const expected = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newCharacter = new Bowerman(character, type);

  expect(newCharacter).toEqual(expected);
});
