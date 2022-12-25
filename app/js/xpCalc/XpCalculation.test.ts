import { totalExpNeededForLevelAfter, levelForXp, getLevelSpecForXp } from './XpCalculation';

describe('totalExpNeededForLevelAfter', () => {
  it('follows the correct formula', () => {
    const lvl1to2 = 75 + 25;
    const lvl2to3 = 75 + 2 * 25;
    const lvl3to4 = 75 + 3 * 25;
    expect(totalExpNeededForLevelAfter(1)).toEqual(lvl1to2);
    expect(totalExpNeededForLevelAfter(2)).toEqual(lvl1to2 + lvl2to3);
    expect(totalExpNeededForLevelAfter(3)).toEqual(lvl1to2 + lvl2to3 + lvl3to4);
  });
  it.skip('... values printed out', () => {
    const arr: number[] = [];
    for (let i = 1; i < 100; i += 1) {
      arr[i] = totalExpNeededForLevelAfter(i);
    }
    // eslint-disable-next-line no-console
    console.log(arr);
  });
});

describe('levelForXp', () => {
  it('gives correct level', () => {
    expect(levelForXp(99)).toEqual(1);
    expect(levelForXp(100)).toEqual(2);
    expect(levelForXp(101)).toEqual(2);
    expect(levelForXp(224)).toEqual(2);
    expect(levelForXp(225)).toEqual(3);
    expect(levelForXp(226)).toEqual(3);
  });
});

describe('getLevelForXp', () => {
  it('gives correct level remaining xp and done xp', () => {
    expect(getLevelSpecForXp(99)).toEqual({
      level: 1,
      xpForNext: 100,
      xpAtLevel: 99
    });
    expect(getLevelSpecForXp(100)).toEqual({
      level: 2,
      xpForNext: 75 + 2 * 25,
      xpAtLevel: 0
    });
    expect(getLevelSpecForXp(101)).toEqual({
      level: 2,
      xpForNext: 75 + 2 * 25,
      xpAtLevel: 1
    });
    expect(getLevelSpecForXp(226)).toEqual({
      level: 3,
      xpForNext: 75 + 3 * 25,
      xpAtLevel: 1
    });
  });
});
