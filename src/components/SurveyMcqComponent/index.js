

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
    StatusBar, Modal,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/theme/colors';
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import Toolbar from '../../components/common/Toolbar';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { loginUser } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from 'react-native-star-rating';
import { Checkbox } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { COLORS, SIZES } from '../../constants/theme';
import firestore from '@react-native-firebase/firestore';
import { getsurvey } from '../../redux/actions/surveygetAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SurveyMcqComponent = (item) => {
   
    const items = item.data.item;
    const surveyid = item.data.surveyid;
    const userid = item.data.userid
    
    const { navigate } = useNavigation();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(item.data.status == "active" ? null : items.correct_option);
    const [correctOption, setCorrectOption] = useState(2);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(true)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [qustionid, setqustionid] = React.useState();
    const [optionNumber, setoptionNumber] = React.useState();
    
    const [number, onChangeNumber] = React.useState(null);
    const [progress, setProgress] = useState(new Animated.Value(0));
    const db = firestore();
    const state = useSelector(state => state.surveyReducer)
    const increaseValue = firestore.FieldValue.increment(1);

   
    const validateAnswer = async (selectedOption, qustionid, optionNumber) => {
        setqustionid(qustionid)
        setoptionNumber(optionNumber)
        const quekye = `${userid}_${surveyid}_${qustionid}`
        let jsondata = await AsyncStorage.getItem('value')
        let Submitted= JSON.parse(jsondata);
        if (Submitted) {
            Submitted[quekye] = true
            await AsyncStorage.setItem('value', JSON.stringify(Submitted));
            
        } else {
            let que = {}
            que[quekye] = true
            await AsyncStorage.setItem('value', JSON.stringify(que));
        }
       
        item.data.surveyres ?null:setCurrentOptionSelected(selectedOption);
        setShowNextButton(true)


    }

    
    const handleNext = () => {
        setShowScoreModal(true)
    }


    const restartQuiz = () => {
        setShowScoreModal(false)
        firestore()
            .collection('survey')
            .doc(surveyid)
            .update({
                ["responses." + qustionid + `.${optionNumber}`]: increaseValue
            })
            .then(() => {
                navigation.dispatch(StackActions.pop(1));
            });
        
    }



    const renderQuestion = () => {
        return (
            <View style={{ marginTop: 5 }}>
                {
                    items.url ? <View style={{ marginTop: 10 }}>
                        <Text style={{
                            color: COLORS.black,
                            fontSize: 20,
                            fontFamily: 'Poppins-Regular',
                            fontWeight: 'bold',
                            width: '80%'
                        }}>{items?.text}</Text>
                        <Image
                            style={{
                                width: 200,
                                height: 120,
                                marginTop: 10
                            }}
                            resizeMode="contain"
                            source={{
                                uri: items.url,
                            }}
                        />
                    </View> :
                        <View style={{ marginTop: 20 }}>
                            <Text style={{
                                color: COLORS.black,
                                fontSize: 20,
                                fontFamily: 'Poppins-Regular',
                                fontWeight: 'bold',
                                width: '80%'
                            }}>{items.text}</Text>
                        </View>}
            </View>
        )
    }
    const renderOptions = () => {

        if (items.type == "text") {
            return (
                <View style={{ justifyContent: 'center', marginTop: 5 }}>
                    <TextInput style={{ height: 120, margin: 12, borderWidth: 2, borderColor: '#ececec', borderRadius: 10, backgroundColor: '#ffffff' }}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=" Answer :"
                        keyboardType="default"
                        multiline

                    />
                </View>
            )
        } else if (items.options[0].url) {

            return items.options.map(option => (
                <View style={{ justifyContent: 'center', marginTop: 5 }}>
                    {

                        <TouchableOpacity
                            onPress={() => validateAnswer(option.url)}
                            key={option.url}
                            style={{
                                borderWidth: 2,
                                borderColor: option.url == currentOptionSelected ?
                                    colors.primary : '#ececec',
                                backgroundColor: option.url == currentOptionSelected
                                    ? colors.primary + '20' : '#ffffff',
                                height: 60, borderRadius: 10,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'center',
                                paddingHorizontal: 30,
                                marginVertical: 10
                            }}
                        >
                            <Image
                                style={{
                                    width: 200,
                                    height: 50,
                                }}
                                resizeMode="contain"
                                source={{
                                    uri: option.url,
                                }}
                            />
                            {/* <Text style={{ fontSize: 20, color: option == currentOptionSelected ? colors.primary : '#4e4e5a' }}>{option}</Text> */}
                            {
                                option.url == currentOptionSelected ? (
                                    <View style={{
                                        width: 40, height: 40, borderRadius: 100,
                                        backgroundColor: colors.primary,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        {
                                            item.data.status == "result" ? <Text style={{
                                                color: COLORS.white,
                                                fontSize: 15
                                            }}>{item.data.item.result}</Text>
                                                :
                                                <MaterialCommunityIcons name="check" style={{
                                                    color: COLORS.white,
                                                    fontSize: 25
                                                }} />}
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>}
                </View>
            ))
        } else {

            return items.options.map((option, i) => (
                <View style={{ justifyContent: 'center', marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={() => validateAnswer(option.text, items.id, i)}
                        key={option.text}
                        style={{
                            borderWidth: 2,
                            borderColor: option.text == currentOptionSelected ?
                                colors.primary : '#ececec',
                            backgroundColor: option.text == currentOptionSelected
                                ? colors.primary + '20' : '#ffffff',
                            height: 60, borderRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 30,
                            marginVertical: 10
                        }}
                    >

                        <Text style={{ fontSize: 20, color: option.text == currentOptionSelected ? colors.primary : '#4e4e5a' }}>{option.text}</Text>
                        {
                            option.text == currentOptionSelected ? (
                                <View style={{
                                    width: 40, height: 40, borderRadius: 100,
                                    backgroundColor: colors.primary,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    {
                                        item.data.status == "result" ? <Text style={{
                                            color: COLORS.white,
                                            fontSize: 15
                                        }}>{item.data.item.result}</Text>
                                            :
                                            <MaterialCommunityIcons name="check" style={{
                                                color: COLORS.white,
                                                fontSize: 25
                                            }} />}
                                </View>
                            ) : null
                        }

                    </TouchableOpacity>
                </View>
            ))
        }
    }
    const renderNextButton = () => {
        if (showNextButton) {
           
            { return item.data.surveyres ?<View></View>: <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, marginTop: 5 }}>
                    <TouchableOpacity
                        onPress={handleNext}
                        style={{
                            marginTop: 5, width: '100%', backgroundColor: colors.primary, padding: 10, borderRadius: 5,
                        }}>
                        <Text style={{ fontSize: 15, color: COLORS.white, textAlign: 'center' }}>Submit</Text>
                    </TouchableOpacity>

                </View>
            }


        } else {
            return null
        }
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>

            <Toolbar
                title={"Survey"}
            />
            <ScrollView>
                <View style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    backgroundColor: 'white',
                    position: 'relative',

                }}>



                    {renderQuestion()}
                    {renderOptions()}
                    {renderNextButton()}

                    {/* Score Modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showScoreModal}
                    >
                        <View style={{
                            flex: 1,
                            backgroundColor: 'orange',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                backgroundColor: COLORS.white,
                                width: '90%',
                                borderRadius: 20,
                                padding: 20,
                                alignItems: 'center'
                            }}>
                                <MaterialCommunityIcons name="check-circle-outline" style={{
                                    color: COLORS.success,
                                    fontSize: 70
                                }} />

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    marginVertical: 10
                                }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Thank You</Text>

                                </View>
                                <Text style={{ fontSize: 15, }}>Survey has been sucessfully submitted</Text>
                                {/* Retry Quiz button */}
                                <TouchableOpacity
                                    onPress={restartQuiz}
                                    style={{
                                        backgroundColor: 'orange',
                                        padding: 10, width: '100%', borderRadius: 10, marginTop: 10
                                    }}>
                                    <Text style={{
                                        textAlign: 'center', color: COLORS.white, fontSize: 20
                                    }}>HOME</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

};

export default SurveyMcqComponent;
