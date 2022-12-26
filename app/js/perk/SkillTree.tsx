import { FC } from 'react';
import { Slider } from '@adobe/react-spectrum';

const MAX_LEVEL = 100;

interface TreeProps {
  name: string;
  level: number;
  minLevel: number;
  onLevelChange: (level: number) => void;
}

export const SkillTree: FC<TreeProps> = (props: TreeProps) => (
  <Slider
    label={props.name}
    value={props.level}
    minValue={props.minLevel}
    maxValue={MAX_LEVEL}
    width="size-1600"
    height="size-800"
    isFilled={true}
    onChange={props.onLevelChange}
  />
);

export default SkillTree;
