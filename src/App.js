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
import Screeners from './Screeners/Screeners.js';
import Journal from './Journal/Journal.js';
import JournalOptions from './Journal/JournalOptions.js';
import Education from './Education.js';
import Graphs from './Graphs.js';
import MoodRating from './MoodRating/MoodRating.js';
import Resources from './Resources.js';
import GoalSetter from './GoalSetterAndTracking/GoalSetter/GoalSetter'


const MainNavigator = createStackNavigator({
  MainScreen: {screen: MainScreen},
  Screeners: {screen: Screeners},
  Journal: {screen: Journal},
  Education: {screen: Education},
  Graphs: {screen: Graphs},
  MoodRating: {screen: MoodRating},
  Resources: {screen: Resources},
  Goals: {screen: GoalSetter},
  JournalOptions: {screen: JournalOptions},
},
{initialRouteName: 'MainScreen'});

const App = createAppContainer(MainNavigator);
export default App;
