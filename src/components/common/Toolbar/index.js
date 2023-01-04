import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/AntDesign';
const Toolbar = ({ title, hideBackBtn, primary, rightOptionMenu, dashboardHeader }) => {
  const navigation = useNavigation();

  // const getBackArrow = () => {
  //   return primary
  //     ? require('../../../assets/images/ic_arrow.png')
  //     : <Ionicons name={'account-edit'} size={35} color={colors.primary} />;
  // };

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: primary ? colors.primary : colors.white,
        },
      ]}>
      {title && (
        <Text
          style={[
            styles.title,
            { color: primary ? colors.white : colors.black },
          ]}>
          {title}
        </Text>
      )}
      {!hideBackBtn && (

        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));
          }}
          style={styles.backBtn}>
          <Ionicons name={'arrowleft'} size={25} color={colors.primary} />
        </TouchableOpacity>
      )}
      {rightOptionMenu && (
        <View style={[styles.rightOptions]}>{rightOptionMenu}</View>
      )}
      {
        dashboardHeader && (
          <View style={styles.rightOptions}>{rightOptionMenu}</View>
        )
      }
    </View>
  );
};

export default Toolbar;
