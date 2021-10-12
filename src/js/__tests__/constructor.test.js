import Character from '../__classes__/character';

describe('Error ejection', () => {
  test('correct name', () => {
    expect(() => new Character('a')).toThrowError('Придумайте другое имя');
  });

  test('correct type', () => {
    expect(() => new Character('Zombi')).toThrowError('Такого игрока не существует!');
  });
});
