import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import EditProfileScreen from '../../../screens/EditProfileScreen';
import EvaluationDetailScreen from '../../../screens/EvaluationDetailScreen';
import EvulationDetailsComponent from '../../EvulationDetailsComponent';
import styles from './styles';

const AppointmentCard = ({ item, itemClick }) => 
{
  const  navigation  = useNavigation();
 console.log(item)
  const renderDate = () => {
    if (item.appointment_date_from == null) {
      return (<Text></Text>)
    } else {
      return (
        <View style={styles.dateTimeWrapper}>
          <Image source={require('../../../assets/images/ic_calendar.png')} />
          <Text style={styles.dateTime}>
            {item.appointment_date_from}
          </Text>
        </View>
      )
    }

  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        itemClick && itemClick(item);
      }}>
      
      <View style={[styles.card]}>
        <View style={styles.cardDetails}>
          <Text style={styles.pacakgeName}>{item._data.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppointmentCard;
