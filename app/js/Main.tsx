import { FC, Fragment, ReactNode } from 'react';

import useCharacterReducer from './character/CharacterReducer';
import { allSkills, SkillType } from './perk/SkillType';
import { SkillLevel } from './perk/SkillLevel';
import SkillTree from './perk/SkillTree';

function makeSkillTree(name: SkillType, skill: SkillLevel): ReactNode {
  const { level, startLevel } = skill;
  return (
    <Fragment key={name}>
      <SkillTree name={name} level={level} minLevel={startLevel} myHandler={() => {}} />
    </Fragment>
  );
}

const Main: FC<unknown> = () => {
  const [character, dispatch] = useCharacterReducer();
  const { skills } = character;
  const items = allSkills.map((skill) => makeSkillTree(skill, skills[skill]));

  return (
    <div>
      <label htmlFor="race">Race</label>
      {items}
    </div>
  );
};

export default Main;
