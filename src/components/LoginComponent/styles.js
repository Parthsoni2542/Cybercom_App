import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  loginBgImage: {
    alignSelf: 'center',
    marginVertical: 46,
    height:180,
    width:'70%',
    paddingVertical: 10,
    marginVertical: 10,
   
  },

  title: {
    fontSize: 22,
    color: colors.primary,
    marginTop: 20,
    marginBottom: 16,
    justifyContent: 'center',
    letterSpacing: 1,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
   
  },

  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 10,
    flex: 1,
  },

  inputFiled: {
    paddingHorizontal: 1,
    fontSize: 15,
    marginTop: 8,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  inputFiledError: {
    paddingHorizontal: 1,
    color: colors.primary,
  },
  forgotPassContainer: {
    marginTop: 8,
    marginBottom: 18,
    flexDirection: 'row-reverse',
    fontFamily: 'Poppins-Regular',
  },
  forgotPass: {
    color: colors.primary,
  },
  btnLogin: {
    marginVertical: 25,
  },
  signupTextWrapper: {
    alignSelf: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
  },
  signupText: {
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
  },
  signupLink: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});
