import { ChangeEventHandler, FC } from 'react';

const MAX_LEVEL = 100;

interface TreeProps {
  name: string;
  level: number;
  minLevel: number;
  myHandler: ChangeEventHandler;
}

const SkillTree: FC<TreeProps> = (props) => {
  const inputName = `skill-tree-${props.name}`;
  return (
    <div>
      <label htmlFor={inputName}>{props.name}</label>
      <input
        id={inputName}
        name={inputName}
        type="number"
        min={props.minLevel}
        max={MAX_LEVEL}
        value={props.level}
        onChange={props.myHandler}
      />
    </div>
  );
};

export default SkillTree;
