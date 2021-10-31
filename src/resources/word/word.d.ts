import { Surface } from './surface';
import { Translation } from './translation';

export type Word = {
  surface: Surface;
  translations: Translation[];
};
