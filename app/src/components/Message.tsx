// Message.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalColors} from '../globalStyle';

const Message = ({text}) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    backgroundColor: globalColors.primary_color,
    borderRadius: 20,
    marginBottom: 10,
    borderBottomLeftRadius: 0,
    width: 286,
  },
  messageText: {
    fontSize: 16,
    color: globalColors.terciary_color,
  },
});

export default Message;
