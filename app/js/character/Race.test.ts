import { PerkList } from '../perk/PerkList';
import { baseStatsFor, Race } from './Race';

describe('Race base stats', () => {
  it('are properly adjusted', () => {
    expect(baseStatsFor(Race.BOSMER)[PerkList.ALTERATION]).toEqual(15);
    expect(baseStatsFor(Race.BOSMER)[PerkList.ARCHERY]).toEqual(25);
    expect(baseStatsFor(Race.NORD)[PerkList.BLOCK]).toEqual(20);
    expect(baseStatsFor(Race.NORD)[PerkList.HEAVY_ARMOR]).toEqual(15);
  });
});
