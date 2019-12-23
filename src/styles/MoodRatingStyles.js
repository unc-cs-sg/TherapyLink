import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  mRBlue: '#9FEBFF',
  trackTint: '#333CEA'
}

const moodRatingStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.mRBlue,
    width: "100%",
    height: "100%",
    padding: 15,
    justifyContent: "center"
  },
  row: {
    width: "93%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moodScale: {
    width: "100%"
  }
});

export { moodRatingStyles, colors };