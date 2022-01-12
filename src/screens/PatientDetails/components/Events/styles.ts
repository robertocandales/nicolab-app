import {StyleSheet} from 'react-native';
import {Theme} from '../../../../config/theme/themeProvider';

const createStyles = () =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    titleWrapper: {
      alignItems: 'center',
      marginBottom: 10,
      borderBottomColor: Theme.colors.notification,
      borderBottomWidth: 1,
    },
    title: {
      color: Theme.colors.notification,
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 24,
    },
    text: {
      color: Theme.colors.newGray,
      fontSize: 16,
      paddingVertical: 3,
      fontWeight: '400',
    },
    textEventfalse: {
      color: Theme.colors.newGray,
      fontSize: 16,
      paddingVertical: 3,
      paddingLeft: 20,
      fontWeight: '400',
      textTransform: 'capitalize',
    },
    textEventTrue: {
      color: Theme.colors.notification,
      fontSize: 16,
      paddingVertical: 3,
      paddingLeft: 20,
      fontWeight: '400',
      textTransform: 'capitalize',
    },
  });

export default createStyles;
