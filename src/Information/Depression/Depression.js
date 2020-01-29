import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Info from './Info/Info.js';
import OvercomingDepression from './OvercomingDepression/OvercomingDepression.js';

const DepressionNavigator = createMaterialTopTabNavigator({
  Info: Info,
  OvercomingDepression: OvercomingDepression,
});

export default DepressionNavigator;
