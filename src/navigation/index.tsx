import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PatientList} from '../screens/PatientList';
import PatientDetails from '../screens/PatientDetails';
import {Theme} from '../config/theme/themeProvider';

export type MainStackParamList = {
  PatientList: undefined;
  PatientDetails: undefined;
};

export default function Screens() {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  const noHeaderConfig = {
    header: () => null,
  };
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="PatientList">
        <Stack.Screen
          name="PatientList"
          component={PatientList}
          options={{
            ...noHeaderConfig,
          }}
        />
        <Stack.Screen
          name="PatientDetails"
          component={PatientDetails}
          options={{
            ...noHeaderConfig,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
