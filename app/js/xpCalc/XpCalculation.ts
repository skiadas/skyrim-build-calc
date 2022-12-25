import xpNeededPerLevel from './xpPerLevel';

const XPLevelUpBase = 75;
const XPLevelUpMult = 25;
const XPLevelUpMultOverTwo = XPLevelUpMult / 2;

export interface LevelSpec {
  level: number;
  xpForNext: number;
  xpAtLevel: number;
}

export function levelForXp(xp: number): number {
  const c = XPLevelUpBase / XPLevelUpMult + 1 / 2;
  return Math.floor(-c + Math.sqrt(c * c + xp / XPLevelUpMultOverTwo)) + 1;
}

// This function is not really needed in production, as we encoded its levels already
export function totalExpNeededForLevelAfter(currentLevel: number): number {
  return XPLevelUpBase * currentLevel + XPLevelUpMultOverTwo * currentLevel * (currentLevel + 1);
}

export function getLevelSpecForXp(xp: number): LevelSpec {
  // TODO: Handle edge cases
  const level = levelForXp(xp);
  const totalXpForNext = xpNeededPerLevel[level + 1] ?? 0;
  const totalXpForCurr = xpNeededPerLevel[level] ?? 0;
  return {
    level,
    xpForNext: totalXpForNext - totalXpForCurr,
    xpAtLevel: xp - totalXpForCurr
  };
}
