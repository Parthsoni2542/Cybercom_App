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
    StatusBar, Modal,
} from 'react-native';
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

const data = [
    {
        question: "What attraction in India ?",
        options: ["Chand Minar", "Taj Mahal", "Stadium"],
        correct_option: "Taj Mahal",
        type: 'box',
    }
]



const Expiredata = [
    {
        question: "What attraction in India ?",
        options: ["Chand Minar", "Taj Mahal", "Stadium"],
        correct_option: "Taj Mahal",
        type: 'box',
    },
    {
        question: "What land animal can open its mouth the widest?",
        options: ["Alligator", "Crocodile", "Baboon", "Hippo"],
        correct_option: "Hippo",
        type: 'box',
    },
    {
        question: "What is the largest animal on Earth?",
        options: ["The African elephant", "The blue whale", "The sperm whale", "The giant squid"],
        correct_option: "The blue whale",
        type: 'box',
    },
    {
        question: "What is the only flying mammal?",
        options: ["The bat", "The flying squirrel", "The bald eagle", "The colugo"],
        correct_option: "The bat",
        type: 'box',
    },
    {
        question: "What is the only flying mammalsssss?",
        correct_option: "The bat",
        type: 'text'
    },
    {
        question: "What is the only flying mammalsssss?",
        img: "https://www.wpbeginner.com/wp-content/uploads/2019/04/questionanswersite.png",
        options: ["https://media.glassdoor.com/sql/1529097/cybercomcreation-squarelogo-1485918853816.png", "https://media.glassdoor.com/lst2x/1529097/cybercom-creation-office.jpg", "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"],
        correct_option: "https://media.glassdoor.com/sql/1529097/cybercomcreation-squarelogo-1485918853816.png",
        type: 'image'
    }
]

const Result = [
    {
        question: "What attraction in India ?",
        options: ["Chand Minar", "Taj Mahal", "Stadium"],
        correct_option: "Taj Mahal",
        result: "78%",
        type: 'box',
    },
    {
        question: "What land animal can open its mouth the widest?",
        options: ["Alligator", "Crocodile", "Baboon", "Hippo"],
        correct_option: "Hippo",
        result: "50%",
        type: 'box',
    },
    {
        question: "What is the largest animal on Earth?",
        options: ["The African elephant", "The blue whale", "The sperm whale", "The giant squid"],
        correct_option: "The blue whale",
        result: "70%",
        type: 'box',
    },
    {
        question: "What is the only flying mammal?",
        options: ["The bat", "The flying squirrel", "The bald eagle", "The colugo"],
        correct_option: "The bat",
        result: "70%",
        type: 'box',
    },
    {
        question: "What is the only flying mammalsssss?",
        correct_option: "The bat",
        type: 'text',
        result: "70%",
    },
    {
        question: "What is the only flying mammalsssss?",
        img: "https://www.wpbeginner.com/wp-content/uploads/2019/04/questionanswersite.png",
        options: ["https://media.glassdoor.com/sql/1529097/cybercomcreation-squarelogo-1485918853816.png", "https://media.glassdoor.com/lst2x/1529097/cybercom-creation-office.jpg", "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"],
        correct_option: "https://media.glassdoor.com/sql/1529097/cybercomcreation-squarelogo-1485918853816.png",
        type: 'image',
        result: "70%"
    }
]
const SurveyComponent = (surveydata) => {
    console.log(surveydata.expire)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [getdataset, setData] = useState("")
    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const value = await AsyncStorage.getItem('value')
        const json = JSON.parse(value)
        setData(json)

    }

    return (

        <View style={{ flex: 1 }}>
            <Toolbar
                title={"Survey"}
            />
            <ScrollView>
                <View style={{ alignItems: 'center', }}>
                    <View style={{ width: '95%', height: 50, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Survey Active</Text>
                    </View>
                    {
                        surveydata.data == "" ? <View></View> : surveydata.data.map((index, i) => {

                            return (
                                <TouchableOpacity style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderColor: colors.primary, borderWidth: 1, marginTop: 10 }} onPress={() => {
                                    navigation.navigate('SurveyQuestionScreen', {
                                        data: index._data.questions,
                                        status: "active",
                                        surveyid: index.id,
                                        surveyres: index._data.responses,
                                        surveyids: getdataset
                                    })
                                }}>
                                    <Text style={{ marginLeft: 10, fontFamily: 'Poppins-Regular', fontWeight: '500', fontSize: 15 }}>{index._data.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '95%', height: 50, borderRadius: 10, justifyContent: 'center' }} >
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Poppins-Regular', fontWeight: '400' }}>Survey Expired</Text>
                    </View>
                    {
                        surveydata.expire == "" ? <View></View> : surveydata.expire.map((index, i) => {

                            return (
                                <TouchableOpacity style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderColor: colors.primary, borderWidth: 1, marginTop: 10 }} onPress={() => {
                                    navigation.navigate('SurveyQuestionScreen', {
                                        data: index._data.questions,
                                        status: "expire",
                                        surveyid: index.id,
                                        surveyres: index._data.responses,
                                        surveyids: getdataset
                                    })
                                }}>
                                    <Text style={{ marginLeft: 10, fontFamily: 'Poppins-Regular', fontWeight: '500', fontSize: 15 }}>{index._data.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    {/* <View style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10 }}>Survey Name</Text>
                    </View>
                    <View style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ marginLeft: 10 }}>Survey Name</Text>
                    </View> */}
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ width: '95%', height: 50, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10, fontSize: 15, fontFamily: 'Poppins-Regular', fontWeight: '400', }}>Survey Result </Text>
                    </View>
                    <TouchableOpacity style={{ width: '95%', height: 50, borderRadius: 10, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderColor: colors.primary, borderWidth: 1 }} onPress={() => {
                        navigation.navigate('SurveyQuestionScreen', {
                            data: Result,
                            status: "result"
                        })
                    }} >
                        <Text style={{ marginLeft: 10, fontFamily: 'Poppins-Regular', fontWeight: '500', fontSize: 15 }}>Diwali Celebration</Text>
                    </TouchableOpacity>
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

export default SurveyComponent;
