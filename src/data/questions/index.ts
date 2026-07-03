import { arraysQuestions } from "./arrays";
import type { Question } from "./arrays";
import { numbersQuestions } from "./numbers";
import { numberSystemsQuestions } from "./numberSystems";
import { sortingQuestions } from "./sorting";
import { stringsQuestions } from "./strings";

export type { Question };

export const questions: Question[] = [
  ...arraysQuestions,
  ...numbersQuestions,
  ...numberSystemsQuestions,
  ...sortingQuestions,
  ...stringsQuestions
];
