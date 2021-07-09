import React, {useEffect} from 'react';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import globalStyles from 'styles/globalStyles';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('BottomTab'));
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={globalStyles.center}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
}
