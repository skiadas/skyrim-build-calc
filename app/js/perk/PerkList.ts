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
