import { PerkList } from '../perk/PerkList';
import { updateCharacter, baseCharacter, updateRace, getSkill } from './Character';
import { Race } from './Race';

describe('Character based on race', () => {
    it('has race-specific skill points', () => {
        const character = baseCharacter(Race.BOSMER);
        expect(character.skills).toHaveProperty(PerkList.ALCHEMY);
        expect(getSkill(character, PerkList.ALCHEMY).startPoints).toEqual(20);
        expect(getSkill(character, PerkList.DESTRUCTION).startPoints).toEqual(15);
    });
    it('defaults to altmer', () => {
        const character = baseCharacter();
        expect(character.race).toEqual(Race.ALTMER);
        expect(character.skills).toHaveProperty(PerkList.ALCHEMY);
        expect(getSkill(character, PerkList.ALCHEMY).startPoints).toEqual(15);
        expect(getSkill(character, PerkList.DESTRUCTION).startPoints).toEqual(20);
    });
});

describe('Update character method', () => {
    it('returns new character with correct value', () => {
        const ch1 = baseCharacter();
        const ch2 = updateCharacter(ch1, PerkList.ALCHEMY, 30);
        expect(ch2).not.toEqual(ch1);
        expect(getSkill(ch2, PerkList.ALCHEMY).points).toEqual(30);
    });
});

describe('Update race method', () => {
    it('respects new race minimums', () => {
        const ch1 = baseCharacter(Race.ALTMER);
        const ch2 = updateRace(ch1, Race.BRETON);
        expect(getSkill(ch2, PerkList.CONJURATION).points).toEqual(25);
        expect(getSkill(ch2, PerkList.SPEECH).points).toEqual(20);
        expect(getSkill(ch2, PerkList.SPEECH).startPoints).toEqual(20);
    });
    it('keeps other values same', () => {
        const ch1 = baseCharacter(Race.ALTMER);
        getSkill(ch1, PerkList.TWO_HANDED).points = 35;
        const ch2 = updateRace(ch1, Race.BRETON);
        expect(getSkill(ch2, PerkList.TWO_HANDED).points).toEqual(35);
    });
});
