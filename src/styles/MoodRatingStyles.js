import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  mRBlue: '#9FEBFF'
}

const moodRatingStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.mRBlue,
    width: "100%",
    padding: 10
  },
  sliderBounds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11
  }
});

export { moodRatingStyles };