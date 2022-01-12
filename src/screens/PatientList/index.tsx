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
import {Patient} from '../../config/DTOs/patientType';
import {getPatientListAction} from '../../redux/actions/patientActions';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

//Styles
import createStyles from './styles';
import {Theme} from '../../config/theme/themeProvider';
import Item from './components/Item';
import CustomButton from '../../components/CustomButton';

export type IindexProps = {
  navigation: NavigationProp<ParamListBase>;
};

const PatientList: React.FC<IindexProps> = ({navigation}: IindexProps) => {
  const styles = useMemo(() => createStyles(), []);
  const dispatch = useDispatch();
  const {patient, loading, error} = useAppSelector(state => state.patient);

  useEffect(() => {
    dispatch(getPatientListAction());
  }, []);

  const choosePatient = (value: Patient) => {
    navigation.navigate('PatientDetails', {patienDetails: value});
  };
  const onPress = () => {
    dispatch(getPatientListAction());
  };
  const renderItem = ({item}: ListRenderItemInfo<Patient>) => {
    return <Item key={item.id} item={item} onPress={choosePatient} />;
  };

  if (error) {
    return (
      <View style={styles.containerDescription}>
        <Text style={styles.description} testID="patient-title">
          An error occurred trying to get the information
        </Text>
        <CustomButton
          icon={'plus'}
          label="try again"
          onPress={onPress}
          disabled={loading}
        />
      </View>
    );
  }

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
      {patient.length ? (
        <FlatList
          data={patient}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.containerDescription}>
          <Text style={styles.description} testID="patient-title">
            There is no patient
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export {PatientList};
