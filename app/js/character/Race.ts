import { AllPerks, PerkList, simplePerks } from '../perk/PerkList';

export enum Race {
    ALTMER = 'Altmer',
    ARGONIAN = 'Argonian',
    BOSMER = 'Bosmer',
    BRETON = 'Breton',
    DUNMER = 'Dunmer',
    IMPERIAL = 'Imperial',
    KHAJIIT = 'Khajiit',
    NORD = 'Nord',
    ORSIMER = 'Orsimer',
    REDGUARD = 'Redguard'
}

type PerkChange = {
    [key in PerkList]?: number;
};

const defaultStats: AllPerks<number> = simplePerks(() => 15);

const perkChangesPerRace: {
    [key in Race]: PerkChange;
} = {
    [Race.ALTMER]: {
        [PerkList.ILLUSION]: 25,
        [PerkList.CONJURATION]: 20,
        [PerkList.DESTRUCTION]: 20,
        [PerkList.RESTORATION]: 20,
        [PerkList.ALTERATION]: 20,
        [PerkList.ENCHANTING]: 20
    },
    [Race.ARGONIAN]: {
        [PerkList.LIGHT_ARMOR]: 20,
        [PerkList.SNEAK]: 20,
        [PerkList.LOCKPICKING]: 25,
        [PerkList.PICKPOCKET]: 20,
        [PerkList.RESTORATION]: 20,
        [PerkList.ALTERATION]: 20
    },
    [Race.BOSMER]: {
        [PerkList.ARCHERY]: 25,
        [PerkList.LIGHT_ARMOR]: 20,
        [PerkList.SNEAK]: 20,
        [PerkList.LOCKPICKING]: 20,
        [PerkList.PICKPOCKET]: 20,
        [PerkList.ALCHEMY]: 20
    },
    [Race.BRETON]: {
        [PerkList.SPEECH]: 20,
        [PerkList.ALCHEMY]: 20,
        [PerkList.ILLUSION]: 20,
        [PerkList.CONJURATION]: 25,
        [PerkList.RESTORATION]: 20,
        [PerkList.ALTERATION]: 20
    },
    [Race.DUNMER]: {
        [PerkList.LIGHT_ARMOR]: 20,
        [PerkList.SNEAK]: 20,
        [PerkList.ALCHEMY]: 20,
        [PerkList.ILLUSION]: 20,
        [PerkList.DESTRUCTION]: 25,
        [PerkList.ALTERATION]: 20
    },
    [Race.IMPERIAL]: {
        [PerkList.HEAVY_ARMOR]: 20,
        [PerkList.BLOCK]: 20,
        [PerkList.ONE_HANDED]: 20,
        [PerkList.DESTRUCTION]: 20,
        [PerkList.RESTORATION]: 25,
        [PerkList.ENCHANTING]: 20
    },
    [Race.KHAJIIT]: {
        [PerkList.ONE_HANDED]: 20,
        [PerkList.ARCHERY]: 20,
        [PerkList.SNEAK]: 25,
        [PerkList.LOCKPICKING]: 20,
        [PerkList.PICKPOCKET]: 20,
        [PerkList.ALCHEMY]: 20
    },
    [Race.NORD]: {
        [PerkList.SMITHING]: 20,
        [PerkList.BLOCK]: 20,
        [PerkList.TWO_HANDED]: 25,
        [PerkList.ONE_HANDED]: 20,
        [PerkList.LIGHT_ARMOR]: 20,
        [PerkList.SPEECH]: 20
    },
    [Race.ORSIMER]: {
        [PerkList.SMITHING]: 20,
        [PerkList.HEAVY_ARMOR]: 25,
        [PerkList.BLOCK]: 20,
        [PerkList.TWO_HANDED]: 20,
        [PerkList.ONE_HANDED]: 20,
        [PerkList.ENCHANTING]: 20
    },
    [Race.REDGUARD]: {
        [PerkList.SMITHING]: 20,
        [PerkList.BLOCK]: 20,
        [PerkList.ONE_HANDED]: 25,
        [PerkList.ARCHERY]: 20,
        [PerkList.DESTRUCTION]: 20,
        [PerkList.ALTERATION]: 20
    }
};

export function baseStatsFor(race: Race): AllPerks<number> {
    return {
        ...defaultStats,
        ...perkChangesPerRace[race]
    };
}
