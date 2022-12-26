import { SkillType } from '../perk/SkillType';
import { grantedXp, SkillLevel, updateSkill } from '../perk/SkillLevel';
import { baseStatsFor, RaceType } from './Race';
import { makeSkillsFromLevels, mapPerSkill2, PerSkill, getCurrentLevels } from '../perk/PerSkill';

export interface Character {
  readonly skills: PerSkill<SkillLevel>;
  readonly race: RaceType;
}

export function baseCharacter(race: RaceType): Character {
  const finalRace = race;

  return newCharacter(finalRace, baseStatsFor(finalRace));
}

export function newCharacter(race: RaceType, levels: PerSkill<number>): Character {
  return {
    race,
    skills: makeSkillsFromLevels(levels, baseStatsFor(race))
  };
}

function makeBaseSkillsFor(race: RaceType): PerSkill<SkillLevel> {
  const baseStats = baseStatsFor(race);
  return makeSkillsFromLevels(baseStats, baseStats);
}

export function updateCharacter(
  { race, skills }: Character,
  skill: SkillType,
  newValue: number
): Character {
  return {
    race,
    skills: {
      ...skills,
      ...{ [skill]: updateSkill(skills[skill], newValue) }
    }
  };
}

export function getSkill({ skills }: Character, name: SkillType): SkillLevel {
  return skills[name];
}

export function updateRace({ skills }: Character, race: RaceType): Character {
  return {
    race,
    skills: mapPerSkill2(makeBaseSkillsFor(race), getCurrentLevels(skills), updateSkill)
  };
}
