import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Animated,
    SafeAreaView,
    StatusBar, Modal
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/theme/colors';
import EditProfileScreen from '../../screens/EditProfileScreen';
import Container from '../common/Container';
import Toolbar from '../common/Toolbar';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { loginUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import StarRating from 'react-native-star-rating';
import { Checkbox } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { COLORS, SIZES } from '../../constants/theme';
import { getsurvey } from '../../redux/actions/surveygetAction';


const SurveyQuestionComponent = (data) => {
    console.log("datadatadatadata",data)
    const[userid,setuserid] = useState("")
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const allQuestions = data.data.data;
    const status = data.data.status;
    const surveyid = data.data.surveyid 
    const isFocused = useIsFocused();
    
   
    useEffect(() => {
        getuser()
        dispatch(getsurvey())
    },[isFocused])

    const getuser = async () =>{
        var token = await AsyncStorage.getItem('token');
        setuserid(token)
    }

   

    return (

        <View style={{ flex: 1 }}>
            <Toolbar
                title={"Survey Questions"}
            />
            <ScrollView>
                <View style={{ alignItems: 'center', }}>
                    <View style={{ width: '95%', height: 50, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Questions</Text>
                    </View>
                    {

                        allQuestions.map((index, i) => {
                           
                            return <TouchableOpacity style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={() => { navigation.navigate('SurveymcqScreen', { item: index, status: status, surveyid: data.data.surveyid, surveyres: data.data.surveyids[`${userid}_${surveyid}_${index.id}`],userid:userid }) }}>
                                <Text style={{ marginLeft: 10 }}>{index.text}</Text>
                                {console.log("ddddffggfggf",data.data.surveyids)}
                                {
                                data.data.surveyids==null?<View></View>:data.data.surveyids[`${userid}_${surveyid}_${index.id}`] ?
                                        <View style={{
                                            width: 40, height: 40, borderRadius: 100,
                                            backgroundColor: colors.primary, marginLeft: 20,
                                            justifyContent: 'center', alignItems: 'center',
                                        }}>
                                            <MaterialCommunityIcons name="check" style={{
                                                color: COLORS.white,
                                                fontSize: 25
                                            }} />
                                        </View> : <View></View>
                                }
                            </TouchableOpacity>
                        })
                    }

                    {/* <View style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10 }}>Survey Name</Text>
                    </View>
                    <View style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10 }}>Survey Name</Text>
                    </View> */}
                </View>

                <View style={{ padding: 20 }}></View>
            </ScrollView>
        </View>
    )
};

export default SurveyQuestionComponent;
