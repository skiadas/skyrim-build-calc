export enum PerkList {
    SMITHING = 'smithing',
    HEAVY_ARMOR = 'heavy armor',
    BLOCK = 'block',
    TWO_HANDED = 'two-handed',
    ONE_HANDED = 'one-handed',
    ARCHERY = 'archery',
    LIGHT_ARMOR = 'light armor',
    SNEAK = 'sneak',
    LOCKPICKING = 'lockpicking',
    PICKPOCKET = 'pickpocket',
    SPEECH = 'speech',
    ALCHEMY = 'alchemy',
    ILLUSION = 'illusion',
    CONJURATION = 'conjuration',
    DESTRUCTION = 'destruction',
    RESTORATION = 'restoration',
    ALTERATION = 'alteration',
    ENCHANTING = 'enchanting'
}

export type AllPerks<T> = {
    [key in PerkList]: T;
};

export const allPerks = Object.values(PerkList) as PerkList[];

export function simplePerks<T>(f: (p: PerkList) => T): AllPerks<T> {
    const xs = {} as Partial<AllPerks<T>>;
    allPerks.forEach((perk) => {
        xs[perk] = f(perk);
    });
    return xs as AllPerks<T>;
}

export function mapEach<T, S>(xs: AllPerks<T>, f: (t: T, perk: PerkList) => S): AllPerks<S> {
    return simplePerks((perk) => f(xs[perk], perk));
}

export function mapEach2<T, S, R>(
    xs: AllPerks<T>,
    ys: AllPerks<S>,
    f: (t: T, s: S, perk: PerkList) => R
): AllPerks<R> {
    return simplePerks((perk) => f(xs[perk], ys[perk], perk));
}
