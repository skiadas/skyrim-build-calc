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
// These values were computed using the totalXpNeededForLevelAfter function
const xpNeededPerLevel = [
    null,
    0,
    100,
    225,
    375,
    550,
    750,
    975,
    1225,
    1500,
    1800,
    2125,
    2475,
    2850,
    3250,
    3675,
    4125,
    4600,
    5100,
    5625,
    6175,
    6750,
    7350,
    7975,
    8625,
    9300,
    10000,
    10725,
    11475,
    12250,
    13050,
    13875,
    14725,
    15600,
    16500,
    17425,
    18375,
    19350,
    20350,
    21375,
    22425,
    23500,
    24600,
    25725,
    26875,
    28050,
    29250,
    30475,
    31725,
    33000,
    34300,
    35625,
    36975,
    38350,
    39750,
    41175,
    42625,
    44100,
    45600,
    47125,
    48675,
    50250,
    51850,
    53475,
    55125,
    56800,
    58500,
    60225,
    61975,
    63750,
    65550,
    67375,
    69225,
    71100,
    73000,
    74925,
    76875,
    78850,
    80850,
    82875,
    84925,
    87000,
    89100,
    91225,
    93375,
    95550,
    97750,
    99975,
    102225,
    104500,
    106800,
    109125,
    111475,
    113850,
    116250,
    118675,
    121125,
    123600,
    126100,
    128625,
    131175
];

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
