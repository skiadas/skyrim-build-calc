const fXPPerSkillRank = 1;

export default class Skill {
    name: string;
    points: number;
    startPoints: number;

    constructor(name: string, points: number, startPoints: number) {
        this.name = name;
        this.points = points;
        this.startPoints = startPoints;
    }

    grantedXp(): number {
        if (this.points <= this.startPoints) return 0;
        const numLevelUps = this.points - this.startPoints;
        const avgXp = (fXPPerSkillRank * (this.points + this.startPoints + 1)) / 2;
        return numLevelUps * avgXp;
    }
}
