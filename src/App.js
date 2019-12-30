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
import Checkup from './Checkup/Checkup.js';
import JournalEntry from './Journal/JournalEntry.js';
import Journal from './Journal/Journal.js';
import JournalOptions from './Journal/JournalOptions.js';
import Education from './Education.js';
import Graphs from './Graphs.js';
import MoodRating from './MoodRating/MoodRating.js';
import Resources from './Resources/Resources.js';
import MentalHealthInfo from './Resources/MentalHealthInfo.js';
import FindATherapist from './Resources/FindATherapist.js';
import Podcasts from './Resources/Podcasts.js';
import FinancialAssist from './Resources/FinancialAssist.js';
import CounselingBenefits from './Resources/CounselingBenefits.js';
import SuicideCrisis from './Resources/SuicideCrisis.js';
import GoalSetter from './GoalSetterAndTracking/GoalSetter/GoalSetter.js';
import GoalHistory from './GoalSetterAndTracking/GoalHistory/GoalHistory.js';

const MainNavigator = createStackNavigator(
  {
    MainScreen: {screen: MainScreen},
    Checkup: {screen: Checkup},
    Journal: {screen: Journal},
    JournalEntry: {screen: JournalEntry},
    JournalOptions: {screen: JournalOptions},
    Education: {screen: Education},
    Graphs: {screen: Graphs},
    MoodRating: {screen: MoodRating},
    Resources: {screen: Resources},
    MentalHealthInfo: {screen: MentalHealthInfo},
    FindATherapist: {screen: FindATherapist},
    Podcasts: {screen: Podcasts},
    FinancialAssist: {screen: FinancialAssist},
    CounselingBenefits: {screen: CounselingBenefits},
    SuicideCrisis: {screen: SuicideCrisis},
    Goals: {screen: GoalSetter},
    GoalHistory: {screen: GoalHistory},
  },
  {initialRouteName: 'MainScreen'},
);

const App = createAppContainer(MainNavigator);
export default App;
