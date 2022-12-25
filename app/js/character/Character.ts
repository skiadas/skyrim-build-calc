import { AllPerks, mapEach2, PerkList, simplePerks } from '../perk/PerkList';
import { Skill, newSkill, updateSkill } from '../perk/Skill';
import { baseStatsFor, Race } from './Race';
import {} from '../xpCalc/XpCalculation';

export interface Character {
    readonly skills: AllPerks<Skill>;
    readonly race: Race;
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

function makeBaseSkillsFor(race: Race): AllPerks<Skill> {
    const baseStats = baseStatsFor(race);
    return simplePerks((perk) => newSkill(perk, baseStats[perk], baseStats[perk]));
}

function makeSkillsFromLevels(
    skillLevels: AllPerks<number>,
    baseStats: AllPerks<number>
): AllPerks<Skill> {
    return simplePerks((perk) => newSkill(perk, skillLevels[perk], baseStats[perk]));
}

export function updateCharacter(
    { race, skills }: Character,
    skillName: PerkList,
    newValue: number
): Character {
    return {
        race,
        skills: {
            ...skills,
            ...{ [skillName]: updateSkill(skills[skillName], newValue) }
        }
    };
}

export function getSkill(character: Character, skillName: PerkList): Skill {
    return character.skills[skillName];
}

export function updateRace(character: Character, race: Race): Character {
    const baseSkills = makeBaseSkillsFor(race);
    const newSkills = mapEach2(baseSkills, character.skills, (s1: Skill, s2: Skill) =>
        updateSkill(s1, s2.points)
    );
    return { race, skills: newSkills };
}
