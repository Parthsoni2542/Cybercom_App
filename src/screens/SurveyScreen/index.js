import React, { useEffect,useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView ,ActivityIndicator,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/actions/authActions';
import { useDispatch,useSelector } from 'react-redux';
import SurveyComponent from '../../components/SurveyComponent';

import { getsurvey } from '../../redux/actions/surveygetAction';
const SurveyScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [survey, Setsurvey] = useState([]);
    const state = useSelector(state => state.surveyReducer)
   
   

    useEffect(() => {
      dispatch(getsurvey())   
      },[])

     
   
    return (
        <SurveyComponent data={state.surveyactive} expire ={state.surveyExpire}/>

    )
}



export default SurveyScreen;