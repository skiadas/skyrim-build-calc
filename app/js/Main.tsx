import React, { ReactNode } from 'react';
import { Provider, defaultTheme, Flex } from '@adobe/react-spectrum';
import { useCharacterReducer, Actions, Action } from './character/CharacterReducer';
import { allSkills, asString as skillAsString, SkillType } from './perk/SkillType';
import { SkillLevel } from './perk/SkillLevel';
import SkillTree from './perk/SkillTree';
import CharacterInfo from './character/CharacterInfo';
import { RaceType } from './character/Race';
import { getAvailable } from './perk/PerkSpec';
import PerkView from './perk/PerkView';

function makeSkillTree(
  name: SkillType,
  skill: SkillLevel,
  dispatch: React.Dispatch<Action>
): ReactNode {
  const { level, startLevel } = skill;
  return (
    <SkillTree
      key={name}
      name={skillAsString[name]}
      level={level}
      minLevel={startLevel}
      onLevelChange={(newLevel: number): void => {
        dispatch(Actions.relevel(name, newLevel));
      }}
    />
  );
}

export default function Main(): JSX.Element {
  const [character, dispatch] = useCharacterReducer();
  const { skills } = character;
  const items = allSkills.map((skill) => makeSkillTree(skill, skills[skill], dispatch));
  return (
    <Provider theme={defaultTheme}>
      <Flex direction="column" gap="size-300">
        <CharacterInfo
          character={character}
          onRaceChange={(newRace: RaceType): void => dispatch(Actions.newRace(newRace))}
        />
        <PerkView
          character={character}
          addPerk={(perk): void => dispatch(Actions.addPerk(perk))}
          removePerk={(perk): void => dispatch(Actions.removePerk(perk))}
        />
        <Flex direction="row" gap="size-300" wrap>
          {items}
        </Flex>
      </Flex>
    </Provider>
  );
}
