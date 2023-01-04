import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView ,ActivityIndicator,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import EvulationDetailsComponent from '../../components/EvulationDetailsComponent';

const EvaluationDetailScreen = (data) => {
   
   
    const navigation = useNavigation();
    const dispatch = useDispatch();
   
    return (
    <EvulationDetailsComponent used_session={data.route.params.item.title} qustion={data.route.params.item.questions} evalulationid={data.route.params.evalid}/>
    )
}



export default EvaluationDetailScreen;