// eslint-disable-next-line import/no-self-import
import { depSelf1 as data } from './depSelf1';
import { depSelf2 } from './depSelf2';

export const depSelf1 = 1;
export const depSelfSum1 = () => data + depSelf1 + depSelf2;
