import { allSkills, Skill } from './SkillType';

describe('List of perks', () => {
  it('uses the perk enum values', () => {
    expect(allSkills).toContain(Skill.ALCHEMY);
  });
});
