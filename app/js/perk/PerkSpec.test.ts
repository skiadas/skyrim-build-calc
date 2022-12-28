import { baseCharacter, updateCharacter } from '../character/Character';
import { Race } from '../character/Race';
import { getRankedPerk, OPerkID, requiredLevel } from './Perk';
import { getAvailable, newSpec } from './PerkSpec';
import { Skill } from './SkillType';

const char = baseCharacter(Race.ALTMER);
describe('Get available perks', () => {
  it('for zero level', () => {
    const perks = getAvailable(newSpec(char.skills, []));
    expect(perks).toContainEqual(getRankedPerk(1, OPerkID.VOK_ALC_MASTERY));
  });
  it('if not already having', () => {
    const alchemyMastery = getRankedPerk(1, OPerkID.VOK_ALC_MASTERY);
    const perks = getAvailable(newSpec(char.skills, [alchemyMastery]));
    expect(perks).not.toContainEqual(alchemyMastery);
  });
  it('only if meeting level and prerequisite', () => {
    const alchemyMastery = getRankedPerk(1, OPerkID.VOK_ALC_MASTERY);
    const physician = getRankedPerk(1, OPerkID.VOK_ALC_PHYSICIAN);
    const alchLeveled = updateCharacter(char, Skill.ALCHEMY, 20);
    const alchLessLeveled = updateCharacter(char, Skill.ALCHEMY, 19);
    expect(getAvailable(newSpec(alchLeveled.skills, [alchemyMastery]))).toContainEqual(physician);
    expect(getAvailable(newSpec(alchLessLeveled.skills, [alchemyMastery]))).not.toContainEqual(
      physician
    );
    expect(getAvailable(newSpec(alchLeveled.skills, []))).not.toContainEqual(physician);
  });
  it('only if meeting level and previous rank', () => {
    const mageArmor2 = getRankedPerk(2, OPerkID.VOK_ALT_MAGE_ARMOR);
    const mageArmor1 = getRankedPerk(1, OPerkID.VOK_ALT_MAGE_ARMOR);
    const altMastery = getRankedPerk(1, OPerkID.VOK_ALT_MASTERY);
    const altLeveled = updateCharacter(char, Skill.ALTERATION, requiredLevel(mageArmor2));
    const altLessLeveled = updateCharacter(char, Skill.ALTERATION, requiredLevel(mageArmor2) - 1);
    expect(getAvailable(newSpec(altLeveled.skills, [altMastery, mageArmor1]))).toContainEqual(
      mageArmor2
    );
    expect(
      getAvailable(newSpec(altLessLeveled.skills, [altMastery, mageArmor1]))
    ).not.toContainEqual(mageArmor2);
    expect(getAvailable(newSpec(altLeveled.skills, [altMastery]))).not.toContainEqual(mageArmor2);
  });
});
