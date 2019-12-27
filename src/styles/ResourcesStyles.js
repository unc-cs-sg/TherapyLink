import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  mRBlue: '#9FEBFF',
  resIndigo: '#333CEA'
}

const resourcesStyles = StyleSheet.create({

  categoryContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 25

  },
  categoryButtons: {
    width: "100%",
    padding: 10,

  },

  resourceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 25,
  },

  resourceButtons: {
    width: "100%",
    padding: 10,

  },


});

export { resourcesStyles };

//
//const moodRatingStyles = StyleSheet.create({
//  container: {
//    backgroundColor: colors.mRBlue,
//    width: "100%",
//    height: "100%",
//    padding: 15,
//    justifyContent: "center"
//  },
//  row: {
//    width: "93%",
//    flexDirection: 'row',
//    justifyContent: 'space-between'
//  },
//  moodScale: {
//    width: "100%"
//  }
//});
//
//export { moodRatingStyles, colors };