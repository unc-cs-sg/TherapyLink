import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  mRBlue: '#9FEBFF'
}

const diaryStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.mRBlue,
    width: "100%",
//    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 50,
  }
});

export { diaryStyles };
