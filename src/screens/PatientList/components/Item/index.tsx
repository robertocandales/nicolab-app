import React, {FC, useMemo} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useAppSelector} from '../../../../redux/stores/hooks';
import {formatDate} from '../../../../utils';

//types
import {Patient} from '../../../../DTOs/patientType';
//Styles
import createStyles from './styles';

//images
import {MALE, FEMALE} from '../../images';

interface IProps {
  item: Patient;
  onPress: (value: Patient) => void;
}

const Item: FC<IProps> = ({item, onPress}: IProps) => {
  const styles = useMemo(() => createStyles(), []);
  const {loading} = useAppSelector(state => state.patient);

  return (
    <View testID="patient-container-list">
      <TouchableOpacity
        disabled={loading}
        style={styles.button}
        onPress={() => onPress(item)}>
        <View style={styles.card}>
          <View style={styles.textNameContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.item1}>
              <Avatar
                size={64}
                rounded
                source={item.gender === 'M' ? MALE : FEMALE}
                containerStyle={
                  item.gender === 'F' ? styles.avatarFemale : styles.avatarMale
                }
              />
              <Text style={styles.textData}>Gender</Text>
            </View>
            <View style={styles.item2}>
              <Text style={styles.textData}>
                Date of birth: {item.birthDate}
              </Text>
              <Text style={styles.textData}>
                Created: {formatDate(item.createdAt)}
              </Text>
              <Text style={styles.textData}>
                Updated: {formatDate(item.updatedAt)}
              </Text>
            </View>
          </View>
          <View style={styles.forwardedFlex}>
            <View style={styles.forwardedContainer}>
              <Text
                style={
                  item.isForwarded
                    ? styles.textForwardedTrue
                    : styles.textForwardedFalse
                }>
                Forwarded patient: {item.isForwarded ? 'Yes' : 'No'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
