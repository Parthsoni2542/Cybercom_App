import {useNavigation} from '@react-navigation/native';
import HighlightText from '@sanar/react-native-highlight-text';
import moment from 'moment';
import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const SearchAppointmentCard = ({item, itemClick, section, query}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        itemClick && itemClick(item, section);
      }}>
      <View style={[styles.card]}>
        <Image
          style={{
            alignSelf: 'center',
            height: 60,
            width: 60,
            borderRadius: 100,
          }}
          source={{
            uri: item.appointment_service[0]?.product_image ?? ' ',
          }}
        />
        <View style={styles.cardDetails}>
          <Text style={styles.pacakgeName}>{item?.booking_id ?? ' '}</Text>
          <HighlightText
            numberOfLines={1}
            style={styles.serviceIncluded}
            searchWords={[query]}
            highlightStyle={{fontWeight: 'bold', color: colors.black}}
            textToHighlight={
              item.appointment_service.map(as => as.product_name).join(', ') ??
              ''
            }
          />
          <View style={styles.dateTimeWrapper}>
            <Image source={require('../../../assets/images/ic_calendar.png')} />
            <Text style={styles.dateTime}>
              {moment(item.appointment_date_from)
                .format('DD MMMM, ')
                .toUpperCase() +
                ' AT ' +
                moment(item.appointment_date_from).format('hh:mm A') +
                ' - ' +
                moment(item.appointment_date_to).format('hh:mm A')}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchAppointmentCard;
