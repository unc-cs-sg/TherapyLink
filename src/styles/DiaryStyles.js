import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colors = {
  mRBlue: '#9FEBFF'
}

const diaryStyles = StyleSheet.create({
  title: {
    backgroundColor: colors.mRBlue,
    width: "100%",
    paddingLeft: 10
//    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  optionsButtons: {
    width: "50%",
    padding: 20,
  },
  submitButton: {
    paddingHorizontal: 60,
    paddingTop: 20,
  },
  userComment: {
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    textAlignVertical: "top",
  }
});

export { diaryStyles };
