import { useNavigation } from '@react-navigation/native';
import React, { createRef, useState, useContext } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import { DefaultTheme, HelperText, TextInput } from 'react-native-paper';
import colors from '../../assets/theme/colors';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';

const LoginComponent = ({
  errors,
  form,
  onSignUpNavigate,
  onChange,
  onSendSubmit,
  otpbox,counter,
  onVerifySubmit
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const passwordRef = createRef();
  const { navigate } = useNavigation();
 
  const textInputTheme = {
    ...DefaultTheme,
    colors: {
      text: colors.black,
      primary: colors.primary,
      placeholder: colors.grey,
      background: colors.transparent,
    },
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Image
            style={styles.loginBgImage}
            source={require('../../assets/images/logo.jpg')}
          />
          <View style={{ flex: 1, backgroundColor: colors.white }}>
            <View style={styles.container}>
              <Text style={styles.title}>Login</Text>
              <TextInput
                label={"Phone Number"}
                theme={textInputTheme}
                underlineColor={colors.grey}
                keyboardType={'phone-pad'}
                style={styles.inputFiled}
                dense={true}
                blurOnSubmit={false}
                value={form.mobileno || null}
                onChangeText={value => {
                  onChange({ name: 'mobileno', value });
                }}
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef?.current?.focus();
                }}
              />
              {errors.mobileno && (
                <HelperText
                  type="error"
                  style={styles.inputFiledError}
                  visible={errors.mobileno}>
                  {errors.mobileno}
                </HelperText>
              )}
              {
                otpbox == false ? <View></View> :
                  <View>
                    <TextInput
                      label="OTP"
                      theme={textInputTheme}
                      underlineColor={colors.grey}
                      style={styles.inputFiled}
                      dense={true}
                      keyboardType={'phone-pad'}
                      value={form.otp || null}
                      onChangeText={value => {
                        onChange({ name: 'otp', value });
                      }}
                      ref={passwordRef}
                    />
                    {errors.otp && (
                      <HelperText
                        type="error"
                        style={styles.inputFiledError}
                        visible={errors.otp}>
                        {errors.otp}
                      </HelperText>
                    )}
                    {
                      counter ==0?  <TouchableOpacity
                      style={styles.forgotPassContainer}
                      onPress={() => {
                        // navigate(FORGOT_PASS);
                      }}>
                      <Text style={styles.forgotPass}>Resend OTP</Text>
                    </TouchableOpacity>:<TouchableOpacity
                      style={styles.forgotPassContainer}
                      disabled
                      onPress={() => {
                        // navigate(FORGOT_PASS);
                      }}>
                      <Text style={[styles.forgotPass,{color:'grey'}]}>Resend OTP {counter}</Text>
                    </TouchableOpacity>
                    }
                  
                  </View>
              }
              {otpbox == false ?
                <CustomButton
                  style={styles.btnLogin}
                  onPress={onSendSubmit}
                  title={"Send OTP"}
                  primary
                /> : <CustomButton
                  style={styles.btnLogin}
                  onPress={onVerifySubmit}
                  title={"Verify OTP"}
                  primary
                />}


            </View>
            {/* <View style={styles.signupTextWrapper}>
            <Text style={styles.signupText}>You don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                onSignUpNavigate();
              }}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}> now</Text>
          </View> */}
          </View>
          <View style={{ padding: 10 }}></View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginComponent;
