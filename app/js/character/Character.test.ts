import { Skill } from '../perk/SkillType';
import { updateCharacter, baseCharacter, updateRace, getSkill } from './Character';
import { Race } from './Race';

describe('Character based on race', () => {
    it('has race-specific skill level', () => {
        const character = baseCharacter(Race.BOSMER);
        expect(character.skills).toHaveProperty(Skill.ALCHEMY);
        expect(getSkill(character, Skill.ALCHEMY).startLevel).toEqual(20);
        expect(getSkill(character, Skill.DESTRUCTION).startLevel).toEqual(15);
    });
    it('defaults to altmer', () => {
        const character = baseCharacter();
        expect(character.race).toEqual(Race.ALTMER);
        expect(character.skills).toHaveProperty(Skill.ALCHEMY);
        expect(getSkill(character, Skill.ALCHEMY).startLevel).toEqual(15);
        expect(getSkill(character, Skill.DESTRUCTION).startLevel).toEqual(20);
    });
});

describe('Update character method', () => {
    it('returns new character with correct value', () => {
        const ch1 = baseCharacter();
        const ch2 = updateCharacter(ch1, Skill.ALCHEMY, 30);
        expect(ch2).not.toEqual(ch1);
        expect(getSkill(ch2, Skill.ALCHEMY).level).toEqual(30);
    });
});

describe('Update race method', () => {
    it('respects new race minimums', () => {
        const ch1 = baseCharacter(Race.ALTMER);
        const ch2 = updateRace(ch1, Race.BRETON);
        expect(getSkill(ch2, Skill.CONJURATION).level).toEqual(25);
        expect(getSkill(ch2, Skill.SPEECH).level).toEqual(20);
        expect(getSkill(ch2, Skill.SPEECH).startLevel).toEqual(20);
    });
    it('keeps other values same', () => {
        const ch1 = baseCharacter(Race.ALTMER);
        getSkill(ch1, Skill.TWO_HANDED).level = 35;
        const ch2 = updateRace(ch1, Race.BRETON);
        expect(getSkill(ch2, Skill.TWO_HANDED).level).toEqual(35);
    });
});
