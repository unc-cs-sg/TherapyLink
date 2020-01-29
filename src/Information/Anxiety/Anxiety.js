import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Info from './Info/Info.js';
import ManagingAnxiety from './ManagingAnxiety/ManagingAnxiety.js';

const AnxietyNavigator = createMaterialTopTabNavigator({
  Info: Info,
  ManagingAnxiety: ManagingAnxiety,
});

export default AnxietyNavigator;
