import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const ServiceCard = ({item, itemClick}) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        itemClick && itemClick(item);
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
            uri:item.product_image,
          }}
        />
        <View style={styles.cardDetails}>
          <Text style={styles.pacakgeName}>{item.product_name}</Text>
          <Text numberOfLines={1} style={styles.serviceIncluded}>
           {item.product_name}
          </Text>
          <View style={styles.dateTimeWrapper}>
            {
              item.last_purchased_date == null ?<View></View>:
              <View style={{flexDirection:'row'}}>
            <Image source={require('../../../assets/images/ic_calendar.png')} />
            <Text style={styles.dateTime}>
              {moment(item.last_purchased_date)
                .format('DD MMMM,')
                .toUpperCase() +
                ' AT ' +
                item.last_purchased_time
               }
            </Text>
            </View>
              }
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            marginEnd: 10,
          }}>
          <Text
            style={{
              fontSize: 11,
              color: colors.grey,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
            Sessions
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: colors.primary,
              fontWeight: '500',
              fontFamily: 'Poppins-Regular',
            }}>
           {item.remain_session.toString().length==1?0:''||item.remain_session==''?'00':item.remain_session}{item.remain_session}/{item.total_sessions.length==1?0:''}{item.total_sessions}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ServiceCard;
