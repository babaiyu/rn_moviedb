import 'react-native-gesture-handler';
import React from 'react';
import {StateProvider} from 'states/store';

import Routes from 'config/routes';

export default function App() {
  return (
    <StateProvider>
      <Routes />
    </StateProvider>
  );
}
