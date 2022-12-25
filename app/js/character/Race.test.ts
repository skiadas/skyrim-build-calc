import { Skill } from '../perk/SkillType';
import { baseStatsFor, Race } from './Race';

describe('Race base stats', () => {
    it('are properly adjusted', () => {
        expect(baseStatsFor(Race.BOSMER)[Skill.ALTERATION]).toEqual(15);
        expect(baseStatsFor(Race.BOSMER)[Skill.ARCHERY]).toEqual(25);
        expect(baseStatsFor(Race.NORD)[Skill.BLOCK]).toEqual(20);
        expect(baseStatsFor(Race.NORD)[Skill.HEAVY_ARMOR]).toEqual(15);
    });
});
