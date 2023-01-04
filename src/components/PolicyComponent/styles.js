import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    
  },
  card: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 16,
    position: 'relative',
    top: -60,
    marginBottom: -35,
  
  },
  cardTitle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  cardSubTitle: {
    fontSize: 11,
    color: colors.white,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  cardSmallText: {
    fontSize:9,
    color: colors.white,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  cardRemainingSession: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    // borderWidth:1,
    backgroundColor:'#FFFFFF',
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    marginHorizontal: 14,
  },
  remainingTitle: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
   width:'90%'
   
  },
  remainingSmallText: {
    fontSize: 8,
    color: colors.grey,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
remainingSessionBox: {
    marginStart: 10,
    borderRadius: 3,
    borderColor:colors.primary,
    borderWidth: 1,
    paddingHorizontal:4,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    
    
  },
  remainingSessionCount: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    
    textAlign:'center',
  },
  useSessionBox:{
    borderColor:colors.primary,
    borderWidth: 1,
    paddingHorizontal:4,
    marginStart: 10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 3,
  },
  usedSessionCount: {
    fontSize:12,
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
    textAlign:'center',
  },
  sessionTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.primary,
    fontFamily: 'Poppins-Regular',
  },
  sessionDes: {
    fontSize: 9,
    fontWeight: '400',
    color: colors.b,
    fontFamily: 'Poppins-Regular',
  },
  btnWrapper: {
    width: 30,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 4,
  },
  btnBookNow: {
    height: 29,
    flex: 1,
    marginStart: 21,
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
});
