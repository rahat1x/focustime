import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTempItem] = useState(null);
  const touch = () => addSubject(tmpItem);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you want to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton size={55} title="+" onPress={touch} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
