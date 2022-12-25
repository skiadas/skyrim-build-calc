export const Skill = {
    SMITHING: 'SMITHING',
    HEAVY_ARMOR: 'HEAVY_ARMOR',
    BLOCK: 'BLOCK',
    TWO_HANDED: 'TWO_HANDED',
    ONE_HANDED: 'ONE_HANDED',
    ARCHERY: 'ARCHERY',
    LIGHT_ARMOR: 'LIGHT_ARMOR',
    SNEAK: 'SNEAK',
    LOCKPICKING: 'LOCKPICKING',
    PICKPOCKET: 'PICKPOCKET',
    SPEECH: 'SPEECH',
    ALCHEMY: 'ALCHEMY',
    ILLUSION: 'ILLUSION',
    CONJURATION: 'CONJURATION',
    DESTRUCTION: 'DESTRUCTION',
    RESTORATION: 'RESTORATION',
    ALTERATION: 'ALTERATION',
    ENCHANTING: 'ENCHANTING'
} as const;

export type SkillType = typeof Skill[keyof typeof Skill];

export type PerSkill<T> = {
    [key in SkillType]: T;
};

export const allSkills = Object.values(Skill) as SkillType[];

export function fromFunction<T>(f: (p: SkillType) => T): PerSkill<T> {
    const xs = {} as Partial<PerSkill<T>>;
    allSkills.forEach((skill) => {
        xs[skill] = f(skill);
    });
    return xs as PerSkill<T>;
}

export function mapPerSkill<T, S>(xs: PerSkill<T>, f: (x: T, skill: SkillType) => S): PerSkill<S> {
    return fromFunction((skill) => f(xs[skill], skill));
}

export function mapPerSkill2<T, S, R>(
    xs: PerSkill<T>,
    ys: PerSkill<S>,
    f: (t: T, s: S, skill: SkillType) => R
): PerSkill<R> {
    return fromFunction((skill) => f(xs[skill], ys[skill], skill));
}

export const asString = {
    [Skill.SMITHING]: 'smithing',
    [Skill.HEAVY_ARMOR]: 'heavy armor',
    [Skill.BLOCK]: 'block',
    [Skill.TWO_HANDED]: 'two-handed',
    [Skill.ONE_HANDED]: 'one-handed',
    [Skill.ARCHERY]: 'archery',
    [Skill.LIGHT_ARMOR]: 'light armor',
    [Skill.SNEAK]: 'sneak',
    [Skill.LOCKPICKING]: 'lockpicking',
    [Skill.PICKPOCKET]: 'pickpocket',
    [Skill.SPEECH]: 'speech',
    [Skill.ALCHEMY]: 'alchemy',
    [Skill.ILLUSION]: 'illusion',
    [Skill.CONJURATION]: 'conjuration',
    [Skill.DESTRUCTION]: 'destruction',
    [Skill.RESTORATION]: 'restoration',
    [Skill.ALTERATION]: 'alteration',
    [Skill.ENCHANTING]: 'enchanting'
};
