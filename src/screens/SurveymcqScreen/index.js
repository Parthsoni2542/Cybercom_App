import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView ,ActivityIndicator,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import SurveyMcqComponent from '../../components/SurveyMcqComponent'
const SurveymcqScreen = (data) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
  
    return (
        <SurveyMcqComponent data={data.route.params}/>

    )
}



export default SurveymcqScreen;