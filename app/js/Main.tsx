import { FC, Fragment, ReactNode } from 'react';

import useCharacterReducer from './character/CharacterReducer';
import { allPerks } from './perk/PerkList';
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
    const items = allPerks.map((perk) => makeSkillTree(skills[perk]));

    return (
        <div>
            <label htmlFor="race">Race</label>
            {items}
        </div>
    );
};

export default Main;
