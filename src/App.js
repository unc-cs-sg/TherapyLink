/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import {Button} from 'react-native';
import React from 'react';

import MainScreen from './MainScreen.js';
import Checkup from './Checkup/Checkup.js';
import JournalEntry from './Journal/JournalEntry.js';
import Journal from './Journal/Journal.js';
import JournalOptions from './Journal/JournalOptions.js';
import NegativeEmotionPanel from './Journal/NegativeEmotionPanel';
import SituationalScreen from './Journal/SituationalScreen';
import JournalSummary from './Journal/JournalSummary';
import Information from './Information/Information.js';
import Anxiety from './Information/Anxiety/Anxiety.js';
import Depression from './Information/Depression/Depression.js';
import Graphs from './Graphs/Graphs.js';
import Admin from './Admin.js';
import MoodRating from './MoodRating/MoodRating.js';
import MoodRatingGraph from './Graphs/MoodRatingGraph.js';
import AnxietyCheckupGraph from './Graphs/AnxietyCheckupGraph';
import DepressionCheckupGraph from './Graphs/DepressionCheckupGraph';
import Resources from './Resources/Resources.js';
import MentalHealthInfo from './Resources/MentalHealthInfo.js';
import FindATherapist from './Resources/FindATherapist.js';
import Podcasts from './Resources/Podcasts.js';
import FinancialAssist from './Resources/FinancialAssist.js';
import CounselingBenefits from './Resources/CounselingBenefits.js';
import SuicideCrisis from './Resources/SuicideCrisis.js';
import GoalSetter from './GoalSetterAndTracking/GoalSetter/GoalSetter.js';
import GoalHistory from './GoalSetterAndTracking/GoalHistory/GoalHistory.js';

import {StyleSheet, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerItems} from 'react-navigation-drawer';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.dangerouslyGetParent().openDrawer();
          props.navigation.closeDrawer();
        }}
      />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ResourcesStack = createDrawerNavigator(
  {
    Resources: {screen: Resources},
    MentalHealthInfo: {screen: MentalHealthInfo},
    FindATherapist: {screen: FindATherapist},
    Podcasts: {screen: Podcasts},
    FinancialAssist: {screen: FinancialAssist},
    CounselingBenefits: {screen: CounselingBenefits},
    SuicideCrisis: {screen: SuicideCrisis},
  },
  {contentComponent: CustomDrawerContentComponent},
);

const JournalStack = createDrawerNavigator(
  {
    Journal: {screen: Journal},
    JournalEntry: {screen: JournalEntry},
    JournalOptions: {screen: JournalOptions},
    JournalSummary: {screen: JournalSummary},
    NegativeEmotionPanel: {screen: NegativeEmotionPanel},
    SituationalScreen: {screen: SituationalScreen},
  },
  {contentComponent: CustomDrawerContentComponent},
);

const GraphsStack = createDrawerNavigator(
  {
    Graphs: {screen: Graphs},
    MoodRatingGraph: {screen: MoodRatingGraph},
    AnxietyCheckupGraph: {screen: AnxietyCheckupGraph},
    DepressionCheckupGraph: {screen: DepressionCheckupGraph},
  },
  {contentComponent: CustomDrawerContentComponent},
);

const GoalsStack = createDrawerNavigator(
  {
    Goals: {screen: GoalSetter},
    GoalHistory: {screen: GoalHistory},
  },
  {contentComponent: CustomDrawerContentComponent},
);

const InformationStack = createDrawerNavigator(
  {
    Information: {screen: Information},
    Anxiety: {screen: Anxiety},
    Depression: {screen: Depression},
  },
  {contentComponent: CustomDrawerContentComponent},
);

const MainNavigator = createDrawerNavigator(
  {
    MainScreen: {screen: MainScreen},
    Journal: {screen: JournalStack},
    Checkup: {screen: Checkup},
    Information: {screen: InformationStack},
    Graphs: {screen: GraphsStack},
    Resources: {screen: ResourcesStack},
    MoodRating: {screen: MoodRating},
    Goals: {screen: GoalsStack},
    Admin: {screen: Admin},
  },
  {initialRouteName: 'MainScreen'},
);

const App = createAppContainer(MainNavigator);
export default App;
