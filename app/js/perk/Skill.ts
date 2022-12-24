const fXPPerSkillRank = 1;

export interface Skill {
    name: string;
    points: number;
    startPoints: number;
}

export function newSkill(name: string, points: number, startPoints: number): Skill {
    return { name, points, startPoints };
}

export function grantedXp(skill: Skill): number {
    const { points, startPoints } = skill;
    if (points <= startPoints) return 0;
    const numLevelUps = points - startPoints;
    const avgXp = (fXPPerSkillRank * (points + startPoints + 1)) / 2;
    return numLevelUps * avgXp;
}
