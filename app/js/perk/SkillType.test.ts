import { allSkills, fromFunction, mapPerSkill, Skill } from './SkillType';

describe('List of perks', () => {
  it('uses the perk enum values', () => {
    expect(allSkills).toContain(Skill.ALCHEMY);
  });
});
describe('SkillType mapPerSkill', () => {
  it('Works correctly', () => {
    const initPerks = fromFunction(() => 1);
    const newPerks = mapPerSkill(initPerks, (x) => x + 1);
    expect(newPerks[Skill.ALCHEMY]).toEqual(2);
  });
});
