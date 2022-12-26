import { ComboBox, Flex, Item, LabeledValue, Meter } from '@adobe/react-spectrum';
import { Key } from 'react';
import { getLevelSpecForSkills } from '../xpCalc/XpCalculation';
import { Character } from './Character';
import { raceList, RaceType } from './Race';

export interface CharacterInfoProps {
  character: Character;
  onRaceChange: (race: RaceType) => void;
}

export default function CharacterInfo(props: CharacterInfoProps): JSX.Element {
  const raceChoices = raceList.map((race) => <Item key={race}>{race}</Item>);
  const { level, xpAtLevel, xpForNext } = getLevelSpecForSkills(props.character.skills);
  return (
    <Flex direction="row" gap="size-300">
      <ComboBox
        label="Race"
        labelPosition="side"
        selectedKey={props.character.race}
        onSelectionChange={(newRace: Key): void => props.onRaceChange(newRace as RaceType)}
      >
        {raceChoices}
      </ComboBox>
      <LabeledValue label="Level" labelPosition="side" alignSelf="center" value={level} />
      <Meter
        variant="positive"
        label="Next level"
        labelPosition="side"
        valueLabel={`${xpAtLevel}/${xpForNext}`}
        value={xpAtLevel}
        maxValue={xpForNext}
        minValue={0}
      />
    </Flex>
  );
}
