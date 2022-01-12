import {StyleSheet} from 'react-native';
import {Theme} from '../../../../config/theme/themeProvider';

const createStyles = () =>
  StyleSheet.create({
    card: {
      flex: 0.3,
      backgroundColor: Theme.colors.card,
      borderWidth: 1,
      borderRadius: 15,
      paddingVertical: 20,
      width: '100%',
      padding: 5,
      borderColor: Theme.colors.border,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingVertical: 10,
    },
    item1: {
      alignItems: 'center',
      width: '20%',
    },
    item2: {
      width: '80%',
      paddingHorizontal: 10,
      height: '100%',
      justifyContent: 'space-around',
    },
    cardCurrent: {
      flex: 0.3,
      backgroundColor: Theme.colors.border,
      borderWidth: 1,
      borderRadius: 15,
      paddingVertical: 20,
      width: '100%',
      padding: 5,
      borderColor: Theme.colors.notification,

      justifyContent: 'center',
      alignItems: 'center',
    },
    textNameContainer: {
      color: Theme.colors.primary,
      borderBottomColor: Theme.colors.border,
      borderBottomWidth: 1,
      width: '80%',
      marginBottom: 10,
      flexDirection: 'row',
    },
    forwardedFlex: {
      alignItems: 'center',
    },
    forwardedContainer: {
      color: Theme.colors.primary,
      borderTopColor: Theme.colors.border,
      borderTopWidth: 1,
      width: '100%',
      marginTop: 10,
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      color: Theme.colors.primary,
      fontWeight: '600',
    },
    textData: {
      fontSize: 15,
      color: Theme.colors.primary,
    },
    textForwardedTrue: {
      fontSize: 20,
      color: Theme.colors.notification,
      fontWeight: '400',
    },
    textForwardedFalse: {
      fontSize: 20,
      color: Theme.colors.primary,
      fontWeight: '400',
    },
    button: {
      alignItems: 'center',

      padding: 10,
    },
    avatarMale: {
      backgroundColor: Theme.colors.card,
    },
    avatarFemale: {
      backgroundColor: Theme.colors.background,
    },
    icon: {
      color: Theme.colors.primary,
      marginLeft: 5,
    },
  });

export default createStyles;
