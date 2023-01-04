import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView ,ActivityIndicator,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/actions/authActions';
import { useDispatch,useSelector } from 'react-redux';
import PolicyComponent from '../../components/PolicyComponent';
import { getPolicy } from '../../redux/actions/getPolicy';

const PolicyScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const state = useSelector(state => state.policyReducer)
    console.log("policyReducer",state.faq)
    useEffect(() => {
      dispatch(getPolicy())
  }, [])

   
    return (
      <PolicyComponent faq={state.faq}/>

    )
}



export default PolicyScreen;