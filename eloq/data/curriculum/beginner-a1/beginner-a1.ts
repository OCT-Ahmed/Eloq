import { UnitType } from "@/types/learning";
import { unit_1 } from "./units/unit-1";
import { unit_2 } from "./units/unit-2";
import { unit_3 } from "./units/unit-3";
import { unit_4 } from "./units/unit-4";
import { unit_5 } from "./units/unit-5";
import { unit_6 } from "./units/unit-6";

type sectionTypes = [
  "starter",
  "grammar",
  "vocabulary",
  "listening",
  "speaking",
  "reading",
  "writing",
  "quiz",
  "everyday_english"
];
const levels = [

]

export const units:UnitType[] = [
  unit_1, unit_2, unit_3, unit_4, unit_5, unit_6
]