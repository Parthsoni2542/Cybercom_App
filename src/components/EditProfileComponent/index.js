import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { HelperText } from 'react-native-paper';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Toolbar from '../common/Toolbar';
import styles from './styles';

const EditProfileComponent = ({
  imageSource,
  setImageSource,
  errors,
  form,
  onChange,
  onSubmit,
}) => {
  const navigation = useNavigation();
  const [bsVisible, setBSVisible] = useState(false);
  const inputFiledRef = useRef(new Array());


  return (
    <Container>
      <Toolbar title={"Edit Profile"} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.wrapper}>
          <Text style={styles.lable}>First Name</Text>
          <TextInput
            blurOnSubmit={false}
            value={"Parth"}
            onChangeText={value => {
              onChange({ name: 'firstName', value });
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              inputFiledRef?.current['lastName']?.focus();
            }}
            style={styles.value}
          />
          {errors.firstName && (
            <HelperText type="error" style={styles.inputFiledError}>
              {errors.firstName}
            </HelperText>
          )}
          <Text style={styles.lable}>Last Name</Text>
          <TextInput
            blurOnSubmit={true}
            value={"soni"}
            onChangeText={value => {
              onChange({ name: 'lastName', value });
            }}
            returnKeyType="done"
            ref={element => (inputFiledRef.current['lastName'] = element)}
            onSubmitEditing={onSubmit}
            style={styles.value}
          />
          {errors.lastName && (
            <HelperText type="error" style={styles.inputFiledError}>
              {errors.lastName}
            </HelperText>
          )}
          <Text style={styles.lable}>Email</Text>
          <TextInput
            blurOnSubmit={false}
            value={"parth@gmail.com"}
            onChangeText={value => {
              onChange({ name: 'email', value });
            }}
            returnKeyType="next"
            ref={element => (inputFiledRef.current['email'] = element)}
            onSubmitEditing={() => {
              inputFiledRef?.current['phoneNo']?.focus();
            }}
            editable={false}
            style={styles.value}
          />
          {errors.email && (
            <HelperText type="error" style={styles.inputFiledError}>
              {errors.email}
            </HelperText>
          )}
          <Text style={styles.lable}>Phone</Text>
          <TextInput
            value={"9512058950"}
            onChangeText={value => {
              onChange({ name: 'phoneNo', value });
            }}
            returnKeyType="done"
            ref={element => (inputFiledRef.current['phoneNo'] = element)}
            onSubmitEditing={onSubmit}
            style={styles.value}
            editable={false}
          />
          {errors.phoneNo && (
            <HelperText type="error" style={styles.inputFiledError}>
              {errors.phoneNo}
            </HelperText>
          )}
          <View style={styles.btnWrapper}>
            <CustomButton
              style={[styles.btn, { marginEnd: 10 }]}
              grey
              title={"CANCEL"}
              onPress={() => {
                navigation.dispatch(StackActions.pop(1));
              }}
            />
            <CustomButton
              style={[styles.btn, { marginStart: 10 }]}
              primary
              title={"SAVE"}
              onPress={onSubmit}
            />
          </View>
        </View>
      </ScrollView>

    </Container>
  );
};


export default EditProfileComponent;
