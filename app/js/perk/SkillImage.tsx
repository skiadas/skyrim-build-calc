import { Image } from '@adobe/react-spectrum';

import { PerSkill } from './PerSkill';
import { asString, Skill, SkillType } from './SkillType';

const filenames: PerSkill<string> = {
  [Skill.ALTERATION]: 'Alteration_icon.webp',
  [Skill.ALCHEMY]: 'Alchemy_icon.webp',
  [Skill.LIGHT_ARMOR]: 'Light_Armor_icon.webp',
  [Skill.LOCKPICKING]: 'Lockpicking_icon.webp',
  [Skill.ARCHERY]: 'Archer_icon.webp',
  [Skill.BLOCK]: 'Block_icon.webp',
  [Skill.PICKPOCKET]: 'Pickpocket_icon.webp',
  [Skill.CONJURATION]: 'Conjuration_icon.webp',
  [Skill.RESTORATION]: 'Restoration_icon.webp',
  [Skill.DESTRUCTION]: 'Destruction_icon.webp',
  [Skill.SMITHING]: 'Smithing_icon.webp',
  [Skill.ENCHANTING]: 'Enchanting_icon.webp',
  [Skill.SNEAK]: 'Sneak_icon.webp',
  [Skill.HEAVY_ARMOR]: 'Heavy_Armor_icon.webp',
  [Skill.SPEECH]: 'Speechcraft_icon.webp',
  [Skill.ILLUSION]: 'Illusion_icon.webp',
  [Skill.TWO_HANDED]: 'Two-handed_icon.webp',
  [Skill.ONE_HANDED]: 'One-handed_icon.webp'
};

export default function SkillImage(props: { skill: SkillType }): JSX.Element {
  const path = `images/${filenames[props.skill]}`;
  return <Image src={path} alt={asString[props.skill]} />;
}
