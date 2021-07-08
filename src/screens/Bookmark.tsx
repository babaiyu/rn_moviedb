import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import globalStyles from 'styles/globalStyles';

export default function BookmarkScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Bookmark</Text>
    </SafeAreaView>
  );
}
