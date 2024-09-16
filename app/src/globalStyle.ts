import {whiteLabelLoad} from './services/serviceWhitelabel';
import logoNexgen from './assets/logos/nexgen_solutions.png';
import logoBluewave from './assets/logos/bluewave.png';
import logoLumin from './assets/logos/lumin_informatics.png';

const logos = []
logos[1000] = logoNexgen
logos[1234] = logoBluewave
logos[2000] = logoLumin

const key = 0

let whitelabel = ['defaultwl'];
whitelabel[1000] = 'nexgen_solutions';
whitelabel[1234] = 'bluewave';
whitelabel[2000] = 'lumin_informatics';

export let globalColors = setGlobalColors(key).colors;
const logo = logos[key];

export function setGlobalColors(system: number) {
  return whiteLabelLoad(whitelabel[system]);
}
export {logo};
