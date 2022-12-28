import { Skill, SkillType } from './SkillType';

export const OPerkID = {
  VOK_ALT_MASTERY: 1,
  VOK_ALT_DUAL_CAST: 2,
  VOK_ALT_MAGE_ARMOR: 3,
  VOK_ALT_MAGIC_RESIST: 4,
  VOK_ALT_BATTLEMAGE: 5,
  VOK_ALT_SORCERER_ROBES: 6,
  VOK_ALT_STABILITY: 7,
  VOK_ALT_OCATO_PREP: 8,
  VOK_ALT_TELEKINETIC_FORCE: 9,
  VOK_ALT_ALTER_SELF: 10,
  VOK_ALT_INITIATE: 11,
  VOK_ALT_ARCANE_GUIDANCE: 12,
  VOK_ALT_ATRONACH: 13,
  VOK_ALT_FORCE_WILL: 14,
  VOK_ALT_HETHOTH_ESCAPE: 15,
  VOK_ALT_TELEKINETIC_PRODIGY: 16,
  VOK_ALT_RITUALIST: 17,
  VOK_ALC_MASTERY: 18,
  VOK_ALC_PHYSICIAN: 19,
  VOK_ALC_BENEFACTOR: 20,
  VOK_ALC_POISONER: 21,
  VOK_ALC_CONCENTRATED_POISON: 22,
  VOK_ALC_EXPERIMENTER: 23,
  VOK_ALC_STIMULANTS: 24,
  VOK_ALC_GREEN_THUMB: 25,
  VOK_ALC_SLOW_METABOLISM: 26,
  VOK_ALC_ALKAHEST: 27,
  VOK_ALC_PURITY: 28,
  VOK_ALC_ADRENALINE: 29,
  VOK_ALC_PLAGUE_DOCTOR: 30,
  VOK_ALC_GOURMET: 31,
  VOK_ALC_DOUBLE_TOIL_TROUBLE: 32,
  VOK_ARC_MASTERY: 33,
  VOK_ARC_FAR_SHOT: 34,
  VOK_ARC_POINT_BLANK_SHOT: 35,
  VOK_ARC_EAGLE_EYE: 36,
  VOK_ARC_IMPALING_SHOT: 37,
  VOK_ARC_BREACHING_SHOT: 38,
  VOK_ARC_STEADY_AIM: 39,
  VOK_ARC_HUNTER_DISCIPLINE: 40,
  VOK_ARC_POWER_SHOT: 41,
  VOK_ARC_LION_ARROW: 42,
  VOK_ARC_RANGER: 43,
  VOK_ARC_QUICK_SHOT: 44,
  VOK_ARC_ARROW_KNEE: 45,
  VOK_ARC_GORE: 46,
  VOK_ARC_HUNTER_FOCUS: 47,
  VOK_ARC_PINNING_SHOT: 48
} as const;

export type PerkID = typeof OPerkID[keyof typeof OPerkID];

export interface Perk {
  id: PerkID;
  skill: SkillType;
  required_levels: number[];
  max_rank: number;
  name: string;
  descriptions: string[];
  dependencies: PerkID[];
}

export interface RankedPerk extends Perk {
  rank: number;
}

