import { FC, Fragment, ReactNode } from 'react';

import useCharacterReducer from './character/CharacterReducer';
import { PerkList } from './perk/PerkList';
import { Skill } from './perk/Skill';
import SkillTree from './perk/SkillTree';

function makeSkillTree(skill: Skill): ReactNode {
    const { name, points, startPoints } = skill;
    return (
        <Fragment key={name}>
            <SkillTree name={name} level={points} minLevel={startPoints} myHandler={() => {}} />
        </Fragment>
    );
}

const Main: FC<unknown> = () => {
    const [character, dispatch] = useCharacterReducer();
    const { skills } = character;
    const items = Object.keys(skills).map((name) => makeSkillTree(skills[name as PerkList]));

    return (
        <div>
            <label htmlFor="race">Race</label>
            {items}
        </div>
    );
};

export default Main;
