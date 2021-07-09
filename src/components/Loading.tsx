import {myColors} from 'constants/constants';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import globalStyles from 'styles/globalStyles';

export default function Loading() {
  return (
    <View style={globalStyles.center}>
      <ActivityIndicator size="large" color={myColors.blue} />
    </View>
  );
}
