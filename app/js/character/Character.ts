import { AllPerks, PerkList } from '../perk/PerkList';
import { Skill, newSkill } from '../perk/Skill';
import { baseStatsFor, Race } from './Race';
import {} from './XpCalculation';

export interface Character {
    skills: AllPerks<Skill>;
    race: Race;
}

export function baseCharacter(race?: Race): Character {
    const finalRace = race || Race.ALTMER;

    return newCharacter(finalRace, baseStatsFor(finalRace));
}

export function newCharacter(race: Race, skills: AllPerks<number>): Character {
    return {
        race,
        skills: makeSkillsFromLevels(skills, baseStatsFor(race))
    };
}

function makeSkillsFromLevels(
    skillLevels: AllPerks<number>,
    baseStats: AllPerks<number>
): AllPerks<Skill> {
    const result: Partial<AllPerks<Skill>> = {};
    for (const key of Object.keys(PerkList)) {
        const perk = key as PerkList;
        result[perk] = newSkill(perk, skillLevels[perk], baseStats[perk]);
    }
    return result as AllPerks<Skill>;
}
