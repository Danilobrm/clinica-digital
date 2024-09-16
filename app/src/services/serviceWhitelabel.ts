import nexgen_solutions from '../assets/whitelabel/nexgen_solutions.json';
import bluewave from '../assets/whitelabel/bluewave.json';
import lumin_informatics from '../assets/whitelabel/lumin_informatics.json';
import defaultwl from '../assets/whitelabel/default.json';

const whitelabel: Record<string, any> = {
  nexgen_solutions,
  defaultwl,
  bluewave,
  lumin_informatics,
};

const whiteLabelLoad = (system: string) => {
  return whitelabel[system];
};

export {whiteLabelLoad};
