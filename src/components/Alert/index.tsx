import React, {FC} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import {useAppSelector} from '../../redux/stores/hooks';
import {useDispatch} from 'react-redux';

//styles
import styles from './styles';
import {hideModalAction} from '../../redux/actions/modalAction';

interface IProps {
  text: string;
}

const CustomAlert: FC<IProps> = ({text}: IProps) => {
  const dispatch = useDispatch();

  const {isVisible} = useAppSelector(store => store.modal);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          dispatch(hideModalAction());
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> {text} </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => dispatch(hideModalAction())}>
              <Text style={styles.textStyle}> Accept </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomAlert;
