import { SkillType } from '../perk/SkillType';
import { SkillLevel, updateSkill } from '../perk/SkillLevel';
import { baseStatsFor, RaceType } from './Race';
import {
  makeSkillsFromLevels,
  mapPerSkill2,
  PerSkill,
  getCurrentLevels,
  CharSkills
} from '../perk/PerSkill';
import { PerkSpec } from '../perk/PerkSpec';

export interface Character extends PerkSpec {
  readonly race: RaceType;
  readonly skills: CharSkills;
}

export function baseCharacter(race: RaceType): Character {
  const finalRace = race;

  return newCharacter(finalRace, baseStatsFor(finalRace));
}

export function newCharacter(race: RaceType, levels: PerSkill<number>): Character {
  return {
    race,
    skills: makeSkillsFromLevels(levels, baseStatsFor(race)),
    perks: []
  };
}

function makeBaseSkillsFor(race: RaceType): CharSkills {
  const baseStats = baseStatsFor(race);
  return makeSkillsFromLevels(baseStats, baseStats);
}

export function updateCharacter(
  { race, skills, perks }: Character,
  skill: SkillType,
  newValue: number
): Character {
  return {
    race,
    skills: {
      ...skills,
      ...{ [skill]: updateSkill(skills[skill], newValue) }
    },
    perks
  };
}

export function getSkill({ skills }: Character, name: SkillType): SkillLevel {
  return skills[name];
}

export function updateRace({ skills, perks }: Character, race: RaceType): Character {
  return {
    race,
    skills: mapPerSkill2(makeBaseSkillsFor(race), getCurrentLevels(skills), updateSkill),
    perks
  };
}
