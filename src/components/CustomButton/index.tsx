import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';

//styles
import styles from './styles';

interface IProps {
  label: string;
  onPress: any;
  icon?: string;
  customStyle?: {} | null;
  disabled?: boolean;
}
const CustomButton: React.FC<IProps> = ({
  label,
  onPress,
  //  icon,
  customStyle = null,
  disabled = false,
}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.touchableContainer}
      disabled={disabled}>
      <View
        style={
          !disabled ? styles.buttonContainer : styles.buttonContainerDisabled
        }>
        <View style={styles.row}>
          {/*{icon && <Icon name={icon} style={styles.addIcon} color="#fafcff" />}*/}
          <Text
            style={
              customStyle || !disabled ? styles.label : styles.labelDisabled
            }>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
