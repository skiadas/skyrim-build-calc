import { allPerks, RankedPerk, requiredLevel, equalRanked } from './Perk';
import { CharSkills } from './PerSkill';

// A PerkSpec represents the collection of perks that
// a character has, including which ranks.
export interface PerkSpec {
  readonly skills: CharSkills;
  readonly perks: RankedPerk[];
}

export function newSpec(skills: CharSkills, perks: RankedPerk[]): PerkSpec {
  return { skills, perks };
}

export function getAvailable(perkSpec: PerkSpec): RankedPerk[] {
  return allPerks.filter((perk: RankedPerk) => isAvailable(perkSpec, perk));
}

function isAvailable({ skills, perks }: PerkSpec, perk: RankedPerk): boolean {
  if (perks.some((perk2) => equalRanked(perk, perk2))) return false;
  if (skills[perk.skill].level < requiredLevel(perk)) return false;
  if (perk.rank > 1)
    return perks.some((perk2) => perk.id === perk2.id && perk.rank === perk2.rank + 1);
  if (perk.dependencies.length === 0) return true;
  return perk.dependencies.some((depId: number) =>
    perks.some((rkPerk: RankedPerk) => rkPerk.id === depId)
  );
}

export function addPerk<T extends PerkSpec>(perkSpec: T, perk: RankedPerk): T {
  const { perks, ...rest } = perkSpec;
  return { ...rest, perks: [...perks, perk] } as T;
}

export function removePerk<T extends PerkSpec>(perkSpec: T, perk: RankedPerk): T {
  const { perks, ...rest } = perkSpec;
  const newPerks = perks.filter((p) => !equalRanked(p, perk));
  return { ...rest, perks: newPerks } as T;
}
