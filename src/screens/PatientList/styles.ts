import {StyleSheet} from 'react-native';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    indicator: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 20,
    },

    title: {
      fontSize: 32,
      textAlign: 'center',
      marginBottom: 5,

      borderBottomWidth: 1,
    },
    containerDescription: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    description: {
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 5,

      borderBottomWidth: 1,
    },
  });

export default createStyles;
