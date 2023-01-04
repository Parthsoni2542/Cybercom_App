import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import EvaluationComponent from '../../components/EvaluationComponent';
import { getEvaluation } from '../../redux/actions/EvaluationGetAction';

const EvaluationScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const state = useSelector(state => state.EvaluationReducer)

    useEffect(() => {
        dispatch(getEvaluation())
    }, [])

    return (
        <EvaluationComponent upcomingItemClick={item => {
           
            navigation.navigate('EvaluationDetailScreen', {
                item: item._data,
                evalid: item.id
            });
        }}
            historyItemClick={item => {
                console.log("itemitem",item)
                navigation.navigate('EvaluationHistoryDetailScreen', {
                    item: item._data,
                    evalid: item.id,
                    response:item._data
                });
            }} />
    )
}



export default EvaluationScreen;