import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const countSkills = (skills: IskillData[]): Array<skillCondensation> => {
  const techList = [...new Set(skills.map((skill: IskillData) => [... skill.techs]).flat())];

  return techList.map(skillTarget => {
    return {[skillTarget]: skills.map(harvester => harvester.techs.filter(target => target === skillTarget)).flat().length};
  });
}