import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  mRBlue: '#9FEBFF',
  trackTint: '#333CEA'
}

const moodRatingStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 15
  },
  emojiRow: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  emoji: {
    height: 37,
    width: 37
  },
  row: {
    width: "93%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  invisible: {
    opacity: 0
  },
  moodScale: {
    width: "100%"
  }
});

export { moodRatingStyles, colors };