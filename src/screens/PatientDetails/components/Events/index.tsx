import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {Event} from '../../../../config/DTOs/patientType';

//Styles
import createStyles from './styles';

interface IProps {
  events: Event[];
}

const Events: FC<IProps> = ({events}: IProps) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Events</Text>
      </View>

      {(events || []).map((item: Event, index: number) => (
        <View key={`${item.createdAt}-${item.text}-${index}`}>
          <Text style={styles.text}>◉ {item.text}</Text>
          <View>
            {item.biomarkers && (
              <Text
                style={
                  Object.keys(item.biomarkers)
                    ? styles.textEventTrue
                    : styles.textEventfalse
                }>
                {Object.keys(item.biomarkers)}:&nbsp;
                {Object.keys(item.biomarkers) ? 'Yes' : 'No'}
              </Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default Events;
