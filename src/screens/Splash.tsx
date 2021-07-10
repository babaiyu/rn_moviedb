import React, {useEffect} from 'react';
import {Caption, Title} from 'react-native-paper';
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
      <Title>RN MovieDB</Title>
      <Caption>read detail movies before watching</Caption>
    </SafeAreaView>
  );
}
