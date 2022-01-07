import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/themeProvider';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Theme.colors.card,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 20,
    width: '90%',
    padding: 15,
    borderColor: Theme.colors.border,
  },
  gender: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',

    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    padding: 2,
  },
  textNotification: {
    fontSize: 15,
    padding: 2,
    color: Theme.colors.notification,
    paddingTop: 15,
  },
  button: {
    alignItems: 'center',

    padding: 10,
  },
  active: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  activeWrapperButtons: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    left: 15,
  },
  indicator: {
    position: 'absolute',
    top: '50%',
    zIndex: 20,
  },
});
