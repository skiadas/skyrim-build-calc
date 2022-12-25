import { PerSkill, mapPerSkill2, SkillType, fromFunction } from '../perk/SkillType';
import { SkillLevel, newSkillLevel, updateSkill } from '../perk/SkillLevel';
import { baseStatsFor, Race, RaceType } from './Race';
import {} from '../xpCalc/XpCalculation';

export interface Character {
  readonly skills: PerSkill<SkillLevel>;
  readonly race: RaceType;
}

export function baseCharacter(race?: RaceType): Character {
  const finalRace = race || Race.ALTMER;

  return newCharacter(finalRace, baseStatsFor(finalRace));
}

export function newCharacter(race: RaceType, skills: PerSkill<number>): Character {
  return {
    race,
    skills: makeSkillsFromLevels(skills, baseStatsFor(race))
  };
}

function makeBaseSkillsFor(race: RaceType): PerSkill<SkillLevel> {
  const baseStats = baseStatsFor(race);
  return fromFunction((perk) => newSkillLevel(baseStats[perk], baseStats[perk]));
}

function makeSkillsFromLevels(
  skillLevels: PerSkill<number>,
  baseStats: PerSkill<number>
): PerSkill<SkillLevel> {
  return fromFunction((perk) => newSkillLevel(skillLevels[perk], baseStats[perk]));
}

export function updateCharacter(
  { race, skills }: Character,
  skillName: SkillType,
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

export function getSkill(character: Character, skillName: SkillType): SkillLevel {
  return character.skills[skillName];
}

export function updateRace(character: Character, race: RaceType): Character {
  const baseSkills = makeBaseSkillsFor(race);
  const newSkills = mapPerSkill2(baseSkills, character.skills, (s1: SkillLevel, s2: SkillLevel) =>
    updateSkill(s1, s2.level)
  );
  return { race, skills: newSkills };
}
