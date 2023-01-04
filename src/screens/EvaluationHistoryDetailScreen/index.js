import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView ,ActivityIndicator,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

import EvulationHistoryDetailsComponent from '../../components/EvulationHistoryDetailsComponent';

const EvaluationHistoryDetailScreen = (data) => {
   
   
    const navigation = useNavigation();
    const dispatch = useDispatch();
   
    return (
    <EvulationHistoryDetailsComponent used_session={data.route.params.item.title} qustion={data.route.params.item.questions} evalulationid={data.route.params.evalid} response={data.route.params.response}/>
    )
}



export default EvaluationHistoryDetailScreen;