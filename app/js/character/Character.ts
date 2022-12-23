import { AllPerks, PerkList } from '../perk/PerkList';
import Skill from '../perk/Skill';
import { baseStatsFor, Race } from './Race';
import {} from './XpCalculation';

export default class Character {
    skills: AllPerks<Skill>;

    constructor(race: Race, skills: AllPerks<number>) {
        this.skills = makeSkillsFromLevels(skills, baseStatsFor(race));
    }
}

function makeSkillsFromLevels(
    skillLevels: AllPerks<number>,
    baseStats: AllPerks<number>
): AllPerks<Skill> {
    const result: Partial<AllPerks<Skill>> = {};
    for (const key of Object.keys(PerkList)) {
        const perk = key as PerkList;
        result[perk] = new Skill(perk, skillLevels[perk], baseStats[perk]);
    }
    return result as AllPerks<Skill>;
}
