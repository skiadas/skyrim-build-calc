import { newSkillLevel, grantedXp, updateSkill } from './SkillLevel';

describe('Skills', () => {
  it('have computed XP based on Start Level', () => {
    expect(grantedXp(newSkillLevel(3, 0))).toEqual(1 + 2 + 3);
    expect(grantedXp(newSkillLevel(20, 15))).toEqual(16 + 17 + 18 + 19 + 20);
    expect(grantedXp(newSkillLevel(12, 15))).toEqual(0);
  });
  it('can have their level updated', () => {
    const skill = newSkillLevel(20, 15);
    expect(updateSkill(skill, 30).level).toEqual(30);
  });
  it('cannot have level updated below startLevel', () => {
    const skill = newSkillLevel(20, 15);
    expect(updateSkill(skill, 10).level).toEqual(20);
  });
});