export const PerkDetails: {
  [key in PerkID]: Perk;
} = {
  [OPerkID.VOK_ALT_MASTERY]: {
    id: OPerkID.VOK_ALT_MASTERY,
    skill: Skill.ALTERATION,
    required_levels: [0],
    max_rank: 1,
    name: 'Alteration Mastery',
    descriptions: ['Cast Alteration spells for 0.5% less Magicka per level of Alteration.'],
    dependencies: []
  },
  [OPerkID.VOK_ALT_DUAL_CAST]: {
    id: OPerkID.VOK_ALT_DUAL_CAST,
    skill: Skill.ALTERATION,
    required_levels: [20],
    max_rank: 1,
    name: 'Alteration Dual Casting',
    descriptions: [
      'Dual casting an Alteration spell overcharges its effects, increasing power and casting cost.'
    ],
    dependencies: [OPerkID.VOK_ALT_MASTERY]
  },
  [OPerkID.VOK_ALT_MAGE_ARMOR]: {
    id: OPerkID.VOK_ALT_MAGE_ARMOR,
    skill: Skill.ALTERATION,
    required_levels: [20, 50, 80],
    max_rank: 3,
    name: 'Mage Armor',
    descriptions: [
      'Protection spells like Stoneflesh are 100% stronger if not wearing armor.',
      'Protection spells like Stoneflesh are 150% stronger if not wearing armor.',
      'Protection spells like Stoneflesh are 200% stronger if not wearing armor.'
    ],
    dependencies: [OPerkID.VOK_ALT_MASTERY]
  },
  [OPerkID.VOK_ALT_MAGIC_RESIST]: {
    id: OPerkID.VOK_ALT_MAGIC_RESIST,
    skill: Skill.ALTERATION,
    required_levels: [20, 50, 80],
    max_rank: 3,
    name: 'Mage Resistance',
    descriptions: [
      'Increases Magic Resistance by 10%.',
      'Increases Magic Resistance by 20%.',
      'Increases Magic Resistance by 30%.'
    ],
    dependencies: [OPerkID.VOK_ALT_MASTERY]
  },
  [OPerkID.VOK_ALT_BATTLEMAGE]: {
    id: OPerkID.VOK_ALT_BATTLEMAGE,
    skill: Skill.ALTERATION,
    required_levels: [30, 70],
    max_rank: 2,
    name: 'Battlemage',
    descriptions: [
      'Your weapon attacks improve your spells cast on the target by 15% for 3 seconds.',
      'Your weapon attacks improve your spells cast on the target by 30% for 3 seconds.'
    ],
    dependencies: [OPerkID.VOK_ALT_MAGIC_RESIST]
  },
  [OPerkID.VOK_ALT_SORCERER_ROBES]: {
    id: OPerkID.VOK_ALT_SORCERER_ROBES,
    skill: Skill.ALTERATION,
    required_levels: [40],
    max_rank: 1,
    name: "Sorcerer's Robes",
    descriptions: ['Spells from any school are 25% more effective if not wearing armor.'],
    dependencies: [OPerkID.VOK_ALT_MAGE_ARMOR]
  },
  [OPerkID.VOK_ALT_STABILITY]: {
    id: OPerkID.VOK_ALT_STABILITY,
    skill: Skill.ALTERATION,
    required_levels: [40],
    max_rank: 1,
    name: 'Stability',
    descriptions: ['Alteration spells and effects last 25% longer.'],
    dependencies: [OPerkID.VOK_ALT_MAGE_ARMOR]
  },
  [OPerkID.VOK_ALT_OCATO_PREP]: {
    id: OPerkID.VOK_ALT_OCATO_PREP,
    skill: Skill.ALTERATION,
    required_levels: [50],
    max_rank: 1,
    name: "Ocato's Preparation",
    descriptions: [
      'When entering combat, automatically activates the most effective magical armor spell you know.'
    ],
    dependencies: [OPerkID.VOK_ALT_MAGE_ARMOR]
  },
  [OPerkID.VOK_ALT_TELEKINETIC_FORCE]: {
    id: OPerkID.VOK_ALT_TELEKINETIC_FORCE,
    skill: Skill.ALTERATION,
    required_levels: [50],
    max_rank: 2,
    name: 'Telekinetic Force',
    descriptions: [
      'Objects thrown with Telekinesis deal an extra 250 points of damage.',
      'Objects thrown with Telekinesis deal an extra 500 points of damage.'
    ],
    dependencies: [OPerkID.VOK_ALT_MASTERY]
  },
  [OPerkID.VOK_ALT_ALTER_SELF]: {
    id: OPerkID.VOK_ALT_ALTER_SELF,
    skill: Skill.ALTERATION,
    required_levels: [60, 80],
    max_rank: 2,
    name: 'Alter Self',
    descriptions: [
      'Choose an attribute to raise by 25 points.',
      'Choose an attribute to raise by 25 points, and two resistances to raise by 25%.'
    ],
    dependencies: [OPerkID.VOK_ALT_MAGIC_RESIST]
  },
  [OPerkID.VOK_ALT_INITIATE]: {
    id: OPerkID.VOK_ALT_INITIATE,
    skill: Skill.ALTERATION,
    required_levels: [60],
    max_rank: 1,
    name: 'Initiate',
    descriptions: ['Novice spells of any school cost no Magicka to cast.'],
    dependencies: [OPerkID.VOK_ALT_STABILITY]
  },
  [OPerkID.VOK_ALT_ARCANE_GUIDANCE]: {
    id: OPerkID.VOK_ALT_ARCANE_GUIDANCE,
    skill: Skill.ALTERATION,
    required_levels: [70],
    max_rank: 1,
    name: 'Arcane Guidance',
    descriptions: ['Detection spells reveal targets from much farther away.'],
    dependencies: [OPerkID.VOK_ALT_ALTER_SELF]
  },
  [OPerkID.VOK_ALT_ATRONACH]: {
    id: OPerkID.VOK_ALT_ATRONACH,
    skill: Skill.ALTERATION,
    required_levels: [80],
    max_rank: 1,
    name: 'Atronach',
    descriptions: ['30% chance to absorb incoming spells, replenishing your Magicka.'],
    dependencies: [OPerkID.VOK_ALT_ALTER_SELF]
  },
  [OPerkID.VOK_ALT_FORCE_WILL]: {
    id: OPerkID.VOK_ALT_FORCE_WILL,
    skill: Skill.ALTERATION,
    required_levels: [80],
    max_rank: 1,
    name: 'Force of Will',
    descriptions: ['Take 20% less attack damage while dual casting a spell if not wearing armor.'],
    dependencies: [OPerkID.VOK_ALT_SORCERER_ROBES]
  },
  [OPerkID.VOK_ALT_HETHOTH_ESCAPE]: {
    id: OPerkID.VOK_ALT_HETHOTH_ESCAPE,
    skill: Skill.ALTERATION,
    required_levels: [90],
    max_rank: 1,
    name: "Hethoth's Escape",
    descriptions: [
      'Once every 10 minutes, paralyzes a melee attacker that is about to deal lethal damage to you.'
    ],
    dependencies: [OPerkID.VOK_ALT_ARCANE_GUIDANCE]
  },
  [OPerkID.VOK_ALT_TELEKINETIC_PRODIGY]: {
    id: OPerkID.VOK_ALT_TELEKINETIC_PRODIGY,
    skill: Skill.ALTERATION,
    required_levels: [90],
    max_rank: 1,
    name: 'Telekinetic Prodigy',
    descriptions: ['Dual cast Telekinesis to grab opponents.'],
    dependencies: [OPerkID.VOK_ALT_TELEKINETIC_FORCE]
  },
  [OPerkID.VOK_ALT_RITUALIST]: {
    id: OPerkID.VOK_ALT_RITUALIST,
    skill: Skill.ALTERATION,
    required_levels: [100],
    max_rank: 1,
    name: 'Ritualist',
    descriptions: ['Two-handed spells can be cast while moving, at 25% reduced strength.'],
    dependencies: [OPerkID.VOK_ALT_STABILITY]
  },
  [OPerkID.VOK_ALC_MASTERY]: {
    id: OPerkID.VOK_ALC_MASTERY,
    skill: Skill.ALCHEMY,
    required_levels: [0],
    max_rank: 1,
    name: 'Alchemy Mastery',
    descriptions: ['Potions and poisons you make are 1% stronger per level of Alchemy.'],
    dependencies: []
  },
  [OPerkID.VOK_ALC_PHYSICIAN]: {
    id: OPerkID.VOK_ALC_PHYSICIAN,
    skill: Skill.ALCHEMY,
    required_levels: [20],
    max_rank: 1,
    name: 'Physician',
    descriptions: ['Potions you make that restore Health, Magicka or Stamina are 25% stronger.'],
    dependencies: [OPerkID.VOK_ALC_MASTERY]
  },
  [OPerkID.VOK_ALC_BENEFACTOR]: {
    id: OPerkID.VOK_ALC_BENEFACTOR,
    skill: Skill.ALCHEMY,
    required_levels: [30],
    max_rank: 1,
    name: 'Benefactor',
    descriptions: ['Beneficial potions you make are 25% stronger.'],
    dependencies: [OPerkID.VOK_ALC_MASTERY]
  },
  [OPerkID.VOK_ALC_POISONER]: {
    id: OPerkID.VOK_ALC_POISONER,
    skill: Skill.ALCHEMY,
    required_levels: [30],
    max_rank: 1,
    name: 'Poisoner',
    descriptions: ['Poisons you make are 25% stronger.'],
    dependencies: [OPerkID.VOK_ALC_MASTERY]
  },
  [OPerkID.VOK_ALC_CONCENTRATED_POISON]: {
    id: OPerkID.VOK_ALC_CONCENTRATED_POISON,
    skill: Skill.ALCHEMY,
    required_levels: [40, 60, 80],
    max_rank: 3,
    name: 'Concentrated Poison',
    descriptions: [
      'Poisons applied to weapons last for 2 additional hits.',
      'Poisons applied to weapons last for 4 additional hits.',
      'Poisons applied to weapons last for 6 additional hits.'
    ],
    dependencies: [OPerkID.VOK_ALC_POISONER]
  },
  [OPerkID.VOK_ALC_EXPERIMENTER]: {
    id: OPerkID.VOK_ALC_EXPERIMENTER,
    skill: Skill.ALCHEMY,
    required_levels: [50],
    max_rank: 1,
    name: 'Experimenter',
    descriptions: ['Eating an ingredient reveals hidden effects.'],
    dependencies: [OPerkID.VOK_ALC_BENEFACTOR]
  },
  [OPerkID.VOK_ALC_STIMULANTS]: {
    id: OPerkID.VOK_ALC_STIMULANTS,
    skill: Skill.ALCHEMY,
    required_levels: [50],
    max_rank: 1,
    name: 'Stimulants',
    descriptions: [
      'Regenerate an extra 2% of your total Magicka and Stamina per second ' +
        'under the effects of a beneficial potion or food.'
    ],
    dependencies: [OPerkID.VOK_ALC_BENEFACTOR]
  },
  [OPerkID.VOK_ALC_GREEN_THUMB]: {
    id: OPerkID.VOK_ALC_GREEN_THUMB,
    skill: Skill.ALCHEMY,
    required_levels: [60],
    max_rank: 1,
    name: 'Green Thumb',
    descriptions: ['Twice as many ingredients are gathered from plants.'],
    dependencies: [OPerkID.VOK_ALC_EXPERIMENTER]
  },
  [OPerkID.VOK_ALC_SLOW_METABOLISM]: {
    id: OPerkID.VOK_ALC_SLOW_METABOLISM,
    skill: Skill.ALCHEMY,
    required_levels: [60, 80],
    max_rank: 2,
    name: 'Slow Metabolism',
    descriptions: [
      'All potions and food with beneficial effects last twice as long.',
      'All potions and food with beneficial effects last three times as long.'
    ],
    dependencies: [OPerkID.VOK_ALC_BENEFACTOR]
  },
  [OPerkID.VOK_ALC_ALKAHEST]: {
    id: OPerkID.VOK_ALC_ALKAHEST,
    skill: Skill.ALCHEMY,
    required_levels: [70],
    max_rank: 1,
    name: 'Alkahest',
    descriptions: ['Ignore 50% armor when attacking a poisoned target.'],
    dependencies: [OPerkID.VOK_ALC_CONCENTRATED_POISON]
  },
  [OPerkID.VOK_ALC_PURITY]: {
    id: OPerkID.VOK_ALC_PURITY,
    skill: Skill.ALCHEMY,
    required_levels: [70],
    max_rank: 1,
    name: 'Purity',
    descriptions: [
      'All negative effects are removed from created potions, ' +
        'and all positive effects are removed from created poisons.'
    ],
    dependencies: [OPerkID.VOK_ALC_GREEN_THUMB, OPerkID.VOK_ALC_ALKAHEST]
  },
  [OPerkID.VOK_ALC_ADRENALINE]: {
    id: OPerkID.VOK_ALC_ADRENALINE,
    skill: Skill.ALCHEMY,
    required_levels: [80],
    max_rank: 1,
    name: 'Adrenaline',
    descriptions: ['Move 10% faster under the effects of a beneficial potion or food.'],
    dependencies: [OPerkID.VOK_ALC_STIMULANTS]
  },
  [OPerkID.VOK_ALC_PLAGUE_DOCTOR]: {
    id: OPerkID.VOK_ALC_PLAGUE_DOCTOR,
    skill: Skill.ALCHEMY,
    required_levels: [80],
    max_rank: 1,
    name: 'Plague Doctor',
    descriptions: ['Nearby opponents get 25% weakness to poison and disease.'],
    dependencies: [OPerkID.VOK_ALC_ALKAHEST]
  },
  [OPerkID.VOK_ALC_GOURMET]: {
    id: OPerkID.VOK_ALC_GOURMET,
    skill: Skill.ALCHEMY,
    required_levels: [90],
    max_rank: 1,
    name: 'Gourmet',
    descriptions: [
      'Vendors of rare alchemical ingredients may sell Jarrin Root, used to make deadly poisons, for a high price.'
    ],
    dependencies: [OPerkID.VOK_ALC_GOURMET]
  },
  [OPerkID.VOK_ALC_DOUBLE_TOIL_TROUBLE]: {
    id: OPerkID.VOK_ALC_DOUBLE_TOIL_TROUBLE,
    skill: Skill.ALCHEMY,
    required_levels: [100],
    max_rank: 1,
    name: 'Double Toil and Trouble',
    descriptions: ['Twice as many potions are created.'],
    dependencies: [OPerkID.VOK_ALC_GREEN_THUMB]
  },
  [OPerkID.VOK_ARC_MASTERY]: {
    id: OPerkID.VOK_ARC_MASTERY,
    skill: Skill.ARCHERY,
    required_levels: [0],
    max_rank: 1,
    name: 'Archery Mastery',
    descriptions: [
      'Ranged weapons do 1% more damage and 5% more critical damage per level of Archery.'
    ],
    dependencies: []
  },
  [OPerkID.VOK_ARC_FAR_SHOT]: {
    id: OPerkID.VOK_ARC_FAR_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [20, 40],
    max_rank: 2,
    name: 'Far Shot',
    descriptions: [
      'Ranged weapons do up to 20% more damage to targets beyond 60 feet, based on distance.',
      'Ranged weapons do up to 40% more damage to targets beyond 60 feet, based on distance.'
    ],
    dependencies: [OPerkID.VOK_ARC_MASTERY]
  },
  [OPerkID.VOK_ARC_POINT_BLANK_SHOT]: {
    id: OPerkID.VOK_ARC_POINT_BLANK_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [20, 40],
    max_rank: 2,
    name: 'Point Blank Shot',
    descriptions: [
      'Ranged weapons do up to 20% more damage to targets within 20 feet, based on proximity.',
      'Ranged weapons do up to 40% more damage to targets within 20 feet, based on proximity.'
    ],
    dependencies: [OPerkID.VOK_ARC_MASTERY]
  },
  [OPerkID.VOK_ARC_EAGLE_EYE]: {
    id: OPerkID.VOK_ARC_EAGLE_EYE,
    skill: Skill.ARCHERY,
    required_levels: [30],
    max_rank: 1,
    name: 'Eagle Eye',
    descriptions: ['Pressing Block while aiming will zoom in your view.'],
    dependencies: [OPerkID.VOK_ARC_MASTERY]
  },
  [OPerkID.VOK_ARC_IMPALING_SHOT]: {
    id: OPerkID.VOK_ARC_IMPALING_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [40],
    max_rank: 1,
    name: 'Impaling Shot',
    descriptions: [
      'Ranged weapons wound the living for 15 seconds, causing 10 points of bleed damage per second while running.'
    ],
    dependencies: [OPerkID.VOK_ARC_FAR_SHOT]
  },
  [OPerkID.VOK_ARC_BREACHING_SHOT]: {
    id: OPerkID.VOK_ARC_BREACHING_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [40],
    max_rank: 1,
    name: 'Breaching Shot',
    descriptions: [
      "Ranged weapons knock the shield out of an opponent's hands if they are blocking."
    ],
    dependencies: [OPerkID.VOK_ARC_POINT_BLANK_SHOT]
  },
  [OPerkID.VOK_ARC_STEADY_AIM]: {
    id: OPerkID.VOK_ARC_STEADY_AIM,
    skill: Skill.ARCHERY,
    required_levels: [40, 60],
    max_rank: 2,
    name: 'Steady Aim',
    descriptions: [
      'Pressing Block while aiming will zoom in your view and slow time by 25%.',
      'Pressing Block while aiming will zoom in your view and slow time by 50%.'
    ],
    dependencies: [OPerkID.VOK_ARC_EAGLE_EYE]
  },
  [OPerkID.VOK_ARC_HUNTER_DISCIPLINE]: {
    id: OPerkID.VOK_ARC_HUNTER_DISCIPLINE,
    skill: Skill.ARCHERY,
    required_levels: [50],
    max_rank: 1,
    name: "Hunter's Discipline",
    descriptions: ['Recover twice as many arrows and bolts from dead bodies.'],
    dependencies: [OPerkID.VOK_ARC_EAGLE_EYE]
  },
  [OPerkID.VOK_ARC_POWER_SHOT]: {
    id: OPerkID.VOK_ARC_POWER_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [50],
    max_rank: 1,
    name: 'Power Shot',
    descriptions: ['Ranged weapons have 25% chance to stagger most targets.'],
    dependencies: [OPerkID.VOK_ARC_IMPALING_SHOT, OPerkID.VOK_ARC_BREACHING_SHOT]
  },
  [OPerkID.VOK_ARC_LION_ARROW]: {
    id: OPerkID.VOK_ARC_LION_ARROW,
    skill: Skill.ARCHERY,
    required_levels: [60, 80],
    max_rank: 2,
    name: "Lion's Arrow",
    descriptions: [
      'Dual cast a projectile spell out of combat to imprint it. ' +
        'Fully drawn bow shots trigger a copy of the spell at 25/50% power.'
    ],
    dependencies: [OPerkID.VOK_ARC_STEADY_AIM]
  },
  [OPerkID.VOK_ARC_RANGER]: {
    id: OPerkID.VOK_ARC_RANGER,
    skill: Skill.ARCHERY,
    required_levels: [60],
    max_rank: 1,
    name: 'Ranger',
    descriptions: ['Can move at full speed with a drawn bow.'],
    dependencies: [OPerkID.VOK_ARC_POWER_SHOT]
  },
  [OPerkID.VOK_ARC_QUICK_SHOT]: {
    id: OPerkID.VOK_ARC_QUICK_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [70],
    max_rank: 1,
    name: 'Quick Shot',
    descriptions: ['Can draw a bow or reload a crossbow 30% faster.'],
    dependencies: [OPerkID.VOK_ARC_RANGER]
  },
  [OPerkID.VOK_ARC_ARROW_KNEE]: {
    id: OPerkID.VOK_ARC_ARROW_KNEE,
    skill: Skill.ARCHERY,
    required_levels: [80],
    max_rank: 1,
    name: 'Arrow to the Knee',
    descriptions: [
      'Ranged weapons knock targets down if they are sprinting, ' +
        'inflicting a critical strike for 2 times critical damage.'
    ],
    dependencies: [OPerkID.VOK_ARC_IMPALING_SHOT]
  },
  [OPerkID.VOK_ARC_GORE]: {
    id: OPerkID.VOK_ARC_GORE,
    skill: Skill.ARCHERY,
    required_levels: [80],
    max_rank: 1,
    name: 'Gore',
    descriptions: [
      'Ranged weapons interrupt power attacks, knocking the attacker back and ' +
        'inflicting a critical strike for 2 times critical damage.'
    ],
    dependencies: [OPerkID.VOK_ARC_BREACHING_SHOT]
  },
  [OPerkID.VOK_ARC_HUNTER_FOCUS]: {
    id: OPerkID.VOK_ARC_HUNTER_FOCUS,
    skill: Skill.ARCHERY,
    required_levels: [90],
    max_rank: 1,
    name: "Hunter's Focus",
    descriptions: [
      "Can't be staggered by power attacks or bashes while drawing a bow or holding a shot."
    ],
    dependencies: [OPerkID.VOK_ARC_HUNTER_DISCIPLINE]
  },
  [OPerkID.VOK_ARC_PINNING_SHOT]: {
    id: OPerkID.VOK_ARC_PINNING_SHOT,
    skill: Skill.ARCHERY,
    required_levels: [100],
    max_rank: 1,
    name: 'Pinning Shot',
    descriptions: ['Ranged weapons slow targets by 15% per hit for 15 seconds.'],
    dependencies: [OPerkID.VOK_ARC_ARROW_KNEE, OPerkID.VOK_ARC_GORE]
  }
};

const ranges = [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]];

export const allPerks: RankedPerk[] = Object.values(PerkDetails).map(breakToRanks).flat();

export function getRankedPerk(rank: number, id: PerkID): RankedPerk {
  return { rank, ...getPerk(id) };
}

function breakToRanks(perk: Perk): RankedPerk[] {
  return ranges[perk.max_rank].map((rank) => ({ rank, ...perk }));
}

export function requiredLevel({ rank, required_levels }: RankedPerk): number {
  return required_levels[rank - 1];
}
function getPerk(id: PerkID): Perk {
  return PerkDetails[id];
}

export function equalRanked(perk1: RankedPerk, perk2: RankedPerk): boolean {
  return perk1.id === perk2.id && perk1.rank === perk2.rank;
}

export function rankedName(perk: RankedPerk): string {
  return `${perk.name} rank ${perk.rank}/${perk.max_rank}`;
}
