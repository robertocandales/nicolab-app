import React, {useEffect, useMemo} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../redux/stores/hooks';
import {Patient} from '../../DTOs/patientType';
import {getPatientListAction} from '../../redux/actions/patientActions';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

//Styles
import createStyles from './styles';
import {Theme} from '../../theme/themeProvider';
import Item from './components/Item';

export type IindexProps = {
  navigation: NavigationProp<ParamListBase>;
};

const PatientList: React.FC<IindexProps> = ({navigation}: IindexProps) => {
  const styles = useMemo(() => createStyles(), []);
  const dispatch = useDispatch();
  const {patient, loading} = useAppSelector(state => state.patient);

  useEffect(() => {
    dispatch(getPatientListAction());
  }, []);

  const choosePatient = (value: Patient) => {
    navigation.navigate('PatientDetails', {patienDetails: value});
  };

  const renderItem = ({item}: ListRenderItemInfo<Patient>) => {
    return <Item key={item.id} item={item} onPress={choosePatient} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} testID="patient-title">
        Patient List
      </Text>
      {loading && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={Theme.colors.notification} />
        </View>
      )}

      <FlatList
        data={patient}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export {PatientList};
