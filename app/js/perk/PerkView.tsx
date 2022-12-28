import { ActionButton, Flex, Item, ListView, Provider, Text } from '@adobe/react-spectrum';
import Add from '@spectrum-icons/workflow/Add';
import Remove from '@spectrum-icons/workflow/Remove';
import { Character } from '../character/Character';
import { rankedName, RankedPerk } from './Perk';
import { getAvailable } from './PerkSpec';
import SkillImage from './SkillImage';
import { getLevelSpecForSkills } from '../xpCalc/XpCalculation';

interface PerkViewProps {
  character: Character;
  addPerk: (perk: RankedPerk) => void;
  removePerk: (perk: RankedPerk) => void;
}

export default function PerkView(props: PerkViewProps): JSX.Element {
  const availablePerks = getAvailable(props.character);
  const knownPerks = props.character.perks.filter(
    (p1) => !props.character.perks.some((p2) => p1.id === p2.id && p1.rank < p2.rank)
  );
  const { level } = getLevelSpecForSkills(props.character.skills);
  const hasPoints = level - 1 - props.character.perks.length;
  return (
    <Flex direction="row">
      <ListView aria-label="Known perks" density="compact" items={knownPerks} width="size-6000">
        {knownPerks.map((rankedPerk) => (
          <Item key={`${rankedPerk.name}-${rankedPerk.rank}`} textValue={rankedName(rankedPerk)}>
            <PerkItem rankedPerk={rankedPerk}>
              <ActionButton
                aria-label="Remove perk"
                onPress={(): void => props.removePerk(rankedPerk)}
              >
                <Remove />
              </ActionButton>
            </PerkItem>
          </Item>
        ))}
      </ListView>
      <Provider isDisabled={!hasPoints} isQuiet={!hasPoints}>
        <ListView
          aria-label="Available perks"
          density="compact"
          items={availablePerks}
          width="size-6000"
        >
          {availablePerks.map((rankedPerk) => (
            <Item key={`${rankedPerk.name}-${rankedPerk.rank}`} textValue={rankedName(rankedPerk)}>
              <PerkItem rankedPerk={rankedPerk}>
                <ActionButton aria-label="Add perk" onPress={(): void => props.addPerk(rankedPerk)}>
                  <Add />
                </ActionButton>
              </PerkItem>
            </Item>
          ))}
        </ListView>
      </Provider>
    </Flex>
  );
}

interface PerkItemProps {
  rankedPerk: RankedPerk;
  children: JSX.Element;
}

function PerkItem(props: PerkItemProps): JSX.Element {
  const name = rankedName(props.rankedPerk);
  const description = props.rankedPerk.descriptions[props.rankedPerk.rank - 1];
  return (
    <>
      <SkillImage skill={props.rankedPerk.skill} />
      <Text>{name}</Text>
      <Text slot="description">{description}</Text>
      {props.children}
    </>
  );
}
