import * as utilityFunctions from './';

describe('UTILITY FUNCTIONS', () => {

  test('generateId should work', () => {
    const randId = utilityFunctions.generateId();

    expect(randId.length).toBe(14);
  });

  test('dateToStr should work', () => {
    const someDate = new Date('2022-08-08');
    const convertedDate = utilityFunctions.dateToStr(someDate);

    expect(convertedDate).toBe('08 Ağu 2022 03:00');
  });

});