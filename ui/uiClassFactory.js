import uiBlank from './uiBlank';
import uiN01 from './uiN01';
import uiS01 from './uiS01';
import uiS02 from './uiS02';
import uiS03 from './uiS03';
import uiS04 from './uiS04';

const classes = { uiBlank, uiN01, uiS01, uiS02, uiS03, uiS04 };

export default function uiClassFactory(name) {
  return classes[name];
}
