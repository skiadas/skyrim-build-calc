import { newSkillLevel, SkillLevel, getCurrentLevel } from './SkillLevel';
import { allSkills, SkillType } from './SkillType';

export type PerSkill<T> = {
  readonly [key in SkillType]: T;
};

export type CharSkills = PerSkill<SkillLevel>;

type PartialPerSkill<T> = {
  [key in SkillType]?: T;
};

export function makeSkillsFromLevels(
  skillLevels: PerSkill<number>,
  baseStats: PerSkill<number>
): PerSkill<SkillLevel> {
  return mapPerSkill2(skillLevels, baseStats, newSkillLevel);
}

export function fromFunction<T>(f: (p: SkillType) => T): PerSkill<T> {
  const xs = {} as PartialPerSkill<T>;
  allSkills.forEach((skill) => {
    xs[skill] = f(skill);
  });
  return xs as PerSkill<T>;
}

export function mapPerSkill<T, S>(xs: PerSkill<T>, f: (x: T, skill: SkillType) => S): PerSkill<S> {
  return fromFunction((skill) => f(xs[skill], skill));
}

export function mapPerSkill2<T, S, R>(
  xs: PerSkill<T>,
  ys: PerSkill<S>,
  f: (x: T, y: S, skill: SkillType) => R
): PerSkill<R> {
  return fromFunction((skill) => f(xs[skill], ys[skill], skill));
}

export function getCurrentLevels(skills: PerSkill<SkillLevel>): PerSkill<number> {
  return mapPerSkill(skills, getCurrentLevel);
}

export function accumulate<T, S>(skills: PerSkill<T>, initial: S, acc: (s: S, t: T) => S): S {
  let total = initial;
  allSkills.forEach((sk) => {
    total = acc(total, skills[sk]);
  });
  return total;
}
