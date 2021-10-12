import Daemon from '../__classes__/daemon';

test('Создание Daemon', () => {
  const character = 'Daemon';
  const type = 'Daemon';

  const expected = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newCharacter = new Daemon(character, type);

  expected(newCharacter).toEqual(expected);
});
