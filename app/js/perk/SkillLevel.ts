const fXPPerSkillRank = 1;

export interface SkillLevel {
  level: number;
  startLevel: number;
}

export function newSkillLevel(level: number, startLevel: number): SkillLevel {
  return { level, startLevel };
}

// Updates level to new value unless less than startLevel
export function updateSkill(skill: SkillLevel, newPoints: number): SkillLevel {
  const { startLevel } = skill;
  return newPoints < startLevel ? skill : { level: newPoints, startLevel };
}

export function grantedXp({ level, startLevel }: SkillLevel): number {
  if (level <= startLevel) return 0;
  const numLevelUps = level - startLevel;
  const avgXp = (fXPPerSkillRank * (level + startLevel + 1)) / 2;
  return numLevelUps * avgXp;
}
