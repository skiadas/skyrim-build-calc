import { Skill } from './SkillType';
import { fromFunction, mapPerSkill } from './PerSkill';

describe('SkillType mapPerSkill', () => {
  it('Works correctly', () => {
    const initPerks = fromFunction(() => 1);
    const newPerks = mapPerSkill(initPerks, (x) => x + 1);
    expect(newPerks[Skill.ALCHEMY]).toEqual(2);
  });
});
