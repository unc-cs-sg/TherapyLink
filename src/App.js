/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './MainScreen.js';
import Screeners from './Screeners.js';
import Diary from './Diary.js';
import Education from './Education.js';
import Graphs from './Graphs.js';
import MoodRating from './MoodRating.js';
import Resources from './Resources.js';


const MainNavigator = createStackNavigator({
  MainScreen: {screen: MainScreen},
  Screeners: {screen: Screeners},
  Diary: {screen: Diary},
  Education: {screen: Education},
  Graphs: {screen: Graphs},
  MoodRating: {screen: MoodRating},
  Resources: {screen: Resources},
},
{initialRouteName: 'MainScreen'});

const App = createAppContainer(MainNavigator);
export default App;
