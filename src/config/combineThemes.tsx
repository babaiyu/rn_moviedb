import {DefaultTheme} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from 'react-native-paper';
import {myColors} from 'constants/constants';

const customTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: myColors.light,
    primary: myColors.semiBlue,
    accent: myColors.blue,
    error: myColors.danger,
  },
  fonts: configureFonts({
    default: {
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Poppins-Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Poppins-Thin',
        fontWeight: 'normal',
      },
    },
  }),
};

export default customTheme;
