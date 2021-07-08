import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StateProvider} from 'states/store';

import Routes from 'config/routes';
import customTheme from 'config/combineThemes';

export default function App() {
  return (
    <StateProvider>
      <PaperProvider theme={customTheme}>
        <Routes />
      </PaperProvider>
    </StateProvider>
  );
}
