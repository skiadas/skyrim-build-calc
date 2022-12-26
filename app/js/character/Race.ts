import { fromFunction, PerSkill } from '../perk/PerSkill';
import { Skill, SkillType } from '../perk/SkillType';

export const Race = {
  ALTMER: 'Altmer',
  ARGONIAN: 'Argonian',
  BOSMER: 'Bosmer',
  BRETON: 'Breton',
  DUNMER: 'Dunmer',
  IMPERIAL: 'Imperial',
  KHAJIIT: 'Khajiit',
  NORD: 'Nord',
  ORSIMER: 'Orsimer',
  REDGUARD: 'Redguard'
} as const;

export type RaceType = typeof Race[keyof typeof Race];
export const raceList = Object.values(Race) as RaceType[];

type PerkChange = {
  [key in SkillType]?: number;
};

const defaultStats: PerSkill<number> = fromFunction(() => 15);

const perkChangesPerRace: {
  [key in RaceType]: PerkChange;
} = {
  [Race.ALTMER]: {
    [Skill.ILLUSION]: 25,
    [Skill.CONJURATION]: 20,
    [Skill.DESTRUCTION]: 20,
    [Skill.RESTORATION]: 20,
    [Skill.ALTERATION]: 20,
    [Skill.ENCHANTING]: 20
  },
  [Race.ARGONIAN]: {
    [Skill.LIGHT_ARMOR]: 20,
    [Skill.SNEAK]: 20,
    [Skill.LOCKPICKING]: 25,
    [Skill.PICKPOCKET]: 20,
    [Skill.RESTORATION]: 20,
    [Skill.ALTERATION]: 20
  },
  [Race.BOSMER]: {
    [Skill.ARCHERY]: 25,
    [Skill.LIGHT_ARMOR]: 20,
    [Skill.SNEAK]: 20,
    [Skill.LOCKPICKING]: 20,
    [Skill.PICKPOCKET]: 20,
    [Skill.ALCHEMY]: 20
  },
  [Race.BRETON]: {
    [Skill.SPEECH]: 20,
    [Skill.ALCHEMY]: 20,
    [Skill.ILLUSION]: 20,
    [Skill.CONJURATION]: 25,
    [Skill.RESTORATION]: 20,
    [Skill.ALTERATION]: 20
  },
  [Race.DUNMER]: {
    [Skill.LIGHT_ARMOR]: 20,
    [Skill.SNEAK]: 20,
    [Skill.ALCHEMY]: 20,
    [Skill.ILLUSION]: 20,
    [Skill.DESTRUCTION]: 25,
    [Skill.ALTERATION]: 20
  },
  [Race.IMPERIAL]: {
    [Skill.HEAVY_ARMOR]: 20,
    [Skill.BLOCK]: 20,
    [Skill.ONE_HANDED]: 20,
    [Skill.DESTRUCTION]: 20,
    [Skill.RESTORATION]: 25,
    [Skill.ENCHANTING]: 20
  },
  [Race.KHAJIIT]: {
    [Skill.ONE_HANDED]: 20,
    [Skill.ARCHERY]: 20,
    [Skill.SNEAK]: 25,
    [Skill.LOCKPICKING]: 20,
    [Skill.PICKPOCKET]: 20,
    [Skill.ALCHEMY]: 20
  },
  [Race.NORD]: {
    [Skill.SMITHING]: 20,
    [Skill.BLOCK]: 20,
    [Skill.TWO_HANDED]: 25,
    [Skill.ONE_HANDED]: 20,
    [Skill.LIGHT_ARMOR]: 20,
    [Skill.SPEECH]: 20
  },
  [Race.ORSIMER]: {
    [Skill.SMITHING]: 20,
    [Skill.HEAVY_ARMOR]: 25,
    [Skill.BLOCK]: 20,
    [Skill.TWO_HANDED]: 20,
    [Skill.ONE_HANDED]: 20,
    [Skill.ENCHANTING]: 20
  },
  [Race.REDGUARD]: {
    [Skill.SMITHING]: 20,
    [Skill.BLOCK]: 20,
    [Skill.ONE_HANDED]: 25,
    [Skill.ARCHERY]: 20,
    [Skill.DESTRUCTION]: 20,
    [Skill.ALTERATION]: 20
  }
};

export function baseStatsFor(race: RaceType): PerSkill<number> {
  return {
    ...defaultStats,
    ...perkChangesPerRace[race]
  };
}
