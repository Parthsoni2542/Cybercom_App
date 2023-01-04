import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  topWrapper: {
    flex: 1,
  },
  proflieWrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileName: {
    color: colors.primary,
    fontSize: 19,
    marginTop: 10,
    textTransform: 'capitalize',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  detailWrapper: {
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 16,
  },
  lable: {
    marginTop: 8,
    color: colors.grey,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  value: {
    color: colors.black,
    fontSize: 12,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    paddingStart: 0,
    paddingVertical: 4,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  changePassword: {
    fontSize: 12,
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    paddingStart: 0,
    color: colors.primary,
    paddingVertical: 10,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  logout: {
    fontSize: 12,
    paddingStart: 0,
    color: colors.primary,
    paddingVertical: 10,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
});
