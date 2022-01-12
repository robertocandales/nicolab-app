import React, {useEffect, useMemo} from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import {useAppSelector} from '../../redux/stores/hooks';
import CustomButton from '../../components/CustomButton';
import {Avatar} from 'react-native-elements';

//images
import {MALE, FEMALE} from './images';

import {
  getPatientDetails,
  postPatientForwarded,
} from '../../redux/actions/patientActions';

//import Icon from 'react-native-vector-icons/FontAwesome';

//types
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

//Styles
import createStyles from './styles';
import {Patient} from '../../config/DTOs/patientType';
import {formatDate} from '../../utils';
import Events from './components/Events';
import {useDispatch} from 'react-redux';

interface IProps {
  route: RouteProp<any, any> | any;
  navigation: NavigationProp<ParamListBase>;
}

const initial: Patient = {
  name: '',
  gender: 'F',
  birthDate: '',
  isForwarded: false,
  createdAt: '',
  updatedAt: '',
  id: '',
};

const PatientDetails: React.FC<IProps> = ({route, navigation}: IProps) => {
  const styles = useMemo(() => createStyles(), []);
  const dispatch = useDispatch();
  const {
    details = initial,
    loading,
    error,
  } = useAppSelector(state => state.patient);
  const {patienDetails} = route.params;

  useEffect(() => {
    dispatch(getPatientDetails(patienDetails.id));
  }, [patienDetails, dispatch]);

  const onPress = (value: Patient) => {
    dispatch(postPatientForwarded(value, navigation));
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" />
        </View>
      )}
      <>
        <TouchableOpacity onPress={navigation.goBack} style={styles.row}>
          {/******** some issue with icons ********/}
          {/*<Icon name="arrow-left" size={18} />*/}
          {/*<Icon raised name="backArrow" color="#f50" />*/}
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{details?.name}</Text>

        <View style={styles.card}>
          <Text style={styles.text}>Date of birth: {details?.birthDate}</Text>

          <Text style={styles.text}>
            Created: {formatDate(details.createdAt)}
          </Text>
          <Text style={styles.text}>
            Updated: {formatDate(details.updatedAt)}
          </Text>
          <View style={styles.gender}>
            <Avatar
              size={64}
              rounded
              source={details?.gender === 'M' ? MALE : FEMALE}
            />
            <Text style={styles.text}>Gender: {details?.gender}</Text>
          </View>
          <>
            <Events events={details.events} />
          </>
          <View style={styles.active}>
            <CustomButton
              icon={'plus'}
              label="Forward a patient"
              onPress={() => onPress(details)}
              disabled={details?.isForwarded || loading}
            />

            {details?.isForwarded && (
              <Text style={styles.textNotification}>
                The patient has already been forwarded
              </Text>
            )}

            {error && (
              <Text style={styles.textNotification}>
                An error occurred trying to get the details, please try again
              </Text>
            )}
          </View>
        </View>
      </>
    </View>
  );
};

export default PatientDetails;
