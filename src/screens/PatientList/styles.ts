import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
